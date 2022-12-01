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
        className="w-full min-h-36 md:min-h-40 lg:min-h-48 xl:rounded-bl-lg p-4 lg:p-6 md:pr-14 pr-14 outline-0 border-b border-gray-300 drop-shadow-md bg-white text-2xl"
      />
      {text && (
        <XMarkIcon
          className="absolute rounded-full p-2 w-10 h-10 top-2 right-2 lg:top-4 lg:right-4 hover:bg-neutral-100 text-neutral-600 hover:cursor-pointer"
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
