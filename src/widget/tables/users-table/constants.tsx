import { Typography } from '@mui/material';
import { FieldMapType } from '../../../shared/ui/table/types/FieldMapType';
import { User } from './type';

export const USERS_FIELDS_MAP: FieldMapType<User>[] = [
  {
    field: 'id',
    title: 'id',
    isShow: true,
    order: 1,
    getTableCellProps: () => ({}),
    renderComponent: (user) => <Typography>{user.id}</Typography>,
  },
  {
    field: 'login',
    title: 'Логин',
    isShow: true,
    order: 2,
    getTableCellProps: () => ({}),
    renderComponent: (user) => <Typography>{user.login}</Typography>,
  },
  {
    field: 'Role',
    title: 'Роль',
    isShow: true,
    order: 3,
    getTableCellProps: () => ({}),
    renderComponent: (user) => <Typography>{user.Role.title}</Typography>,
  },
];
