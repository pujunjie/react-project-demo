import { useEffect, useCallback, useRef } from 'react';

export function useUpdate(callback: () => void, dependence: any[]) {
  const isUpdate = useRef(false);
  const cb = useCallback(callback, dependence);

  useEffect(() => {
    if (!isUpdate.current) {
      isUpdate.current = true;
    } else {
      cb();
    }
  }, [cb]);
}
