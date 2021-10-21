import { CheckboxProps } from '@/interfaces';

import { CheckboxIconWrapper, CheckboxLabel, CheckboxWrapper } from './styled';

import CheckIcon from '../../../../public/assets/icons/check.svg';

export function Checkbox({
  name,
  onChange,
  checked,
  label,
}: CheckboxProps): JSX.Element {
  return (
    <CheckboxWrapper>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={() => onChange(!checked)}
        checked={checked}
      />
      <CheckboxIconWrapper
        data-testid="test-icon-wrapper"
        isChecked={checked}
        onClick={() => onChange(!checked)}
      >
        <CheckIcon width={12} data-testid="test-icon" />
      </CheckboxIconWrapper>
      <CheckboxLabel htmlFor={name}>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
}
