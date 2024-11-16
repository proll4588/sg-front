import { FC, ReactNode, useState } from 'react';
import { Controller, useForm, UseFormHandleSubmit } from 'react-hook-form';
import {
  CREATE_STUDENT_GROUP,
  GET_STUDENT_GROUPS,
} from '../../../apollo/fetchs/student';
import { useViewModal } from '../../../shared/hooks/useViewModal';
import { useMutation, useQuery } from '@apollo/client';
import { genPassword } from '../../../shared/utils/genPassword';
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
import { Add, Visibility } from '@mui/icons-material';

export interface StudentFormFields {
  passbookNumber: number;
  name: string;
  groupId: number;
  login: string;
  password: string;
}

interface StudentFormProps {
  initValue?: Partial<StudentFormFields>;
  onSubmit: (form: StudentFormFields) => void;
  isLoading?: boolean;
  renderFormActions: (
    handleSubmit: UseFormHandleSubmit<StudentFormFields>
  ) => ReactNode;
}

export const StudentForm: FC<StudentFormProps> = ({
  onSubmit,
  renderFormActions,
  initValue,
  isLoading = false,
}) => {
  const createGroupController = useViewModal();
  const { onToggle, isOpen, open } = useViewModal();
  const { data, loading } = useQuery(GET_STUDENT_GROUPS);
  const { handleSubmit, control, setValue } = useForm<StudentFormFields>({
    defaultValues: initValue,
  });

  const handleGenerateAuth = () => {
    setValue('login', genPassword(10));
    setValue('password', genPassword(16));
    open();
  };

  return (
    <>
      <CreateStudentGroupForm
        isOpen={createGroupController.isOpen}
        onClose={createGroupController.close}
        onSubmit={createGroupController.close}
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
              placeholder='Введите имя студента'
              label='Имя студента'
              required
            />
          )}
        />

        <Controller
          control={control}
          name='passbookNumber'
          disabled={isLoading}
          render={({ field: { onChange, value, disabled } }) => (
            <TextField
              disabled={disabled}
              value={value}
              onChange={(e) =>
                onChange(
                  !e.target.value
                    ? null
                    : Number(e.target.value.replace(/\D/g, ''))
                )
              }
              placeholder='Введите номер зачетной книжки'
              label='Номер зачетной книжки'
              required
              inputProps={{
                pattern: '[0-9]*',
              }}
            />
          )}
        />

        <Controller
          control={control}
          name='groupId'
          disabled={isLoading}
          render={({ field: { onChange, value, disabled } }) => (
            <Grid
              container
              gap={1}
            >
              <Autocomplete
                sx={{ flex: 1 }}
                disabled={disabled}
                options={data?.getStudentGroups || []}
                onChange={(_, val) => onChange(val?.id)}
                value={
                  data
                    ? data.getStudentGroups.find((pos) => pos.id === value) ||
                      null
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
                    placeholder='Выберите группу студента'
                    label='Группа студента'
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          <IconButton
                            size='small'
                            sx={{ my: -1 }}
                            onClick={createGroupController.open}
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

interface CreateStudentGroupFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}
export const CreateStudentGroupForm: FC<CreateStudentGroupFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState('');

  const [createStudentGroup, { loading }] = useMutation(CREATE_STUDENT_GROUP, {
    refetchQueries: [{ query: GET_STUDENT_GROUPS }],
  });

  const handleSubmit = () => {
    createStudentGroup({ variables: { title } }).then(() => {
      onSubmit();
      setTitle('');
    });
  };

  return (
    <DialogForForm
      head={<DialogTitleForForm title='Создание группы студентов' />}
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormLayout>
    </DialogForForm>
  );
};

interface CreateStudentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  initValue?: Partial<StudentFormFields>;
  onSubmit: (form: StudentFormFields) => void;
}
export const CreateStudentDialog: FC<CreateStudentDialogProps> = ({
  isOpen,
  onClose,
  isLoading = false,
  initValue,
  onSubmit,
}) => {
  return (
    <DialogForForm
      head={<DialogTitleForForm title='Создание студента' />}
      open={isOpen}
      onClose={onClose}
    >
      <StudentForm
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
