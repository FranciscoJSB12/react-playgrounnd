import { useContext } from 'react';
import { UserContext } from './context/UserContext';

const user = { id: 1, name: 'fran', email: 'fran@gmail.com' };

export const LoginPage = () => {
  const { activeUser, logUserIn } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage{activeUser && <span>&nbsp;{'-'}&nbsp;Logged In!</span>}</h1>
      <hr />
      <pre aria-label='pre'>{JSON.stringify(activeUser, null, 3)}</pre>
      <button
        className='btn btn-primary'
        onClick={() => logUserIn(user)}
      >
        Log In
      </button>
    </>
  );
};
