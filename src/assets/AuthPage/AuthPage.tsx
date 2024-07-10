import { Grid, Paper, Typography } from '@mui/material';
import { useUser } from '../../shared/context/UserContext';
import { LoginForm } from '../../widget/forms/login-form/LoginForm';

export const AuthPage = () => {
  const { login } = useUser();

  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
      sx={{ background: '#cccccc' }}
    >
      <Paper
        sx={{ p: 2, width: 600 }}
        elevation={3}
      >
        <Typography
          fontWeight={700}
          fontSize={24}
          mb={2}
        >
          Вход в систему
        </Typography>
        <LoginForm
          onSubmit={(form) => {
            login(form.login, form.password);
          }}
        />
      </Paper>
    </Grid>
  );
};
