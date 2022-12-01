import {
  BackDrop,
  InputBox,
  Navbar,
  OutputBox,
  SwapLang,
} from "$core/components";
import { useAppContext } from "$core/contexts/appContext";

export default function Web() {
  const context = useAppContext();
  const { katakana } = context;
  return (
    <div className="w-screen h-screen bg-white">
      <Navbar />
      <BackDrop>
        <SwapLang />
        <div className="w-screen flex flex-col md:flex-row xl:justify-item xl:w-4/5 2xl:w-3/5">
          <InputBox />
          <OutputBox />
        </div>
      </BackDrop>
    </div>
  );
}
