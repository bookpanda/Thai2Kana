import type { FC } from "react";
import { useState } from "react";

import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon.js";

import "$styles/InputBox.module.css";

export const InputBox: FC = () => {
  const [text, setText] = useState<string>("");
  return (
    <div className="relative w-screen">
      <div
        id="inputBox"
        onInput={(e) => setText(e.currentTarget.textContent || "")}
        contentEditable
        className="w-screen min-h-32 p-4 pr-14 outline-0 border-b border-gray-300 drop-shadow-md bg-white text-2xl"
      />
      {text && (
        <XMarkIcon
          className="absolute w-6 h-6 top-4 right-4 text-neutral-600"
          onClick={() => {
            setText("");
            const a = document.getElementById("inputBox");
            if (a) a.textContent = "";
          }}
        />
      )}
      <p>{text}</p>
    </div>
  );
};
