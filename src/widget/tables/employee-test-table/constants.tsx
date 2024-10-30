import { Chip, Grid, Typography } from '@mui/material';
import { FieldMapType } from '../../../shared/ui/table/types/FieldMapType';
import { EmployeeTest } from './type';
import dayjs from 'dayjs';
import { Close, HourglassEmpty, TaskAlt } from '@mui/icons-material';

export const EMPLOYEE_TEST_FIELDS_MAP: FieldMapType<EmployeeTest>[] = [
  {
    field: 'id',
    title: 'id',
    isShow: true,
    order: 1,
    getTableCellProps: () => ({}),
    renderComponent: (employee) => <Typography>{employee.id}</Typography>,
  },
  {
    field: 'title',
    title: 'Название',
    isShow: true,
    order: 2,
    getTableCellProps: () => ({}),
    renderComponent: (employee) => <Typography>{employee.title}</Typography>,
  },
  {
    field: 'startDate',
    title: 'Дата начала',
    isShow: true,
    order: 3,
    getTableCellProps: () => ({}),
    renderComponent: (employee) => (
      <Typography>
        {dayjs(employee.startDate).format('DD.MM.YYYY HH:mm')}
      </Typography>
    ),
  },
  {
    field: 'endDate',
    title: 'Дата окончания',
    isShow: true,
    order: 4,
    getTableCellProps: () => ({}),
    renderComponent: (employee) => {
      return employee.endDate ? (
        <Typography>
          {dayjs(employee.endDate).format('DD.MM.YYYY HH:mm')}
        </Typography>
      ) : (
        <Typography>Не завершен</Typography>
      );
    },
  },
  {
    field: 'EmplyeeProcessMembers',
    title: 'Участники',
    isShow: true,
    order: 5,
    getTableCellProps: () => ({}),
    renderComponent: (employee) => (
      <Grid
        container
        flexDirection={'column'}
        gap={1}
      >
        {employee.EmplyeeProcessMembers.map((el) => {
          const employeeId = el.Emplouee.id;
          const employeeTest = employee.EmployeeTest?.find(
            (et) => et.Emplouee.id === employeeId
          );
          const isEmployeeTestCompleted =
            employeeTest && employeeTest?.endDate !== null;

          const inProcess = employeeTest && employeeTest?.endDate === null;
          const completed = isEmployeeTestCompleted;

          const color = completed ? 'success' : inProcess ? 'warning' : 'error';
          const icon = completed ? (
            <TaskAlt />
          ) : inProcess ? (
            <HourglassEmpty />
          ) : (
            <Close />
          );

          return (
            <Chip
              label={`${el.Emplouee.name} (${el.Emplouee.EmploeePosition.title})`}
              icon={icon}
              color={color}
              variant='outlined'
            />
          );
        })}
      </Grid>
    ),
  },
  {
    field: 'User',
    title: 'Организатор',
    isShow: true,
    order: 6,
    getTableCellProps: () => ({}),
    renderComponent: (employee) => (
      <Typography>{employee.User.login}</Typography>
    ),
  },
  {
    field: 'EmployeeTestVariant',
    title: 'Вариант теста',
    isShow: true,
    order: 7,
    getTableCellProps: () => ({}),
    renderComponent: (employee) => (
      <Typography>{employee.EmployeeTestVariant.title}</Typography>
    ),
  },
];
