import { Button, Grid, TextField } from '@mui/material';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

interface LoginFormFields {
  login: string;
  password: string;
}

interface LoginFormProps {
  onSubmit: (form: LoginFormFields) => void;
}

export const LoginForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useForm<LoginFormFields>();

  return (
    <Grid
      component={'form'}
      onSubmit={handleSubmit(onSubmit)}
      container
      flexDirection={'column'}
      gap={2}
    >
      <Controller
        control={control}
        name='login'
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextField
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      />

      <Controller
        control={control}
        name='password'
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextField
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type='password'
          />
        )}
      />

      <Button
        variant='contained'
        type='submit'
      >
        Войти
      </Button>
    </Grid>
  );
};
