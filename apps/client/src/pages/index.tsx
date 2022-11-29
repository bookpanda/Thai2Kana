import { useEffect, useState } from "react";

import { InputBox, Navbar, SwapLang } from "$core/components";
import { useAppContext } from "$core/contexts/appContext";

import { Button } from "ui";
import { toHiragana } from "wanakana";

export default function Web() {
  const context = useAppContext();
  const { text, katakana, setText } = context;

  const [word, setWord] = useState("");
  const [romanji, setRomanji] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const a = await fetch(
        `https://Thai2Rom.idhibhat-pankam.repl.co/?input=${text}`
      )
        .then((response) => response.json())
        .then((data) => setRomanji(data.text));
    };
    const a = fetchData();
  }, [text]);
  return (
    <div className="bg-red-100">
      <Navbar />
      <SwapLang />
      <InputBox />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="text-black">a: {katakana}</p>
      <p></p>
    </div>
  );
}
