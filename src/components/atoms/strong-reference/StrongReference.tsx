import { AncientWordProps } from '@/interfaces';
import { StrongReferenceWrapper } from './styled';

export function StrongReference({
  origin,
  children,
}: AncientWordProps): JSX.Element {
  return (
    <StrongReferenceWrapper>
      {origin === 'greek' ? 'G' : 'H'}
      {children}
    </StrongReferenceWrapper>
  );
}
