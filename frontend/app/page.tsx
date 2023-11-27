import Dropbox from "@/components/Dropbox";
import Urls from "@/components/Urls";
import Image from "next/image";

export default function Component() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-purple-400 to-red-500">
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
          <Urls />
          <p className="text-5xl font-bold  bg-clip-text bg-gradient-to-r from-black to-black text-transparent max-sm:hidden mt-10">
            Or
          </p>

          <Dropbox />
        </div>
      </div>
    </section>
  );
}
