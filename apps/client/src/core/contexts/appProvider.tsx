import { FC, PropsWithChildren, useEffect, useState } from "react";

import { fetchData } from "$core/api/thai2rom";

import { toKatakana } from "wanakana";

import { AppContext } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [text, setText] = useState("");
  const [katakana, setKatakana] = useState("");
  useEffect(() => {
    fetchData(text).then((data) => setKatakana(toKatakana(data)));
  }, [text]);
  return (
    <AppContext.Provider value={{ text, katakana, setText }}>
      {children}
    </AppContext.Provider>
  );
};
