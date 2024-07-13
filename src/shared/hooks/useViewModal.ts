import { useCallback, useState } from 'react';

export const useViewModal = (initOpen = false) => {
  const [isOpen, setIsOpen] = useState(initOpen);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const onChange = useCallback((is: boolean) => setIsOpen(is), []);

  return { isOpen, open, close, onToggle, onChange };
};
