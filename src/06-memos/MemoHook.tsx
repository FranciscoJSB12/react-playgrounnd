import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

const heavyStuff = (iterationNumber: number = 100): string => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Running');
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, incrementCounter } = useCounter(10);
  const [isVisible, setIsVisible] = useState(true);

  const memorizedCounter: string = useMemo(
    () => heavyStuff(counter),
    [counter]
  );

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <h4>{memorizedCounter}</h4>
      <button
        className='btn btn-primary'
        onClick={() => incrementCounter()}
      >
        +1
      </button>
      <button
        className='btn btn-outline-primary'
        onClick={() => setIsVisible(!isVisible)}
      >
        Show/Hide {String(isVisible)}
      </button>
    </>
  );
};
