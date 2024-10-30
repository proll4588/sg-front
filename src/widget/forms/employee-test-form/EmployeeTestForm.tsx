import { useQuery } from '@apollo/client';
import { FC, ReactNode } from 'react';
import { Controller, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { GET_EMPLOYEE_TEST_VARIANTS } from '../../../apollo/fetchs/employeeTest';
import { GET_EMPLOYEES } from '../../../apollo/fetchs/employee';
import { FormLayout } from '../../../shared/ui/form/form-layout';
import { Autocomplete, Button, TextField } from '@mui/material';
import { DialogForForm } from '../../../shared/ui/form/dialog-for-form';
import { DialogTitleForForm } from '../../../shared/ui/form/dialog-for-form/components';
import { LoadingButton } from '@mui/lab';

export interface EmployeeTestFormFields {
  title: string;
  variantId: number;
  employeeIds: number[];
}
export interface EmployeeTestFormProps {
  initValue?: Partial<EmployeeTestFormFields>;
  onSubmit: (form: EmployeeTestFormFields) => void;
  isLoading?: boolean;
  renderFormActions: (
    handleSubmit: UseFormHandleSubmit<EmployeeTestFormFields>
  ) => ReactNode;
}

export const EmployeeTestForm: FC<EmployeeTestFormProps> = ({
  isLoading,
  initValue,
  onSubmit,
  renderFormActions,
}) => {
  const { control, handleSubmit } = useForm<EmployeeTestFormFields>({
    defaultValues: initValue,
  });

  const { data: variantData } = useQuery(GET_EMPLOYEE_TEST_VARIANTS);
  const { data: employeeData } = useQuery(GET_EMPLOYEES);

  const variants = variantData?.getEmployeeTestVariants;
  const employees = employeeData?.getEmployees;

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
            placeholder='Введите название тестирования'
            label='Название тестирования'
            required
          />
        )}
      />

      <Controller
        control={control}
        name='variantId'
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
        name='employeeIds'
        disabled={isLoading}
        render={({ field: { onChange, value, disabled } }) => (
          <Autocomplete
            multiple
            disabled={disabled}
            options={employees || []}
            onChange={(_, value) => onChange(value?.map((v) => v.id) || [])}
            value={
              employees?.filter(
                (employee) => !!value?.some((val) => val === employee.id)
              ) || []
            }
            getOptionLabel={(option) =>
              `${option.name} (${option.EmploeePosition.title})`
            }
            getOptionKey={(option) => option.id.toString()}
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

interface CreateEmployeeTestDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  initValue?: Partial<EmployeeTestFormFields>;
  onSubmit: (form: EmployeeTestFormFields) => void;
}
export const CreateEmployeeTestDialog: FC<CreateEmployeeTestDialogProps> = ({
  isOpen,
  onClose,
  isLoading = false,
  initValue,
  onSubmit,
}) => {
  return (
    <DialogForForm
      head={<DialogTitleForForm title='Создание тестирования' />}
      open={isOpen}
      onClose={onClose}
    >
      <EmployeeTestForm
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
