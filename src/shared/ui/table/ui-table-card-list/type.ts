import { GridProps } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';
import { FieldMapType } from '../types/FieldMapType';

export interface UiTableCardListProps<T> extends PropsWithChildren {
  pagination?: ReactNode;
  header?: ReactNode;

  containerProps?: GridProps;
  stackContainerProps?: GridProps;

  fields: FieldMapType<T>[];
  onChangeFields: (value: FieldMapType<T>[]) => void;

  isLoading?: boolean;
}
export type UiTableCardListFunction = <T>(
  props: UiTableCardListProps<T>
) => React.JSX.Element;
