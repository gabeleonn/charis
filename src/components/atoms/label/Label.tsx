import { LabelProps } from '@/interfaces';
import { LabelWrapper, LabelText, LabelHelperText } from './styled';

export function Label({
  label,
  helperText,
  children,
  htmlFor,
}: LabelProps): JSX.Element {
  return (
    <LabelWrapper>
      <LabelText htmlFor={htmlFor} hasHelperText={!!helperText}>
        {label}
      </LabelText>
      {helperText && <LabelHelperText>{helperText}</LabelHelperText>}
      {children}
    </LabelWrapper>
  );
}
