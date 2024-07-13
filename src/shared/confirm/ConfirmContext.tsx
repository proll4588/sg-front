import { ButtonProps } from '@mui/material';
import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';
import { useViewModalWithInitFields } from '../hooks/useViewModalWithInitFields';
import { DialogConfirmForm } from '../ui/form/dialog-confirm-form';

export interface SubmitAction {
  actionTitle: string;
  actionBody?: ReactNode;

  onSubmit: () => void | Promise<void>;
  submitButtonTitle: string;
  buttonColor?: ButtonProps['color'];

  onSecondarySubmit?: () => void | Promise<void>;
  secondarySubmitButtonTitle?: string;
  secondaryButtonColor?: ButtonProps['color'];
}

export type ConfirmContextArgs = (arg: SubmitAction) => void;
export const INIT_CONFIRM_CONTEXT: ConfirmContextArgs = () => {
  //
};

export const ConfirmContext =
  createContext<ConfirmContextArgs>(INIT_CONFIRM_CONTEXT);

export const useConfirm = () => useContext(ConfirmContext);

export const ConfirmProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { close, isOpen, open, initValue } =
    useViewModalWithInitFields<SubmitAction>();

  const openSubmitDialog = useCallback((arg: SubmitAction) => {
    open(arg);
  }, []);

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await initValue?.onSubmit();
      close();
    } catch (e) {
      console.error('ConfirmProvider.handleSubmit >> ', e);
    }
    setIsLoading(false);
  }, [initValue]);

  return (
    <ConfirmContext.Provider value={openSubmitDialog}>
      <DialogConfirmForm
        open={isOpen}
        onClose={close}
        onConfirmation={handleSubmit}
        isLoading={isLoading}
        textConfirmAction={initValue?.submitButtonTitle}
        title={initValue?.actionTitle}
        actionButtonColor={initValue?.buttonColor}
        onSecondaryConfirm={initValue?.onSecondarySubmit}
        secondaryButtonColor={initValue?.secondaryButtonColor}
        secondaryTextConfirmAction={initValue?.secondarySubmitButtonTitle}
      >
        {initValue?.actionBody}
      </DialogConfirmForm>
      {children}
    </ConfirmContext.Provider>
  );
};
