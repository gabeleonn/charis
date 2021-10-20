import { VerseProps } from '@/interfaces';
import { VerseWrapper, VerseNumber } from './styled';

export function Verse({ number, children }: VerseProps): JSX.Element {
  return (
    <VerseWrapper>
      <VerseNumber>{number}</VerseNumber>
      {children}
    </VerseWrapper>
  );
}
