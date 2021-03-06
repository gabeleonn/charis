import { ChangeEvent, ReactChild, ReactNode } from 'react';

interface ReactComponent {
  children: ReactChild | ReactNode;
}

type originTypes = 'hebrew' | 'greek';
export interface AncientWordProps extends ReactComponent {
  origin: originTypes;
}

export interface VerseProps extends ReactComponent {
  number: number;
}

export interface ALinkProps extends ReactComponent {
  href: string;
}

export interface ParsingProps {
  origin: originTypes;
  wordAncient: string;
  wordTranslit: string;
  parsing: string;
}

export interface LabelProps extends ReactComponent {
  label: string;
  htmlFor: string;
  helperText?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}
export interface SelectProps extends Pick<LabelProps, 'helperText' | 'label'> {
  placeholder: string;
  value: SelectOption;
  options: SelectOption[];
  onChange: (event: SelectOption | null) => void;
  name: string;
  disabled?: boolean;
}

type InputTypes = 'textarea' | 'text';
export interface InputProps extends Pick<LabelProps, 'helperText' | 'label'> {
  type: InputTypes;
  placeholder: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  name: string;
  disabled?: boolean;
}

export interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleSearch: () => void;
  name: string;
  disabled?: boolean;
}

export interface CheckboxProps {
  onChange: (value: boolean) => void;
  name: string;
  label: string;
  checked: boolean;
}

export interface ButtonProps extends ReactComponent {
  to?: string;
  onClick?: () => void;
  ariaLabel: string;
  id: string;
  disabled?: boolean;
}

export interface ChapterHeaderProps {
  reference: string;
}
