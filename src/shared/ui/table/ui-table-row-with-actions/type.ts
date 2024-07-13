import { TableRowProps } from '@mui/material';
import { ReactNode } from 'react';

export interface UiTableRowWithActionsProps extends TableRowProps {
  renderActions: (
    isOpen: boolean,
    setIsLoading: (loading: boolean) => void
  ) => ReactNode | ReactNode[];
}
