export interface UiTableCardPaginationProps {
  count: number;
  onPageChange: (page: number) => void;
  page: number;
  rowsPerPage: number;
  onRowsPerPageChange: (rows: number) => void;
  rowsPerPageOptions: number[];
}
