import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, incrementCounter } = useCounter(10);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
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
