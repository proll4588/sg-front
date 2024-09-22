import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';

export interface UploadButtonProps extends ButtonProps<'label'> {
  onChangeInput: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
  accept?: string | undefined;
  multiple?: boolean;
}
export const UploadButton: FC<UploadButtonProps> = ({
  id = 'upload_file',
  onChangeInput,
  accept = '*',
  multiple,
  ...props
}) => {
  return (
    <Button
      {...props}
      component='label'
      htmlFor={id}
    >
      {props.children}
      <input
        style={{
          zIndex: -10,
          position: 'absolute',
          opacity: 0,
        }}
        accept={accept}
        multiple={multiple}
        type='file'
        onChange={onChangeInput}
        value={''}
        id={id}
        name={'upload_file'}
      />
    </Button>
  );
};
