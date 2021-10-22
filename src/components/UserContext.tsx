import { createContext, useContext } from 'react';
import type { SetStateAction, Dispatch } from 'react';

type UserContextProps = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
}

const defaultValues: UserContextProps = {
  isLogged: false,
  setIsLogged: () => null,
}

const UserContext = createContext(defaultValues);

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer; // useContext

UserContext.displayName = "UserContext";

function useUserContext() {
  return useContext(UserContext);
}

export {
  UserContext,
  UserProvider,
  UserConsumer,
  useUserContext,
}
