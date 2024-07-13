import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

import { STYLE_STIKY_CELL } from '../row-actions/constants';
import { UiTableHeaderWithSortType } from './type';
import { theme } from '../../../../widget/theme';

export const UiTableHeaderWithSort: UiTableHeaderWithSortType = ({
  viewCells,
  headProps,
  orderBy,
  order,
  onChangeOrder,
  orderByList,
  additional,
}) => {
  const orderHandler = (field: (typeof viewCells)[0]['field']) => {
    if (orderBy && orderBy === field) {
      if (order === 'asc')
        onChangeOrder && onChangeOrder({ order: 'desc', orderBy: field });
      else onChangeOrder && onChangeOrder({ order: null, orderBy: null });
    } else {
      onChangeOrder && onChangeOrder({ order: 'asc', orderBy: field });
    }
  };

  return (
    <TableHead {...headProps}>
      <TableRow>
        {additional}
        {viewCells.map((el) => {
          const isOrdered = orderByList.some((listEl) => listEl === el.field);

          if (!isOrdered)
            return (
              <TableCell
                key={String(el.field)}
                {...el.getTableCellProps()}
              >
                <Typography
                  fontWeight={700}
                  color={theme.palette.primary.dark}
                >
                  {el.title}
                </Typography>
              </TableCell>
            );
          else
            return (
              <TableCell
                key={String(el.field)}
                sortDirection={
                  orderBy === el.field ? order || undefined : undefined
                }
                {...el.getTableCellProps()}
              >
                <TableSortLabel
                  active={orderBy === el.field}
                  direction={
                    orderBy === el.field ? order || undefined : undefined
                  }
                  onClick={() => {
                    orderHandler(el.field);
                  }}
                >
                  <Typography
                    fontWeight={700}
                    color={theme.palette.primary.dark}
                  >
                    {el.title}
                  </Typography>

                  {orderBy === el.field ? (
                    <Box
                      component='span'
                      sx={visuallyHidden}
                    >
                      {order === 'desc'
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            );
        })}

        <TableCell
          align='center'
          sx={STYLE_STIKY_CELL}
        >
          {/* <UiMenuTable
            fields={allCells}
            setFields={setViewCells}
          /> */}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
