// TODO: Решить проблему с emplty functions
/* eslint-disable @typescript-eslint/no-empty-function */

import { Alert, AlertProps, AlertTitle, Snackbar } from '@mui/material';
import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export interface SnackbarContextType {
  open: (args: AddToSnackbarQueueArg) => void;
}

export const SNACK_CONTEXT_DEFAULT_VALUE: SnackbarContextType = {
  open: () => {},
};

export const SnackbarContext = createContext<SnackbarContextType>(
  SNACK_CONTEXT_DEFAULT_VALUE
);
export const useSnackbar = () => useContext(SnackbarContext);

export interface SnackbarQueueType {
  title?: string | ReactNode;
  text?: string | ReactNode;
  type: AlertProps['severity'];
  duration: number;
  action?: ReactNode;
}

export type AddToSnackbarQueueArg = SnackbarQueueType;

const DEFAULT_DURATION = 3000;
const DEFAULT_TYPE: SnackbarQueueType['type'] = 'info';

export const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [snackbarQueue, setSnackbarQueue] = useState<SnackbarQueueType[]>([]);
  const [preview, setPreview] = useState<SnackbarQueueType | null>(null);

  const addToSnackbarQueue = useCallback(
    (args: AddToSnackbarQueueArg) => {
      const { text, action, duration, type, title } = args;
      const toQueue = {
        duration: duration || DEFAULT_DURATION,
        text: text,
        type: type || DEFAULT_TYPE,
        action: action,
        title: title,
      };

      setSnackbarQueue((queue) => [...queue, toQueue]);
    },
    [setSnackbarQueue]
  );

  useEffect(() => {
    if (preview === null) {
      const shift = shiftQueue();

      if (shift !== null) setPreview(shift);
    }
  }, [snackbarQueue]);

  useEffect(() => {
    if (preview !== null && !isOpen) setIsOpen(true);
  }, [preview]);

  const shiftQueue = () => {
    const ans = snackbarQueue[0] || null;

    if (ans !== null)
      setSnackbarQueue((prev) => {
        const newMas = [...prev];

        newMas.shift();

        return newMas;
      });

    return ans;
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      const firstQEl = shiftQueue();

      if (firstQEl) setPreview(firstQEl);
      else setPreview(null);
    }, 1000);
  };

  /* __DEV__ */
  // useEffect(() => {
  //   console.log('_____');
  //   console.log('snackbarQueue >> ', snackbarQueue);
  //   console.log('preview >> ', preview);
  //   console.log('_____');
  // }, [snackbarQueue, preview]);
  /* ===== */
  const memoValue = useMemo(() => {
    return { open: addToSnackbarQueue };
  }, [addToSnackbarQueue]);

  return (
    <SnackbarContext.Provider value={memoValue}>
      {children}
      <Snackbar
        open={isOpen}
        onClose={handleClose}
        autoHideDuration={preview?.duration}
      >
        <Alert
          severity={preview?.type}
          onClose={handleClose}
          action={preview?.action}
          variant='standard'
          sx={{ maxWidth: 450 }}
        >
          {!!preview?.title && (
            <AlertTitle sx={{ fontWeight: 'bold' }}>
              {preview?.title}
            </AlertTitle>
          )}
          {preview?.text ? preview?.text : null}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
