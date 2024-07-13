import { useState } from 'react';
import { TableCheckContext } from './TableCheckContext';
import { TableCheckProviderProps } from './type';

export const TableCheckProvider = <T,>({
  children,
  getIsEqual,
  renderSelectList,
}: TableCheckProviderProps<T>) => {
  const [checkedItems, setCheckedItems] = useState<T[]>([]);

  const toggle = (item: T) => {
    setCheckedItems((prev) => {
      const has = isSelected(item);

      if (has) return [...prev].filter((el) => !getIsEqual(el, item));
      else return [...prev, item];
    });
  };

  const isSelected = (item: T) => {
    return checkedItems.some((el) => getIsEqual(item, el));
  };

  const unselectAll = () => {
    setCheckedItems([]);
  };

  const selectAll = (items: T[]) => {
    setCheckedItems(items);
  };

  return (
    <TableCheckContext.Provider
      value={{ isSelected, toggle, checkedItems, unselectAll, selectAll }}
    >
      {children}
      {renderSelectList(checkedItems)}
    </TableCheckContext.Provider>
  );
};
