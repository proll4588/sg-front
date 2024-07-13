import { PaperProps } from '@mui/material';
import { ReactNode } from 'react';
import { FieldMapType } from '../types/FieldMapType';

export interface UiTableCardProps<T> {
  id: string;
  data: T;
  visibleFields: FieldMapType<T>[];
  renderActions?: (
    isOpen: boolean,
    setIsLoading: (loading: boolean) => void
  ) => ReactNode;
  renderHeaderChildren?: () => ReactNode;
  onClick?: () => void;
  paperProps?: PaperProps;
}
export type UiTableCardFunction = <T>(
  props: UiTableCardProps<T>
) => React.JSX.Element;
