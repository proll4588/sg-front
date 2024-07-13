import { ReactNode } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';

export interface LoginFormFields {
  login: string;
  password: string;
}

export interface LoginFormProps {
  onSubmit: (form: LoginFormFields) => void;
  renderFormActions: (
    handleSubmit: UseFormHandleSubmit<LoginFormFields>
  ) => ReactNode;
}
