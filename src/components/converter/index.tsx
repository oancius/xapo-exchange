import { ButtonWrapper, ErrorText, Rate, Title, Wrapper } from "./styled.tsx";
import Switch from "../switch";
import { useEffect, useState } from "react";
import { EXCHANGE_ACTIONS } from "../../utils/constants.ts";
import Button from "../ui/button";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import NumericInput from "../ui/input";
import { StyledForm } from "../ui/generic/styled.tsx";
import { CurrencyTag, Group, Label } from "../ui/input/styled.tsx";
import AnimatedWord from "../ui/animatedWord";
import ConfirmActionModal from "../modals/confirmAction";
import { useAppSelector } from "../../utils/utilHooks.ts";
import { selectCoin } from "../../slices/coins.ts";
import { formatNumber } from "../../utils/helpers.ts";
import PulsatingText from "../ui/pulsatingText";
import SuccessModal from "../modals/success";

export interface ConverterFormInterface {
  fromAmount: number | "";
  toAmount: number | "";
}

function Converter() {
  const coinData = useAppSelector(selectCoin);
  /* const locale = navigator.language; // I disabled it due to a bug on my ios device. */
  const locale = "en-US";
  const [exchangeType, setExchangeType] = useState<EXCHANGE_ACTIONS>(
    EXCHANGE_ACTIONS.buy,
  );
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  // Used to save the values after submit, to not be affected by further price changes
  const [frozenFormValues, setFrozenFormValues] = useState<
    ConverterFormInterface & { price: number }
  >({ fromAmount: 0, toAmount: 0, price: 0 });
  const [formKey, setFormKey] = useState(0);

  const InputsSyncHandler = () => {
    const { values, setFieldValue } = useFormikContext<
      ConverterFormInterface & { _lastChanged: string }
    >();

    useEffect(() => {
      if (coinData) {
        const btcPrice = coinData.price;
        if (
          values._lastChanged === "fromAmount" &&
          typeof values.fromAmount === "number"
        ) {
          const newToAmount = +(values.fromAmount * btcPrice).toFixed(2);
          void setFieldValue("toAmount", newToAmount, false);
          void setFieldValue("_lastChanged", "", false);
        } else if (
          values._lastChanged === "toAmount" &&
          typeof values.toAmount === "number"
        ) {
          const newFromAmount = +(values.toAmount / btcPrice).toFixed(18);
          void setFieldValue("fromAmount", newFromAmount, false);
          void setFieldValue("_lastChanged", "", false);
        }
      }
    }, [
      values._lastChanged,
      values.fromAmount,
      values.toAmount,
      setFieldValue,
    ]);

    useEffect(() => {
      if (coinData) {
        const btcPrice = coinData.price;
        if (typeof values.fromAmount === "number") {
          const newToAmount = +(values.fromAmount * btcPrice).toFixed(2);
          void setFieldValue("toAmount", newToAmount, false);
          void setFieldValue("_lastChanged", "", false);
        }
      }
    }, [coinData]);

    return null;
  };

  const initialValues: ConverterFormInterface & { _lastChanged: string } = {
    fromAmount: "",
    toAmount: "",
    _lastChanged: "",
  };

  const formSchema = Yup.object({
    fromAmount: Yup.number()
      .required("This field is required")
      .min(0, "Must be positive"),
    toAmount: Yup.number()
      .required("This field is required")
      .min(0, "Must be positive"),
  });

  return (
    <Wrapper>
      <Title>Exchange BTC / USD</Title>
      <Switch value={exchangeType} onChange={setExchangeType} />
      <Formik
        key={formKey}
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values) => {
          setFrozenFormValues({
            fromAmount: values.fromAmount,
            toAmount: values.toAmount,
            price: coinData ? coinData?.price : 0,
          });
          setShowConfirmModal(true);
        }}
      >
        {({ errors, touched, isValid, dirty }) => (
          <StyledForm>
            <Group>
              <Label>
                Amount to{" "}
                <AnimatedWord
                  word={exchangeType === EXCHANGE_ACTIONS.buy ? "buy" : "sell"}
                />
              </Label>
              <NumericInput
                name="fromAmount"
                placeholder="0.00"
                decimals={18}
              />
              {touched.fromAmount && errors.fromAmount && (
                <ErrorText>{errors.fromAmount}</ErrorText>
              )}
              <CurrencyTag>BTC</CurrencyTag>
            </Group>
            <Group>
              <Label>
                Amount you{" "}
                <AnimatedWord
                  word={exchangeType === EXCHANGE_ACTIONS.buy ? "pay" : "get"}
                />
              </Label>
              <NumericInput name="toAmount" placeholder="0.00" />
              {touched.toAmount && errors.toAmount && (
                <ErrorText>{errors.toAmount}</ErrorText>
              )}
              <CurrencyTag>USD</CurrencyTag>
            </Group>
            {/* Logic component for syncing fields */}
            <InputsSyncHandler />
            <Rate>
              Exchange rate: 1 BTC = {` `}
              <PulsatingText
                text={
                  coinData?.price
                    ? `${formatNumber(coinData.price, locale, 0)} USD`
                    : ""
                }
              />
            </Rate>
            <ButtonWrapper>
              <Button disabled={!isValid || !dirty}>{exchangeType} BTC</Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>
      <ConfirmActionModal
        isOpen={showConfirmModal}
        onConfirm={() => {
          setShowConfirmModal(false);
          setShowSuccessModal(true);
          setFormKey((prev) => prev + 1); // To be moved on the real request success
        }}
        onCancel={() => setShowConfirmModal(false)}
        title={"Confirm exchange action!"}
        message={`Please confirm that you want to ${exchangeType} ${formatNumber(frozenFormValues.fromAmount as number, locale, 18)} BTC for ${formatNumber(frozenFormValues.toAmount as number, locale, 2)} USD at a rate of ${formatNumber(frozenFormValues.price, locale, 2)} USD for 1 BTC`}
      />
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Exchange Completed"
        description="Your exchange was successfull!"
      />
    </Wrapper>
  );
}

export default Converter;
