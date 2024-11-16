import { FC, ReactNode } from 'react';
import { Controller, useForm, UseFormHandleSubmit } from 'react-hook-form';
import { Role } from '../../tables/users-table/type';
import { FormLayout } from '../../../shared/ui/form/form-layout';
import { Autocomplete, Button, TextField } from '@mui/material';
import { useMutation, useQuery } from '@apollo/client';
import { DialogForForm } from '../../../shared/ui/form/dialog-for-form';
import { DialogTitleForForm } from '../../../shared/ui/form/dialog-for-form/components';
import { LoadingButton } from '@mui/lab';
import {
  CREATE_USER,
  GET_USERS,
  GET_USERS_ROLES,
} from '../../../apollo/fetchs/user';

export interface UserFormFields {
  login: string;
  password: string;
  role: Role;
}

export interface UserFormProps {
  onSubmit: (form: UserFormFields) => void;
  renderFormActions: (
    handleSubmit: UseFormHandleSubmit<UserFormFields>
  ) => ReactNode;
}

export const UserForm: FC<UserFormProps> = ({
  onSubmit,
  renderFormActions,
}) => {
  const { data: rolesRes, loading: loadingRoles } = useQuery(GET_USERS_ROLES);
  const { control, handleSubmit } = useForm<UserFormFields>({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  return (
    <FormLayout
      onSubmit={handleSubmit(onSubmit)}
      actions={renderFormActions(handleSubmit)}
    >
      <Controller
        control={control}
        name='login'
        render={({ field: { value, onChange } }) => (
          <TextField
            value={value}
            onChange={(e) => onChange(e.target.value)}
            label={'Логин'}
            InputProps={{ autoComplete: 'new-text' }}
            placeholder='Введите логин'
            autoComplete='new-text'
          />
        )}
      />

      <Controller
        control={control}
        name='password'
        render={({ field: { value, onChange } }) => (
          <TextField
            value={value}
            onChange={(e) => onChange(e.target.value)}
            label={'Пароль'}
            placeholder='Введите пароль'
            autoComplete='new-password'
            InputProps={{ autoComplete: 'new-password' }}
            type='password'
          />
        )}
      />

      <Controller
        control={control}
        name='role'
        render={({ field: { value, onChange } }) => (
          <Autocomplete
            getOptionLabel={(op) => op?.title || ''}
            value={value}
            onChange={(_, val) => onChange(val)}
            options={rolesRes?.getUsersRoles || []}
            loading={loadingRoles}
            loadingText='Загрузка...'
            renderInput={(params) => (
              <TextField
                {...params}
                label='Роль'
              />
            )}
          />
        )}
      />
    </FormLayout>
  );
};

interface CreateUserFormDialogProps {
  isOpen: boolean;
  close: () => void;
}
export const CreateUserFormDialog: FC<CreateUserFormDialogProps> = ({
  close,
  isOpen,
}) => {
  const [reg, { loading }] = useMutation(CREATE_USER, {
    refetchQueries: [{ query: GET_USERS, variables: { roleId: null } }],
  });

  return (
    <DialogForForm
      head={<DialogTitleForForm title='Создание пользователя' />}
      open={isOpen}
      onClose={close}
    >
      <UserForm
        onSubmit={({ login, password, role }) => {
          reg({
            variables: {
              login,
              password,
              roleId: role.id,
            },
          }).then(close);
        }}
        renderFormActions={() => [
          <Button
            disabled={loading}
            onClick={close}
            color='error'
            variant='outlined'
          >
            Закрыть
          </Button>,
          <LoadingButton
            loading={loading}
            type='submit'
            variant='contained'
          >
            Создать
          </LoadingButton>,
        ]}
      />
    </DialogForForm>
  );
};
