import { FC } from 'react';
import { EmployeeTestTableProps } from './type';
import { UiTable } from '../../../shared/ui/table/ui-table';
import { UiTableSkeleton } from '../../../shared/ui/table/ui-table-skeleton/UiTableSkeleton';
import { UiTableHeader } from '../../../shared/ui/table/ui-table-header';
import { UiTableRowWithActions } from '../../../shared/ui/table/ui-table-row-with-actions';
import { TableCell } from '@mui/material';

export const EmployeeTestTable: FC<EmployeeTestTableProps> = ({
  data,
  fields,
  onChangeFields,
  renderActions,
  visibleFields,
  isLoading,
  isUpdate,
  onClick,
}) => {
  return (
    <UiTable
      isLoading={isLoading}
      isUpdating={isUpdate}
      skeleton={<UiTableSkeleton limit={20} />}
      header={
        <UiTableHeader
          allCells={fields}
          viewCells={visibleFields}
          setViewCells={onChangeFields}
        />
      }
      body={
        <>
          {data &&
            data.length !== 0 &&
            data.map((user) => (
              <UiTableRowWithActions
                key={user.id}
                hover
                onClick={() => {
                  if (onClick) {
                    onClick(user);
                  }
                }}
                renderActions={(isOpen, setIsLoading) => {
                  return renderActions(user, { isOpen, setIsLoading });
                }}
                sx={{ cursor: 'pointer' }}
              >
                {visibleFields.map((el) => (
                  <TableCell
                    key={el.field + user.id}
                    {...el.getTableCellProps()}
                  >
                    {el.renderComponent(user) || 'Error'}
                  </TableCell>
                ))}
              </UiTableRowWithActions>
            ))}
        </>
      }
    />
  );
};
