import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
  const { decrementCounter, incrementCounter, counter } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Información de Pokemon</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data?.id}
          name={data?.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}
      {hasError && <p>Error al cargar la información</p>}
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
