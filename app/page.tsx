import Image from "next/image";
import Timeline from "./components/Timeline";
import Busto from "./components/Busto";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="max-md:text-[12vw] md:text-[8rem] font-bold text-center w-full">
          <span className="relative">
            MORFLEPS
            <span className="absolute rotate-12 scale-50 top-5 right-0 translate-x-[50%]">
              ✌️
            </span>
          </span>
        </h1>
        <h2 className="w-full text-center max-md:text-[5vw] md:text-2xl">
          El Proximo Presidente De La Confederacion Argentina
        </h2>

        <Busto />

        <div className="w-full">
          <Timeline />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <span>
          Por&nbsp;
          <a className="!underline" href="https://joaco.io">
            Joaco
          </a>
        </span>
        <a className="font-bold" href="https://x.com/joacodotio">
          𝕏
        </a>
      </footer>
    </div>
  );
}
