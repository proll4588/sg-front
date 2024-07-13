import { PropsWithChildren, ReactNode } from 'react';

export interface TableCheckProviderProps<T> extends PropsWithChildren {
  getIsEqual: (item: T, selectedItem: T) => boolean;
  renderSelectList: (item: T[]) => ReactNode;
}

export interface TableCheckContextFields<T> {
  isSelected: (item: T) => boolean;
  toggle: (item: T) => void;
  checkedItems: T[];
  unselectAll: () => void;
  selectAll: (items: T[]) => void;
}
