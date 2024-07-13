import { TableCell, TableHead, TableRow, Typography } from '@mui/material';

import { STYLE_STIKY_CELL } from '../row-actions/constants';
import { UiTableHeaderType } from './type';

export const UiTableHeader: UiTableHeaderType = ({
  viewCells,
  headProps,
  showSettings = true,
}) => {
  return (
    <TableHead {...headProps}>
      <TableRow>
        {viewCells.map((el) => (
          <TableCell
            key={String(el.field)}
            {...el.getTableCellProps()}
          >
            <Typography
              fontWeight={700}
              color={'GrayText'}
            >
              {el.title}
            </Typography>
          </TableCell>
        ))}

        <TableCell
          align='center'
          sx={STYLE_STIKY_CELL}
        >
          {showSettings && (
            // <UiMenuTable
            //   fields={allCells}
            //   setFields={setViewCells}
            // />
            <></>
          )}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
