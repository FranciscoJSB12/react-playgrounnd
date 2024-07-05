import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('<LoginPage /> Test', () => {
  afterEach(cleanup);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const logUserInMocked = vi.fn();

  test('Should render the component WITHOUT the user', () => {
    render(
      <UserContext.Provider
        value={{ activeUser: null, logUserIn: logUserInMocked }}
      >
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Should call logUserIn when the button is clicked', () => {
    render(
      <UserContext.Provider
        value={{ activeUser: null, logUserIn: logUserInMocked }}
      >
        <LoginPage />
      </UserContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(logUserInMocked).toHaveBeenCalledWith({
      id: 1,
      name: 'fran',
      email: 'fran@gmail.com',
    });
  });
});
