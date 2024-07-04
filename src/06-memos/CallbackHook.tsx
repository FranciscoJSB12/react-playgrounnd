import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback((value: number) => {
    setCounter(counter => counter + value);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <ShowIncrement increment={increment} />
    </>
  );
};
