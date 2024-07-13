/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';
import { INIT_TABLE_CHECK_CONTEXT } from './constants';
import { TableCheckContextFields } from './type';

export const TableCheckContext = createContext<TableCheckContextFields<any>>(
  INIT_TABLE_CHECK_CONTEXT
);
