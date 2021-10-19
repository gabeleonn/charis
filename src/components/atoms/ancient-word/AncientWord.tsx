import { AncientWordProps } from '@/interfaces';
import { GreekWord, HebrewWord } from './styled';

export function AncientWord({
  origin,
  children,
}: AncientWordProps): JSX.Element {
  return origin === 'hebrew' ? (
    <HebrewWord>{children}</HebrewWord>
  ) : (
    <GreekWord>{children}</GreekWord>
  );
}
