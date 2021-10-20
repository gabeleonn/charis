import { ReactChild, ReactNode } from 'react';

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

export interface ButtonProps extends ReactComponent {
  to?: string;
  onClick?: () => void;
  ariaLabel: string;
  id: string;
}

export interface ChapterHeaderProps {
  reference: string;
}
