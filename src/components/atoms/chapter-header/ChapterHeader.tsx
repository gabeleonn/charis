import { ChapterHeaderProps } from '@/interfaces';
import { ChapterHeaderWrapper } from './styled';

export function ChapterHeader({ reference }: ChapterHeaderProps): JSX.Element {
  return <ChapterHeaderWrapper>{reference}</ChapterHeaderWrapper>;
}
