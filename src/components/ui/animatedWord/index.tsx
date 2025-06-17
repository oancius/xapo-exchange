import { Word, Wrapper } from "./styled.tsx";

interface Props {
  word: string;
}

function AnimatedWord({ word }: Props) {
  return (
    <Wrapper>
      <Word key={word}>{word}</Word>
    </Wrapper>
  );
}

export default AnimatedWord;
