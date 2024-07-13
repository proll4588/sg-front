import { useContext } from 'react';
import { TableCheckContext } from './TableCheckContext';
import { TableCheckContextFields } from './type';

export const useTableCheck = <T>() => {
  const value = useContext<TableCheckContextFields<T>>(TableCheckContext);

  return value;
};
