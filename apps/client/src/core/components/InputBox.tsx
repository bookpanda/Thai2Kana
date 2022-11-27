import type { FC } from "react";

import "$styles/InputBox.module.css";

export const InputBox: FC = () => {
  return (
    <>
      <div
        contentEditable
        className="w-screen min-h-max p-4 outline-0 border-b border-gray-300 drop-shadow-md bg-white text-2xl"
      ></div>
    </>
  );
};
