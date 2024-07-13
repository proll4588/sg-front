import { useTableCheck } from '../contexts/TableCheckContext';
import { ItemCheckProviderProps } from './type';

export const ItemCheckProvider = <T,>({
  children,
  item,
}: ItemCheckProviderProps<T>) => {
  const { isSelected, toggle } = useTableCheck<T>();

  return children(isSelected(item), toggle);
};
