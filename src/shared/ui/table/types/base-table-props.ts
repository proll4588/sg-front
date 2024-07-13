import { ReactNode } from 'react';
import { FieldMapType } from './FieldMapType';

export interface BaseComponentProps<T> {
  data: T[];

  isLoading?: boolean;
  isUpdate?: boolean;

  fields: FieldMapType<T>[];
  visibleFields: FieldMapType<T>[];
  onChangeFields: (fields: FieldMapType<T>[]) => void;

  onClick?: (value: T) => void;
  renderActions: (
    data: T,
    actionArgs: { isOpen: boolean; setIsLoading: (loading: boolean) => void }
  ) => ReactNode;
}
