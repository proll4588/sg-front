import { Student } from './type';
import { FieldMapType } from '../../../shared/ui/table/types/FieldMapType';
import { Typography } from '@mui/material';

export const STUDENT_FIELDS_MAP: FieldMapType<Student>[] = [
  {
    field: 'passbookNumber',
    title: 'Номер зач. книги',
    isShow: true,
    order: 1,
    getTableCellProps: () => ({}),
    renderComponent: (student) => (
      <Typography>{student.passbookNumber}</Typography>
    ),
  },
  {
    field: 'name',
    title: 'Имя',
    isShow: true,
    order: 2,
    getTableCellProps: () => ({}),
    renderComponent: (student) => <Typography>{student.name}</Typography>,
  },
  {
    field: 'Group',
    title: 'Группа',
    isShow: true,
    order: 3,
    getTableCellProps: () => ({}),
    renderComponent: (student) => (
      <Typography>{student.Group.title}</Typography>
    ),
  },
];
