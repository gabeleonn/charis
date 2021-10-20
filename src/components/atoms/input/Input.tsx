import { InputProps, InputTypes } from '@/interfaces';
import { Label } from '../label';

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
    if (type === InputTypes.TEXT) {
      return (
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={e => onChange(e)}
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
