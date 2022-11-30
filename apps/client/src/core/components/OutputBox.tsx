import type { FC } from "react";

import { useAppContext } from "$core/contexts/appContext";

export const OutputBox: FC = () => {
  const context = useAppContext();
  const { katakana } = context;
  return (
    <div className="w-screen md:w-1/2 min-h-36 p-4 outline-0 border-b border-gray-300 drop-shadow-md bg-blue-600 md:bg-gray-100 text-2xl text-white md:text-black md:border-l">
      <p style={{ wordBreak: "break-word" }} className="w-100%">
        {katakana || "Translation"}
      </p>
    </div>
  );
};
