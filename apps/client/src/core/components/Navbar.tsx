import type { FC } from "react";

export const Navbar: FC = () => {
  return (
    <>
      <div className="w-screen h-14 border-b border-gray-300 bg-white flex px-12 items-center text-lg md:text-xl font-semibold lg:h-16">
        <span className="text-blue-500">Th</span>
        <span className="text-red-500">ai</span>
        <span className="text-amber-500">2</span>
        <span className="text-blue-500">K</span>
        <span className="text-green-600">a</span>
        <span className="text-red-500 mr-2">na</span>
        <span className="text-gray-500">Translate</span>
      </div>
    </>
  );
};
