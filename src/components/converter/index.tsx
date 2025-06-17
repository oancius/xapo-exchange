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

export interface ConverterFormInterface {
  fromAmount: number | "";
  toAmount: number | "";
}

const BTC_PRICE = 100.23;

function Converter() {
  const [exchangeType, setExchangeType] = useState<EXCHANGE_ACTIONS>(
    EXCHANGE_ACTIONS.buy,
  );
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  // Used to save the values after submit, to don't be affected of further price changes
  const [frozenFormValues, setFrozenFormValues] =
    useState<ConverterFormInterface>({ fromAmount: 0, toAmount: 0 });

  const InputsSyncHandler = () => {
    const { values, setFieldValue } = useFormikContext<
      ConverterFormInterface & { _lastChanged: string }
    >();

    useEffect(() => {
      if (
        values._lastChanged === "fromAmount" &&
        typeof values.fromAmount === "number"
      ) {
        const newToAmount = +(values.fromAmount * BTC_PRICE).toFixed(2);
        void setFieldValue("toAmount", newToAmount, false);
        void setFieldValue("_lastChanged", "", false);
      } else if (
        values._lastChanged === "toAmount" &&
        typeof values.toAmount === "number"
      ) {
        const newFromAmount = +(values.toAmount / BTC_PRICE).toFixed(2);
        void setFieldValue("fromAmount", newFromAmount, false);
        void setFieldValue("_lastChanged", "", false);
      }
    }, [
      values._lastChanged,
      values.fromAmount,
      values.toAmount,
      setFieldValue,
    ]);

    return null;
  };

  const initialValues: ConverterFormInterface = {
    fromAmount: "",
    toAmount: "",
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
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values) => {
          setFrozenFormValues(values);
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
              <NumericInput name="fromAmount" placeholder="0.00" />
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
            <Rate>Exchange rate: 1 BTC = ${BTC_PRICE} USD</Rate>
            <ButtonWrapper>
              <Button disabled={!isValid || !dirty}>{exchangeType} BTC</Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>
      <ConfirmActionModal
        isOpen={showConfirmModal}
        onConfirm={() => setShowConfirmModal(false)}
        onCancel={() => setShowConfirmModal(false)}
        title={"Confirm exchange action!"}
        message={`Please confirm that you want to ${exchangeType} ${frozenFormValues.fromAmount} BTC for ${frozenFormValues.toAmount} USD at a rate of ${BTC_PRICE} USD for 1 BTC`}
      />
    </Wrapper>
  );
}

export default Converter;
