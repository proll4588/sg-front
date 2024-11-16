import { useQuery } from '@apollo/client';
import { FC, ReactNode } from 'react';
import { Controller, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { GET_STUDENT_TEST_VARIANTS } from '../../../apollo/fetchs/studentTest';
import { GET_STUDENTS } from '../../../apollo/fetchs/student';
import { FormLayout } from '../../../shared/ui/form/form-layout';
import { Autocomplete, Button, TextField } from '@mui/material';
import { DialogForForm } from '../../../shared/ui/form/dialog-for-form';
import { DialogTitleForForm } from '../../../shared/ui/form/dialog-for-form/components';
import { LoadingButton } from '@mui/lab';

export interface StudentTestProcessFormFields {
  title: string;
  studentTestVariantId: number;
  passbookNumbers: number[];
}

interface StudentTestProcessFormProps {
  initValue?: Partial<StudentTestProcessFormFields>;
  onSubmit: (form: StudentTestProcessFormFields) => void;
  isLoading?: boolean;
  renderFormActions: (
    handleSubmit: UseFormHandleSubmit<StudentTestProcessFormFields>
  ) => ReactNode;
}

export const StudentTestProcessForm: FC<StudentTestProcessFormProps> = ({
  initValue,
  onSubmit,
  isLoading,
  renderFormActions,
}) => {
  const { control, handleSubmit } = useForm<StudentTestProcessFormFields>({
    defaultValues: initValue,
  });

  const { data: variantData } = useQuery(GET_STUDENT_TEST_VARIANTS);
  const { data: studentData } = useQuery(GET_STUDENTS);

  const variants = variantData?.getStudentTestVariants;
  const students = studentData?.getStudents;

  return (
    <FormLayout
      onSubmit={handleSubmit(onSubmit)}
      actions={renderFormActions(handleSubmit)}
    >
      <Controller
        control={control}
        name='title'
        disabled={isLoading}
        render={({ field: { onChange, value, disabled } }) => (
          <TextField
            disabled={disabled}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder='Введите название процесса тестирования'
            label='Название процесса тестирования'
            required
          />
        )}
      />

      <Controller
        control={control}
        name='studentTestVariantId'
        disabled={isLoading}
        render={({ field: { onChange, value, disabled } }) => (
          <Autocomplete
            disabled={disabled}
            options={variants || []}
            onChange={(_, value) => onChange(value?.id || null)}
            value={variants?.find((v) => v.id === value) || null}
            getOptionLabel={(option) => option.title}
            getOptionKey={(option) => option.id.toString()}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Вариант теста'
                placeholder='Выберите вариант теста'
                required
              />
            )}
          />
        )}
      />

      <Controller
        control={control}
        name='passbookNumbers'
        disabled={isLoading}
        render={({ field: { onChange, value, disabled } }) => (
          <Autocomplete
            multiple
            disabled={disabled}
            options={students || []}
            onChange={(_, value) =>
              onChange(value?.map((v) => v.passbookNumber) || [])
            }
            value={
              students?.filter(
                (student) =>
                  !!value?.some((val) => val === student.passbookNumber)
              ) || []
            }
            getOptionLabel={(option) =>
              `${option.name} (${option.Group.title})`
            }
            getOptionKey={(option) => option.passbookNumber.toString()}
            ChipProps={{ size: 'small' }}
            renderInput={(params) => (
              <TextField
                {...params}
                label='Сотрудники'
                placeholder='Выберите сотрудников'
              />
            )}
          />
        )}
      />
    </FormLayout>
  );
};

export interface CreateStudentTestProcessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  initValue?: Partial<StudentTestProcessFormFields>;
  onSubmit: (form: StudentTestProcessFormFields) => void;
}

export const CreateStudentTestProcessDialog: FC<
  CreateStudentTestProcessDialogProps
> = ({ isOpen, onClose, isLoading, initValue, onSubmit }) => {
  return (
    <DialogForForm
      head={<DialogTitleForForm title='Создание процесса тестирования' />}
      open={isOpen}
      onClose={onClose}
    >
      <StudentTestProcessForm
        isLoading={isLoading}
        initValue={initValue}
        onSubmit={onSubmit}
        renderFormActions={() => [
          <LoadingButton
            key={1}
            type='submit'
            variant='contained'
            loading={isLoading}
          >
            Создать
          </LoadingButton>,
          <Button
            key={2}
            onClick={onClose}
            color='customGrey'
          >
            Отмена
          </Button>,
        ]}
      />
    </DialogForForm>
  );
};
