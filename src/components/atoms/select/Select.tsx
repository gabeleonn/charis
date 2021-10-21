import ReactSelect from 'react-select';
import { SelectProps } from '@/interfaces';
import { Label } from '@/components/atoms/label';
import theme from '@/styles/theme';

/* istanbul ignore next */
export function Select({
  label,
  placeholder,
  name,
  helperText,
  disabled = false,
  value,
  onChange,
  options,
}: SelectProps): JSX.Element {
  return (
    <Label label={label} htmlFor={name} helperText={helperText}>
      <ReactSelect
        onChange={data => onChange(data)}
        options={options}
        defaultValue={value}
        isDisabled={disabled}
        placeholder={placeholder}
        inputId={name}
        name={name}
        aria-labelledby={`select-label-${name}`}
        isSearchable
        styles={{
          control: base => ({
            ...base,
            borderRadius: '200px',
            height: '48px',
            padding: '0 8px',
          }),
          menu: base => ({
            ...base,
            borderRadius: '8px',
            overflow: 'hidden',
            padding: '0',
            margin: '8px 1% 0',
            width: '98%',
          }),
          menuList: base => ({
            ...base,
            padding: '0',
          }),
        }}
        theme={selectTheme => ({
          ...selectTheme,
          colors: {
            ...selectTheme.colors,
            primary: theme.colors.purple.regular,
            primary25: theme.colors.gray.lighter,
            primary50: theme.colors.gray.lighter,
          },
        })}
      />
    </Label>
  );
}
