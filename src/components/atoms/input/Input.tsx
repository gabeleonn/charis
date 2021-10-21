import { InputProps } from '@/interfaces';
import { Label } from '@/components/atoms/label';
import { InputWrapper } from './styled';

export function Input({
  type,
  label,
  placeholder,
  name,
  helperText,
  disabled = false,
  value,
  onChange,
}: InputProps): JSX.Element {
  function renderProperType() {
    if (type === 'text') {
      return (
        <InputWrapper
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={e => onChange(e)}
          autoComplete="off"
        />
      );
    }
    return (
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        rows={10}
        disabled={disabled}
        value={value}
        onChange={e => onChange(e)}
      />
    );
  }

  return (
    <Label label={label} htmlFor={name} helperText={helperText}>
      {renderProperType()}
    </Label>
  );
}
