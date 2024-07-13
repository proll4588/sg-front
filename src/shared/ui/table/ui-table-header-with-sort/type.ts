import { TableHeadTypeMap } from '@mui/material';

import { ReactNode } from 'react';
import { FieldMapType } from '../types/FieldMapType';

export type Order = 'asc' | 'desc';

export type UiTableHeaderWithSortType = <T>(props: {
  viewCells: FieldMapType<T>[];
  allCells: FieldMapType<T>[];
  setViewCells: (value: FieldMapType<T>[]) => void;
  headProps?: TableHeadTypeMap['props'];

  orderBy: FieldMapType<T>['field'] | null;
  order: Order | null;
  onChangeOrder?: (params: {
    order: Order | null;
    orderBy: FieldMapType<T>['field'] | null;
  }) => void;

  additional?: ReactNode;

  orderByList: FieldMapType<T>['field'][];
}) => JSX.Element;
