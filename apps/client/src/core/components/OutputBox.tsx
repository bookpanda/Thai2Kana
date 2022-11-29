import type { FC } from "react";

import { useAppContext } from "$core/contexts/appContext";

export const InputBox: FC = () => {
  const context = useAppContext();
  const { text, setText } = context;
  return (
    <div className="relative w-screen">
      <div className="w-screen min-h-32 p-4 pr-14 outline-0 border-b border-gray-300 drop-shadow-md bg-white text-2xl"></div>
    </div>
  );
};
