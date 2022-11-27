import { useEffect, useState } from "react";

import { Navbar, SwapLang } from "$core/components";

import { Button } from "ui";
import { toHiragana } from "wanakana";

export default function Web() {
  const [word, setWord] = useState("");
  const [romanji, setRomanji] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const a = await fetch(
        `https://Thai2Rom.idhibhat-pankam.repl.co/?input=${word}`,
        {
          // mode: 'no-cors',
          // headers: {
          //   'Access-Control-Allow-Origin':'*',
          // 'Access-Control-Allow-Credentials' : true
          // }
        }
      )
        .then((response) => response.json())
        .then((data) => setRomanji(data.text));
      // return a.text
    };
    const a = fetchData();
    console.log(a);

    // setRomanji(a)
  }, [word]);
  return (
    <div className="bg-red-100">
      <Navbar></Navbar>
      <SwapLang></SwapLang>

      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <p className="text-black">a: {toHiragana(romanji)}</p>
      <p></p>
    </div>
  );
}
