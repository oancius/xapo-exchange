import { Text } from "./styled.tsx";
import { usePulseOnChange } from "../../../utils/utilHooks.ts";

interface Props {
  text: string;
}

function PulsatingText({ text }: Props) {
  const animationKey = usePulseOnChange(text);

  return <Text key={animationKey}>{text}</Text>;
}

export default PulsatingText;
