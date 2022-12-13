import {
  BackDrop,
  InputBox,
  Navbar,
  OutputBox,
  SwapLang,
} from "$core/components";

export default function Web() {
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
