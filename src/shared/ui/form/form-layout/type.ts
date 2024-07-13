import { GridProps } from '@mui/material';
import { ReactNode } from 'react';

export interface FormLayoutProps extends GridProps {
  actions: ReactNode;
}
