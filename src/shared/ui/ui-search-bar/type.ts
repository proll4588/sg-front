import { GridProps } from '@mui/material';
import { ReactNode } from 'react';
import { UiInputSearchProps } from '../UiInputSearch';

export interface UiSearchBarProps extends UiInputSearchProps {
  children?: ReactNode;
  containterProps?: GridProps;
}
