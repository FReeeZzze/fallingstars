import { useEffect, useRef } from 'react';

const useInterval = (callback: any, delay: number): void => {
  const savedCallback = useRef((...args: any) => args);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const handler = (...args) => savedCallback.current(...args);

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
