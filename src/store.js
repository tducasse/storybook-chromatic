import { createContext, useContext } from "react";

const context = createContext();

export const Provider = context.Provider;
export const useStore = () => useContext(context);
