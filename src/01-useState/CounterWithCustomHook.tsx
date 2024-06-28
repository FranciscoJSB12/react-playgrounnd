import { useCounter } from '../hooks';

export const CounterWithCustomHook = () => {
  const { counter, incrementCounter, decrementCounter, resetCounter } =
    useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() => incrementCounter()}
      >
        +1
      </button>
      <button
        className='btn btn-primary'
        onClick={resetCounter}
      >
        Reset
      </button>
      <button
        className='btn btn-primary'
        onClick={() => decrementCounter()}
      >
        -1
      </button>
    </>
  );
};
