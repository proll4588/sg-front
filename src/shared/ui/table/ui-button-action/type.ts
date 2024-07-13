import { ReactNode } from 'react';

export interface UiButtonActionProps {
  text: string;
  icon?: ReactNode;
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
}
