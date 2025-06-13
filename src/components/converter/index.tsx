import { Title, Wrapper } from "./styled.tsx";
import Switch from "../switch";
import { useState } from "react";
import { EXCHANGE_ACTIONS } from "../../utils/constants.ts";
import Button from "../button";

function Converter() {
  const [exchangeType, setExchangeType] = useState<EXCHANGE_ACTIONS>(
    EXCHANGE_ACTIONS.buy,
  );
  return (
    <Wrapper>
      <Title>Exchange BTC / USD</Title>
      <Switch value={exchangeType} onChange={setExchangeType} />
      <Button>{exchangeType} BTC</Button>
    </Wrapper>
  );
}

export default Converter;
