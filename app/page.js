import Link from "next/link";
import {Button} from "@heroui/react";
import { ArrowRight } from "react-bootstrap-icons";



export default function Home() {
  return (
    <div className="">
      <div className="h-[100vh] relative z-[1] flex-col gap-4 flex items-center justify-center text-zinc-200">
        <p className="font-bold text-7xl bg-gradient-to-b from-zinc-100 to-zinc-400 text-transparent bg-clip-text dark:from-zinc-950">I am M'barek ETTALEBY</p>
        <p className="text-zinc-400">I am a Full Stack Web Developer, capable of taking responsibilty of <span className="font-bold text-xl text-white">any web app</span> from <span className="font-bold text-xl text-white">prototype</span> to <span className="font-bold text-xl text-white">production 🚀</span> </p>
        <div className="flex gap-4">
            <Button size="lg" className="bg-[#744e96] text-white rounded-full" href="#">
              Contact
            </Button>
            <Button as={Link} size="lg" variant="flat" className="bg-[#744e96]/30 text-[#744e96] rounded-full" href="/about">About Me <ArrowRight/> </Button>
        </div>
      </div>
    </div>
  );
}
