import { PaperProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ColapsblePaperProps {
  paperProps?: PaperProps;
  children: ReactNode;
  collapsedSize?: number | string;
  onCollapsChange?: (isCollapsed: boolean) => void;
  headChildren?: ReactNode;
}
