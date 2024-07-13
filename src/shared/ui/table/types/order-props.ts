import { FieldMapType } from './FieldMapType';

export type Order = 'asc' | 'desc';
export interface OrderFilter<T> {
  order: Order | null;
  orderBy: FieldMapType<T>['field'] | null;
}

export interface OrderProps<T> {
  order: OrderFilter<T>;
  onChangeOrder: (params: OrderFilter<T>) => void;
}
