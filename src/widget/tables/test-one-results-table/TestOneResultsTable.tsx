import { FC } from 'react';
import { TestOneResultNormal } from '../../../pages/Test1Results/Test1Results';
import { BaseComponentProps } from '../../../shared/ui/table/types/base-table-props';
import { UiTable } from '../../../shared/ui/table/ui-table';
import { UiTableSkeleton } from '../../../shared/ui/table/ui-table-skeleton/UiTableSkeleton';
import { UiTableHeader } from '../../../shared/ui/table/ui-table-header';
import { UiTableRowWithActions } from '../../../shared/ui/table/ui-table-row-with-actions';
import { Collapse, IconButton, TableCell, TableRow } from '@mui/material';
import { useViewModal } from '../../../shared/hooks/useViewModal';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { RESULT_ITEM_FIELDS_MAP } from './constants';

export type TestOneResultsTableType = BaseComponentProps<TestOneResultNormal>;

export const TestOneResultsTable: FC<TestOneResultsTableType> = ({
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
          viewCells={[
            {
              field: 'TestOneResultItem',
              isShow: true,
              title: '',
              order: 0,
              getTableCellProps: () => ({}),
              renderComponent: () => <></>,
            },
            ...visibleFields,
          ]}
          setViewCells={onChangeFields}
        />
      }
      body={
        <>
          {data &&
            data.length !== 0 &&
            data.map((res) => (
              <TableRowWithSubTable
                data={res}
                renderActions={renderActions}
                visibleFields={visibleFields}
                onClick={onClick}
              />
            ))}
        </>
      }
    />
  );
};

export type TestOneResultItemsTableType = BaseComponentProps<
  TestOneResultNormal['TestOneResultItem'][0]
>;

export const TestOneResultItemsTable: FC<TestOneResultItemsTableType> = ({
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
            data.map((res) => (
              <UiTableRowWithActions
                key={res.id}
                hover
                onClick={() => {
                  if (onClick) {
                    onClick(res);
                  }
                }}
                renderActions={(isOpen, setIsLoading) => {
                  return renderActions(res, { isOpen, setIsLoading });
                }}
                sx={{ cursor: 'pointer' }}
              >
                {visibleFields.map((el) => (
                  <TableCell
                    key={el.field + res.id}
                    {...el.getTableCellProps()}
                  >
                    {el.renderComponent(res) || 'Error'}
                  </TableCell>
                ))}
              </UiTableRowWithActions>
            ))}
        </>
      }
    />
  );
};

export interface TableRowWithSubTableProps
  extends Pick<
    TestOneResultsTableType,
    'onClick' | 'renderActions' | 'visibleFields'
  > {
  data: TestOneResultNormal;
}
export const TableRowWithSubTable: FC<TableRowWithSubTableProps> = ({
  data,
  onClick,
  renderActions,
  visibleFields,
}) => {
  const { isOpen, onToggle } = useViewModal();

  return (
    <>
      <UiTableRowWithActions
        key={data.resultId}
        onClick={() => {
          onClick?.(data);
        }}
        hover
        renderActions={(isOpen, setIsLoading) => {
          return renderActions(data, { isOpen, setIsLoading });
        }}
        sx={{ cursor: 'pointer' }}
      >
        <TableCell
          key={'1'}
          sx={{
            borderBottom: 'unset',
            borderTop: 'solid 1px',
            //   borderColor: theme.palette.customGrey.main,
          }}
        >
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={onToggle}
          >
            {isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>

        {visibleFields.map((el) => (
          <TableCell
            key={el.field + data.resultId}
            {...el.getTableCellProps()}
          >
            {el.renderComponent(data) || 'Error'}
          </TableCell>
        ))}
      </UiTableRowWithActions>

      <TableRow>
        <TableCell colSpan={visibleFields.length + 2}>
          <Collapse
            collapsedSize={0}
            in={isOpen}
            timeout={'auto'}
            unmountOnExit
          >
            <TestOneResultItemsTable
              data={data.TestOneResultItem}
              fields={RESULT_ITEM_FIELDS_MAP}
              onChangeFields={() => {}}
              visibleFields={RESULT_ITEM_FIELDS_MAP}
              renderActions={() => null}
            />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
