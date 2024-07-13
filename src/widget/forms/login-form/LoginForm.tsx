import { IconButton, InputAdornment, TextField } from '@mui/material';
import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormLayout } from '../../../shared/ui/form/form-layout';
import {
  AccountCircle,
  Password,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { LoginFormFields, LoginFormProps } from './type';

export const LoginForm: FC<LoginFormProps> = ({
  onSubmit,
  renderFormActions,
}) => {
  const { control, handleSubmit } = useForm<LoginFormFields>({
    defaultValues: {
      login: '',
      password: '',
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormLayout
      onSubmit={handleSubmit(onSubmit)}
      actions={renderFormActions(handleSubmit)}
    >
      <Controller
        control={control}
        name='login'
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextField
            label='Логин'
            placeholder='Введите логин'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      <Controller
        control={control}
        name='password'
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextField
            label={'Пароль'}
            placeholder='Введите пароль'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Password />
                </InputAdornment>
              ),
              endAdornment: (
                <IconButton
                  sx={{ mr: -1 }}
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />
        )}
      />
    </FormLayout>
  );
};
