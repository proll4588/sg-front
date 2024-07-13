import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FC, ReactNode } from 'react';

import { TableCheckProvider } from '../contexts/TableCheckContext';
import { UiTableProps } from './type';

const SimpleUiTable: FC<UiTableProps> = ({
  header,
  body,
  footer,
  isUpdating,
  isLoading,
  skeleton,
  pugination,
}) => {
  return (
    <Grid sx={{ width: '100%' }}>
      <TableContainer>
        <Table>
          {header}
          {isUpdating !== undefined && (
            <TableHead>
              <TableRow>
                <TableCell
                  colSpan={100}
                  sx={{ p: 0 }}
                >
                  <LinearProgress
                    sx={{
                      opacity: isUpdating ? 1 : 0,
                      transition: 'ease 0.5s',
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
          )}

          <TableBody>{isLoading ? skeleton : body}</TableBody>

          <TableFooter>
            {isUpdating !== undefined && (
              <TableRow>
                <TableCell
                  sx={{ p: 0 }}
                  colSpan={100}
                >
                  <LinearProgress
                    sx={{
                      opacity: isUpdating ? 1 : 0,
                      transition: 'ease 0.5s',
                    }}
                  />
                </TableCell>
              </TableRow>
            )}
            <TableRow>{footer}</TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      {pugination}
    </Grid>
  );
};

interface UiTable1Props<T> extends UiTableProps {
  getIsEqual?: (item: T, selectedItem: T) => boolean;
  renderSelectList?: (item: T[]) => ReactNode;
}

export const UiTable = <T,>({
  getIsEqual,
  renderSelectList,
  ...props
}: UiTable1Props<T>) => {
  if (getIsEqual && renderSelectList)
    return (
      <TableCheckProvider
        getIsEqual={getIsEqual}
        renderSelectList={renderSelectList}
      >
        <SimpleUiTable {...props} />
      </TableCheckProvider>
    );
  else return <SimpleUiTable {...props} />;
};
