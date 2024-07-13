import { ReactElement } from 'react';

export interface ItemCheckProviderProps<T> {
  item: T;
  children: (isChecked: boolean, check: (item: T) => void) => ReactElement;
}
