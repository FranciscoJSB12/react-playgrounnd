import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';
import { User } from '../../src/09-useContext/interfaces/user';

describe('<HomePage/> test', () => {
  afterEach(cleanup);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const logUserInMocked = vi.fn();

  const user: User = {
    id: 1,
    name: 'fran',
    email: 'fran@gmail.com',
  };

  test('Should render the component WITHOUT the user', () => {
    render(
      <UserContext.Provider
        value={{
          activeUser: null,
          logUserIn: logUserInMocked,
        }}
      >
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Should render the component WITH the user', () => {
    render(
      <UserContext.Provider
        value={{
          activeUser: user,
          logUserIn: logUserInMocked,
        }}
      >
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');

    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
    expect(preTag.innerHTML).toContain(user.email);
  });
});
