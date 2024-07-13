import { TableCellProps } from '@mui/material';
import { ReactNode } from 'react';

export interface UiTableCellWithActionsProps extends TableCellProps {
  actions: {
    text: string;
    icon?: ReactNode;
    onClick: () => void;
    disabled?: boolean;
  }[];
}
