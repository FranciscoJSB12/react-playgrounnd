import { useCounter, useFetch } from '../hooks';

export const MultipleCustomHooks = () => {
  const { decrementCounter, incrementCounter, counter } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Información de Pokemon</h1>
      <hr />
      {isLoading && <p>Cargando...</p>}
      {hasError && <p>Error al cargar la información</p>}
      <h2>{data?.name}</h2>
      <button
        className='btn btn-primary mt-2'
        onClick={() => (counter > 1 ? decrementCounter() : null)}
      >
        Anterior
      </button>
      <button
        className='btn btn-primary mt-2'
        onClick={() => incrementCounter()}
      >
        Siguiente
      </button>
    </>
  );
};
