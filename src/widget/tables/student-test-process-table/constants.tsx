import { FieldMapType } from '../../../shared/ui/table/types/FieldMapType';
import { StudentTestProcess } from './type';
import { Chip, Typography } from '@mui/material';

export const STUDENT_TEST_PROCESS_FIELDS_MAP: FieldMapType<StudentTestProcess>[] =
  [
    {
      field: 'id',
      title: 'Статус',
      isShow: true,
      order: 1,
      getTableCellProps: () => ({}),
      renderComponent: (studentTestProcess) => (
        <Chip
          label={studentTestProcess.dateEnd ? 'Завершен' : 'Активен'}
          color={studentTestProcess.dateEnd ? 'success' : 'warning'}
        />
      ),
    },
    {
      field: 'title',
      title: 'Название',
      isShow: true,
      order: 2,
      getTableCellProps: () => ({}),
      renderComponent: (studentTestProcess) => (
        <Typography>{studentTestProcess.title}</Typography>
      ),
    },
    {
      field: 'dateStart',
      title: 'Дата начала',
      isShow: true,
      order: 3,
      getTableCellProps: () => ({}),
      renderComponent: (studentTestProcess) => (
        <Typography>{studentTestProcess.dateStart}</Typography>
      ),
    },
    {
      field: 'dateEnd',
      title: 'Дата окончания',
      isShow: true,
      order: 4,
      getTableCellProps: () => ({}),
      renderComponent: (studentTestProcess) => (
        <Typography>{studentTestProcess.dateEnd}</Typography>
      ),
    },
    {
      field: 'StudentTestVariant',
      title: 'Вариант теста',
      isShow: true,
      order: 5,
      getTableCellProps: () => ({}),
      renderComponent: (studentTestProcess) => (
        <Typography>{studentTestProcess.StudentTestVariant.title}</Typography>
      ),
    },
  ];
