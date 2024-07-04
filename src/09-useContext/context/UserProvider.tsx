import { ReactNode, useState } from 'react';
import { UserContext } from './UserContext';
import { User } from '../interfaces/user';

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [activeUser, setActiveUser] = useState<User | null>(null);

  const logUserIn = (user: User): void => {
    setActiveUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        activeUser,
        logUserIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
