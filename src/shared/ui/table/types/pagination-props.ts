export interface PaginationProps {
  count: number;
  page: number;
  limit: number;

  onChangeLimit: (limit: number) => void;
  onChangePage: (page: number) => void;
}
