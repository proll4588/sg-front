import { TableCellProps } from '@mui/material';
import { ReactNode } from 'react';

export type FieldMapType<T> = {
  field: keyof T;
  title: string;
  renderComponent: (value: T, index?: number) => ReactNode;
  getTableCellProps: () => TableCellProps;
  order: number;
  isShow: boolean;
};
