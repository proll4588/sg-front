import { Typography } from '@mui/material';
import { FieldMapType } from '../../../shared/ui/table/types/FieldMapType';
import { Employee } from './type';

export const EMPLOYEE_FIELDS_MAP: FieldMapType<Employee>[] = [
  {
    field: 'id',
    title: 'id',
    isShow: true,
    order: 1,
    getTableCellProps: () => ({}),
    renderComponent: (employee) => <Typography>{employee.id}</Typography>,
  },
  {
    field: 'name',
    title: 'Имя',
    isShow: true,
    order: 2,
    getTableCellProps: () => ({}),
    renderComponent: (employee) => <Typography>{employee.name}</Typography>,
  },
  // {
  //   field: 'User',
  //   title: 'Логин',
  //   isShow: true,
  //   order: 2,
  //   getTableCellProps: () => ({}),
  //   renderComponent: (employee) => (
  //     <Typography>{employee.User.login}</Typography>
  //   ),
  // },
  {
    field: 'EmploeePosition',
    title: 'Должность',
    isShow: true,
    order: 3,
    getTableCellProps: () => ({}),
    renderComponent: (employee) => (
      <Typography>{employee.EmploeePosition.title}</Typography>
    ),
  },

  {
    field: 'email',
    title: 'Почта',
    isShow: true,
    order: 4,
    getTableCellProps: () => ({}),
    renderComponent: (employee) => <Typography>{employee.email}</Typography>,
  },
];
