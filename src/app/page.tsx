import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <>
      <nav className="top-0 text-2xl font-bold shadow-md text-white p-4">PlantSnap</nav>
    <BackgroundBeamsWithCollision className=" w-screen h-screen flex flex-col">
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Identify and explore the world of plants ..
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Welcome to PlantSnap</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Welcome to PlantSnap</span>
          </div>
        </div>
      </h2>
      <div className="mt-4">
        <Link href={'./know-about-us'}>
        <Button className="m-1">Know About Us</Button>
        </Link>
        <Link href={'./try-plantSnap'}>
        <Button className="m-1">Try PlantSnap</Button>
        </Link>
      </div>
    </BackgroundBeamsWithCollision>
    </>
  );
}
