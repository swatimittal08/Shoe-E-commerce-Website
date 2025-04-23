import { initialState, Reducer } from "./Reducer";
import { createContext, useReducer, useMemo } from "react";

export const AppContext = createContext();
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
