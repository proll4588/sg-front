import { TableHeadTypeMap } from '@mui/material';
import { FieldMapType } from '../types/FieldMapType';

export type UiTableHeaderType = <T>(props: {
  viewCells: FieldMapType<T>[];
  allCells: FieldMapType<T>[];
  setViewCells?: (value: FieldMapType<T>[]) => void;
  showSettings?: boolean | undefined;
  headProps?: TableHeadTypeMap['props'];
}) => JSX.Element;
