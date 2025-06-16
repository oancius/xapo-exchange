import { Title, Wrapper } from "./styled.tsx";
import Switch from "../switch";
import { useEffect, useState } from "react";
import { EXCHANGE_ACTIONS } from "../../utils/constants.ts";
import Button from "../ui/button";
import { Form, Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import NumericInput from "../ui/input";

export interface ConverterFormInterface {
  fromAmount: number | "";
  toAmount: number | "";
}

const BTC_PRICE = 100.23;

function Converter() {
  const [exchangeType, setExchangeType] = useState<EXCHANGE_ACTIONS>(
    EXCHANGE_ACTIONS.buy,
  );

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
    fromAmount: Yup.number().required("Required").min(0, "Must be positive"),
    toAmount: Yup.number().required("Required").min(0, "Must be positive"),
  });

  return (
    <Wrapper>
      <Title>Exchange BTC / USD</Title>
      <Switch value={exchangeType} onChange={setExchangeType} />
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={(values) => console.log("Submitted", values)}
      >
        {({ errors, touched }) => (
          <Form>
            <label>
              You {exchangeType === EXCHANGE_ACTIONS.buy ? "buy" : "sell"}
            </label>
            <NumericInput name="fromAmount" placeholder="0.00" />
            {touched.fromAmount && errors.fromAmount && (
              <div>{errors.fromAmount}</div>
            )}

            <label>
              You {exchangeType === EXCHANGE_ACTIONS.buy ? "pay" : "get"}
            </label>
            <NumericInput name="toAmount" placeholder="0.00" />
            {touched.toAmount && errors.toAmount && (
              <div>{errors.fromAmount}</div>
            )}

            {/* Logic component for syncing fields */}
            <InputsSyncHandler />

            <Button>{exchangeType} BTC</Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default Converter;
