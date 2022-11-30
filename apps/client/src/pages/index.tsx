import { useEffect, useState } from "react";

import { InputBox, Navbar, OutputBox, SwapLang } from "$core/components";
import { useAppContext } from "$core/contexts/appContext";

export default function Web() {
  const context = useAppContext();
  const { katakana } = context;
  return (
    <div className="w-screen bg-red-100">
      <Navbar />
      <SwapLang />
      <div className="w-screen flex flex-col md:flex-row">
        <InputBox />
        <OutputBox />
      </div>
    </div>
  );
}
