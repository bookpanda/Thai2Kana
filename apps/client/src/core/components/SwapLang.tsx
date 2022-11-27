import type { FC } from "react";

import ArrowSmallRightIcon from "@heroicons/react/24/outline/ArrowSmallRightIcon.js";

export const SwapLang: FC = () => {
  return (
    <>
      <div className="w-screen h-12 border-b border-gray-300 bg-white flex px-12 justify-center items-center space-x-12 text-lg font-semibold">
        <p className="text-base text-blue-600">THAI</p>
        <ArrowSmallRightIcon className="h-5 w-5 text-neutral-600" />
        <p className="text-base text-blue-600">KATAKANA</p>
      </div>
    </>
  );
};
