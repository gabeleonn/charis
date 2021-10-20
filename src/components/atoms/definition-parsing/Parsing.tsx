import { ParsingProps } from '@/interfaces';
import { AncientWord } from '../ancient-word';
import { ParsingText, ParsingWrapper } from './styled';

export function DefinitionParsing({
  wordAncient,
  wordTranslit,
  origin,
  parsing,
}: ParsingProps): JSX.Element {
  return (
    <ParsingWrapper>
      <p>
        <AncientWord origin={origin}>{wordAncient}</AncientWord>| {wordTranslit}
      </p>
      <ParsingText>{parsing}</ParsingText>
    </ParsingWrapper>
  );
}
