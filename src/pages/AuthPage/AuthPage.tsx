import { Typography } from '@mui/material';
import { useUser } from '../../shared/context/UserContext';
import { LoginForm } from '../../widget/forms/login-form/LoginForm';
import { DialogForForm } from '../../shared/ui/form/dialog-for-form';
import { DialogTitleForForm } from '../../shared/ui/form/dialog-for-form/components';
import { LoadingButton } from '@mui/lab';

export const AuthPage = () => {
  const { login, isLoading, error } = useUser();

  return (
    <DialogForForm
      open
      head={<DialogTitleForForm title='Вход в систему' />}
    >
      {error && <Typography color={'red'}>* {error}</Typography>}

      <LoginForm
        onSubmit={(form) => {
          login(form.login, form.password);
        }}
        renderFormActions={() => [
          <LoadingButton
            type='submit'
            loading={isLoading}
            variant='contained'
          >
            Войти
          </LoadingButton>,
        ]}
      />
    </DialogForForm>
  );
};
