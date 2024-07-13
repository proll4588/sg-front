import { Checkbox } from '@mui/material';
import { useEffect } from 'react';
import { useTableCheck } from '../contexts/TableCheckContext';

export interface UiTableSingleRowCheckBoxProps<T> {
  data: T;
}

export const UiTableSingleRowCheckBox = <T,>({
  data,
}: UiTableSingleRowCheckBoxProps<T>) => {
  const { toggle, isSelected } = useTableCheck<T>();

  return (
    <Checkbox
      checked={isSelected(data)}
      onClick={(e) => {
        e.stopPropagation();
        toggle(data);
      }}
    />
  );
};

export interface UiTableAllRowCheckBoxProps<T> {
  allData: T[];
}

export const UiTableAllRowCheckBox = <T,>({
  allData,
}: UiTableAllRowCheckBoxProps<T>) => {
  const { checkedItems, selectAll, unselectAll } = useTableCheck<T>();

  useEffect(() => {
    const fun = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        unselectAll();
      }
    };

    window.addEventListener('keydown', fun);

    return () => {
      window.removeEventListener('keydown', fun);
    };
  }, []);

  return (
    <Checkbox
      disabled={allData.length === 0}
      checked={
        checkedItems.length === allData.length && checkedItems.length !== 0
      }
      indeterminate={
        checkedItems.length < allData.length && checkedItems.length !== 0
      }
      onClick={(e) => {
        e.stopPropagation();
        if (checkedItems.length < allData.length) selectAll(allData);
        else unselectAll();
      }}
    />
  );
};
