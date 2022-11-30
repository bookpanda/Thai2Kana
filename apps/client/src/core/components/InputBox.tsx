import type { FC } from "react";

import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon.js";

import { useAppContext } from "$core/contexts/appContext";
import "$styles/InputBox.module.css";

export const InputBox: FC = () => {
  const context = useAppContext();
  const { text, setText } = context;
  return (
    <div className="relative w-screen md:w-1/2">
      <div
        id="inputBox"
        onInput={(e) => setText(e.currentTarget.textContent || "")}
        contentEditable
        className="w-full min-h-36 p-4 pr-14 outline-0 border-b border-gray-300 drop-shadow-md bg-white text-2xl"
      />
      {text && (
        <XMarkIcon
          className="absolute w-6 h-6 top-4 right-4 text-neutral-600 hover:cursor-pointer"
          onClick={() => {
            setText("");
            const a = document.getElementById("inputBox");
            if (a) a.textContent = "";
          }}
        />
      )}
    </div>
  );
};
