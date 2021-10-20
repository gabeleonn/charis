import { ChangeEvent, ReactChild, ReactNode } from 'react';

interface ReactComponent {
  children: ReactChild | ReactNode;
}

export interface AncientWordProps extends ReactComponent {
  origin: 'hebrew' | 'greek';
}

export interface VerseProps extends ReactComponent {
  number: number;
}

export interface ALinkProps extends ReactComponent {
  href: string;
}

export interface LabelProps extends ReactComponent {
  label: string;
  htmlFor: string;
  helperText?: string;
}

export enum InputTypes {
  TEXTAREA = 'textarea',
  TEXT = 'text',
}
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
