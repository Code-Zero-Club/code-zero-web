import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        code ; zero
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 px-4">
          <strong>2024 ShowReel</strong>
          <br />
          <br />
          Code : Zero에서 1년간 진행한 프로젝트를 아래 링크에서 확인할 수
          있습니다.
          <br />
          1년간의 성장과정을 확인해보세요!
          <div className="flex flex-row gap-6 items-center justify-center">
            <Link
              target="_blank"
              href="https://czwa.codezero.lol"
              className="block text-center text-lg text-slate-50 rounded-md mt-8 hover:font-bold"
            >
              CZWA
            </Link>
            <Link
              target="_blank"
              href="https://dormitalk.codezero.lol"
              className="block text-center text-lg text-slate-50 rounded-md mt-8 hover:font-bold"
            >
              도미톡!
            </Link>
            <Link
              target="_blank"
              href="https://weather-info.codezero.lol"
              className="block text-center text-lg text-slate-50 rounded-md mt-8 hover:font-bold"
            >
              오늘의 날씨
            </Link>
          </div>
        </h2>
      </div>
    </div>
  );
}
