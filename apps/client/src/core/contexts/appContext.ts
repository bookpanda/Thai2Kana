import { createContext, useContext } from "react";

interface IAppContext {
  text: string;
  katakana: string;
  setText: (text: string) => void;
}

export const AppContext = createContext<IAppContext>({
  text: "",
  katakana: "",
  setText: () => null,
});

export function useAppContext() {
  return useContext(AppContext);
}
