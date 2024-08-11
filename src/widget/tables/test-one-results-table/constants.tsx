import { Typography } from '@mui/material';
import { TestOneResultNormal } from '../../../pages/Test1Results/Test1Results';
import { FieldMapType } from '../../../shared/ui/table/types/FieldMapType';

export const RESULT_FIELDS_MAP: FieldMapType<TestOneResultNormal>[] = [
  {
    field: 'resultId',
    title: 'id',
    isShow: true,
    order: 1,
    getTableCellProps: () => ({}),
    renderComponent: (res) => <Typography>{res.resultId}</Typography>,
  },
  {
    field: 'complete',
    title: 'Завершён',
    isShow: true,
    order: 2,
    getTableCellProps: () => ({}),
    renderComponent: (res) => (
      <Typography>{res.complete ? 'Да' : 'Нет'}</Typography>
    ),
  },
  {
    field: 'startDate',
    title: 'Дата начала',
    isShow: true,
    order: 3,
    getTableCellProps: () => ({}),
    renderComponent: (res) => (
      <Typography>
        {new Date(Number(res.startDate)).toLocaleString()}
      </Typography>
    ),
  },
  {
    field: 'endDate',
    title: 'Дата завершения',
    isShow: true,
    order: 4,
    getTableCellProps: () => ({}),
    renderComponent: (res) => (
      <Typography>{new Date(Number(res.endDate)).toLocaleString()}</Typography>
    ),
  },
  {
    field: 'login',
    title: 'Пользователь',
    isShow: true,
    order: 5,
    getTableCellProps: () => ({}),
    renderComponent: (res) => <Typography>{res.login}</Typography>,
  },
  {
    field: 'userId',
    title: 'User id',
    isShow: true,
    order: 6,
    getTableCellProps: () => ({}),
    renderComponent: (res) => <Typography>{res.userId}</Typography>,
  },
];

export const RESULT_ITEM_FIELDS_MAP: FieldMapType<
  TestOneResultNormal['TestOneResultItem'][0]
>[] = [
  {
    field: 'id',
    title: 'id',
    isShow: true,
    order: 1,
    getTableCellProps: () => ({}),
    renderComponent: (item) => <Typography>{item.id}</Typography>,
  },
  {
    field: 'levelTitle',
    title: 'Уровень',
    isShow: true,
    order: 2,
    getTableCellProps: () => ({}),
    renderComponent: (item) => <Typography>{item.levelTitle}</Typography>,
  },
  {
    field: 'result',
    title: 'Результат',
    isShow: true,
    order: 3,
    getTableCellProps: () => ({}),
    renderComponent: (item) => <Typography>{item.result}</Typography>,
  },
  {
    field: 'scaleTitle',
    title: 'Шкала',
    isShow: true,
    order: 4,
    getTableCellProps: () => ({}),
    renderComponent: (item) => <Typography>{item.scaleTitle}</Typography>,
  },
];
