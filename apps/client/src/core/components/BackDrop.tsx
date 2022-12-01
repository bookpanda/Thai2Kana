import { FC, PropsWithChildren } from "react";

export const BackDrop: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="w-screen pt-14 h-20 border-b border-gray-300 bg-neutral-100 xl:flex xl:flex-col xl:items-center">
        {children}
      </div>
    </>
  );
};
