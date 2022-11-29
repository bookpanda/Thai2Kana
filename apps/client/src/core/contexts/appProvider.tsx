import { FC, PropsWithChildren, useEffect, useState } from "react";

import { toKatakana } from "wanakana";

import { AppContext } from "./appContext";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [text, setText] = useState("");
  const [katakana, setKatakana] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const a = await fetch(
        `https://Thai2Rom.idhibhat-pankam.repl.co/?input=${text}`
      )
        .then((response) => response.json())
        .then((data) => setKatakana(toKatakana(data.text)));
    };
    const a = fetchData();
  }, [text]);
  return (
    <AppContext.Provider value={{ text, katakana, setText }}>
      {children}
    </AppContext.Provider>
  );
};
