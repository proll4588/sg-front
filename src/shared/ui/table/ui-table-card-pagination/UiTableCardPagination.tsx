import { Grid, MenuItem, Pagination, Select } from '@mui/material';
import { FC } from 'react';

import { UiTableCardPaginationProps } from './type';

export const UiTableCardPagination: FC<UiTableCardPaginationProps> = ({
  count,
  onPageChange,
  page,
  rowsPerPage,
  onRowsPerPageChange,
  rowsPerPageOptions,
}) => {
  return (
    <Grid
      container
      padding={[1, 2]}
      justifyContent={'space-around'}
    >
      <Select
        size='small'
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={rowsPerPage}
        color='secondary'
        sx={{
          maxHeight: 32,
          borderRadius: '10px',
        }}
        onChange={(e) => {
          onRowsPerPageChange(Number(e.target.value));
        }}
      >
        {rowsPerPageOptions.map((option) => (
          <MenuItem
            key={option}
            value={option}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
      <Pagination
        color='secondary'
        count={Math.ceil(count / rowsPerPage)}
        page={page}
        onChange={(_, value) => {
          onPageChange(value);
        }}
        variant='outlined'
        shape='rounded'
        siblingCount={0}
        sx={{
          '& .MuiPaginationItem-root': {
            borderRadius: '10px',
          },
        }}
      />
    </Grid>
  );
};

// Example
// useHaderPagination={() => {
//     return {
//       CurrentPage: page + 1,
//       PageSize: limit,
//       TotalCount: count,
//       TotalPages: Math.ceil(count / limit),
//       HasNext: false,
//       HasPrevious: false,
//     };
// }}
