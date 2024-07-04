import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const HomePage = () => {
  const { activeUser } = useContext(UserContext);

  return (
    <>
      <h1>HomePage</h1>
      <hr />
      <pre>{JSON.stringify(activeUser, null, 3)}</pre>
    </>
  );
};
