import { ReactChild, ReactNode } from 'react';

export interface AncientWordProps {
  origin: 'hebrew' | 'greek';
  children: ReactChild | ReactNode;
}
