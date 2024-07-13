import { ReactNode } from 'react';

export interface UiTableProps {
  header: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  pugination?: ReactNode;
  isLoading?: boolean;
  isUpdating?: boolean;
  skeleton?: ReactNode;
}
