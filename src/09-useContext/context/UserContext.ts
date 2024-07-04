import { createContext } from 'react';
import { User } from '../interfaces/user';

interface Context {
    activeUser: User | null;
    logUserIn: (user: User) => void;
}

export const UserContext = createContext({} as Context);
