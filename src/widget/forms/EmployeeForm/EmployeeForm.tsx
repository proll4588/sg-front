import { FC, ReactNode, useState } from 'react';
import { Controller, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { FormLayout } from '../../../shared/ui/form/form-layout';
import {
  Autocomplete,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
} from '@mui/material';
import { DialogForForm } from '../../../shared/ui/form/dialog-for-form';
import { DialogTitleForForm } from '../../../shared/ui/form/dialog-for-form/components';
import { LoadingButton } from '@mui/lab';
import { useMutation, useQuery } from '@apollo/client';
import {
  CREATE_EMPLOYEE_POSITION,
  GET_EMPLOYEE_POSITIONS,
} from '../../../apollo/fetchs/employee';
import { useViewModal } from '../../../shared/hooks/useViewModal';
import { Add, Visibility } from '@mui/icons-material';

export interface EmployeeFormFields {
  name: string;
  email: string;
  password: string;
  login: string;
  positionId: number;
}
interface EmployeeFormProps {
  initValue?: Partial<EmployeeFormFields>;
  onSubmit: (form: EmployeeFormFields) => void;
  isLoading?: boolean;
  renderFormActions: (
    handleSubmit: UseFormHandleSubmit<EmployeeFormFields>
  ) => ReactNode;
}

const genPassword = (len: number) => {
  var password = '';
  var symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < len; i++) {
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return password;
};

export const EmployeeForm: FC<EmployeeFormProps> = ({
  initValue,
  isLoading = false,
  onSubmit,
  renderFormActions,
}) => {
  const createPositionController = useViewModal();
  const { onToggle, isOpen, open } = useViewModal();
  const { data, loading } = useQuery(GET_EMPLOYEE_POSITIONS);
  const { handleSubmit, control, setValue } = useForm<EmployeeFormFields>({
    defaultValues: initValue,
  });

  const handleGenerateAuth = () => {
    setValue('login', genPassword(10));
    setValue('password', genPassword(16));
    open();
  };

  return (
    <>
      <CreateEmployeePositionForm
        isOpen={createPositionController.isOpen}
        onClose={createPositionController.close}
        onSubmit={createPositionController.close}
      />
      <FormLayout
        onSubmit={handleSubmit(onSubmit)}
        actions={renderFormActions(handleSubmit)}
      >
        <Divider>Персональные данные</Divider>

        <Controller
          control={control}
          name='name'
          disabled={isLoading}
          render={({ field: { onChange, value, disabled } }) => (
            <TextField
              disabled={disabled}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder='Введите имя сотрудника'
              label='Имя сотрудника'
              required
            />
          )}
        />

        <Controller
          control={control}
          name='email'
          disabled={isLoading}
          render={({ field: { onChange, value, disabled } }) => (
            <TextField
              disabled={disabled}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder='Введите email сотрудника'
              label='Почта сотрудника'
              required
            />
          )}
        />

        <Controller
          control={control}
          name='positionId'
          disabled={isLoading}
          render={({ field: { onChange, value, disabled } }) => (
            <Grid
              container
              gap={1}
            >
              <Autocomplete
                sx={{ flex: 1 }}
                disabled={disabled}
                options={data?.getEmployeePositions || []}
                onChange={(_, val) => onChange(val?.id)}
                value={
                  data
                    ? data.getEmployeePositions.find(
                        (pos) => pos.id === value
                      ) || null
                    : null
                }
                loading={loading}
                loadingText='Загрузка...'
                getOptionKey={(op) => op.id}
                getOptionLabel={(op) => op.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    value={value}
                    required
                    placeholder='Выберите должность сотрудника'
                    label='Должность сотрудника'
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          <IconButton
                            size='small'
                            sx={{ my: -1 }}
                            onClick={createPositionController.open}
                          >
                            <Add sx={{ height: 20, width: 20 }} />
                          </IconButton>
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    }}
                  />
                )}
              />
            </Grid>
          )}
        />

        <Divider>Данные авторизации</Divider>

        <Controller
          control={control}
          name='login'
          disabled={isLoading}
          render={({ field: { onChange, value, disabled } }) => (
            <TextField
              disabled={disabled}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder='Введите логин сотрудника'
              label='Логин сотрудника'
              required
              InputProps={{
                autoComplete: 'off',
              }}
            />
          )}
        />

        <Controller
          control={control}
          name='password'
          disabled={isLoading}
          render={({ field: { onChange, value, disabled } }) => (
            <TextField
              disabled={disabled}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder='Введите пароль сотрудника'
              label='Пароль сотрудника'
              required
              type={isOpen ? 'text' : 'password'}
              InputProps={{
                autoComplete: 'off',
                endAdornment: (
                  <IconButton onClick={onToggle}>
                    <Visibility />
                  </IconButton>
                ),
              }}
            />
          )}
        />

        <Button
          color='warning'
          size='small'
          variant='outlined'
          onClick={handleGenerateAuth}
        >
          Сгенерировать данные
        </Button>
      </FormLayout>
    </>
  );
};

interface CreateEmployeeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  initValue?: Partial<EmployeeFormFields>;
  onSubmit: (form: EmployeeFormFields) => void;
}
export const CreateEmployeeDialog: FC<CreateEmployeeDialogProps> = ({
  isOpen,
  onClose,
  isLoading = false,
  initValue,
  onSubmit,
}) => {
  return (
    <DialogForForm
      head={<DialogTitleForForm title='Создание сотрудника' />}
      open={isOpen}
      onClose={onClose}
    >
      <EmployeeForm
        onSubmit={onSubmit}
        isLoading={isLoading}
        initValue={initValue}
        renderFormActions={() => [
          <LoadingButton
            key={1}
            type='submit'
            variant='contained'
            loading={isLoading}
          >
            Создать
          </LoadingButton>,
          <LoadingButton
            key={2}
            onClick={onClose}
            color='customGrey'
            variant='contained'
            disabled={isLoading}
          >
            Закрыть
          </LoadingButton>,
        ]}
      />
    </DialogForForm>
  );
};

interface CreateEmployeePositionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}
export const CreateEmployeePositionForm: FC<
  CreateEmployeePositionFormProps
> = ({ isOpen, onClose, onSubmit }) => {
  const [position, setPosition] = useState('');
  const [createEmployeePosition, { loading }] = useMutation(
    CREATE_EMPLOYEE_POSITION,
    { refetchQueries: [{ query: GET_EMPLOYEE_POSITIONS }] }
  );

  const handleSubmit = () => {
    createEmployeePosition({ variables: { title: position } }).then(() => {
      onSubmit();
      setPosition('');
    });
  };

  return (
    <DialogForForm
      head={<DialogTitleForForm title='Создание должности' />}
      open={isOpen}
      onClose={onClose}
    >
      <FormLayout
        onSubmit={() => {}}
        actions={[
          <LoadingButton
            variant='contained'
            key={1}
            loading={loading}
            onClick={handleSubmit}
          >
            Создать
          </LoadingButton>,
          <LoadingButton
            variant='contained'
            color='customGrey'
            disabled={loading}
            key={2}
            onClick={onClose}
          >
            Закрыть
          </LoadingButton>,
        ]}
      >
        <TextField
          label={'Название должности'}
          placeholder='Введите название должности'
          required
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </FormLayout>
    </DialogForForm>
  );
};
