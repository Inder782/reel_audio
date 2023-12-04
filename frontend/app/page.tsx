import Dropbox from "@/components/Dropbox";
import Image from "next/image";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { redirect } from "next/dist/server/api-utils";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-purple-400 to-red-500 ">
      <div className="flex items-center justify-center p-2">
        <Image src="./instagram.svg" alt="logo" width={125} height={50} />
        <p className="text-5xl font-bold  bg-clip-text bg-gradient-to-r from-black to-black text-transparent max-sm:hidden">
          Reel-2-Audio
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-6">
        <div />
        <div className="flex flex-col items-center">
          <p className="text-5xl font-bold  bg-clip-text bg-gradient-to-r from-black to-black text-transparent max-sm:hidden">
            Giving You Audio's so you can{" "}
            <span className="bg-gradient-to-r bg-clip-text from-purple-600 to-blue-700">
              FOCUS
            </span>{" "}
            on Ideas
          </p>
          <p className="text-5xl font-bold  bg-clip-text bg-gradient-to-r from-black to-black text-transparent max-sm:hidden mt-10">
            Upload the file and get started
          </p>
          <Dropbox />
        </div>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 bg-black text-white p-4">
        <div className="flex items-center justify-around">
          <Link href="https://github.com/Inder782/reel_audio" target="blank">
            <Image src="../github.svg" width={42} height={42} alt="github" />
          </Link>
        </div>
      </footer>
    </section>
  );
}
