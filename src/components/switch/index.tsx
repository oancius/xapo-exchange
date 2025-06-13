import { Option, Wrapper } from "./styled.tsx";
import { EXCHANGE_ACTIONS } from "../../utils/constants.ts";

interface Props {
  value: EXCHANGE_ACTIONS;
  onChange: (value: EXCHANGE_ACTIONS) => void;
}

function Switch({ value, onChange }: Props) {
  return (
    <Wrapper>
      <Option
        $selected={value === EXCHANGE_ACTIONS.buy}
        onClick={() => onChange(EXCHANGE_ACTIONS.buy)}
      >
        Buy
      </Option>
      <Option
        $selected={value === EXCHANGE_ACTIONS.sell}
        onClick={() => onChange(EXCHANGE_ACTIONS.sell)}
      >
        Sell
      </Option>
    </Wrapper>
  );
}

export default Switch;
