import { LoadingButton } from '@mui/lab';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { FC } from 'react';
import { DialogConfirmFormProps } from './types';

export const DialogConfirmForm: FC<DialogConfirmFormProps> = ({
  open,
  onClose,
  title,
  textConfirmAction = 'Подтвердить',
  isLoading,
  onConfirmation,
  children,
  actionButtonColor,
  onSecondaryConfirm,
  secondaryButtonColor,
  secondaryTextConfirmAction,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle fontWeight={'bold'}>{title}</DialogTitle>

      {children && <DialogContent>{children}</DialogContent>}

      <DialogActions>
        <LoadingButton
          variant='contained'
          color={actionButtonColor}
          loading={isLoading}
          onClick={onConfirmation}
        >
          {textConfirmAction}
        </LoadingButton>
        {secondaryTextConfirmAction && (
          <LoadingButton
            variant='contained'
            color={secondaryButtonColor}
            onClick={onSecondaryConfirm}
          >
            {secondaryTextConfirmAction}
          </LoadingButton>
        )}
        <Button
          variant='outlined'
          color={'error'}
          onClick={onClose}
          disabled={isLoading}
        >
          Отменить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
