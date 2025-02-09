import Image from "next/image";
import { Github } from "react-bootstrap-icons";

export default function Home() {
  return (
    <div className="bg-white flex justify-center p-5 items-center gap-9 bg-zinc-900">
      <div className="flex flex-col items-center">
        <Image src={'/pierre.jpg'} width={150} height={150} alt="personal picture" className="ring-4 ring-violet-600 ring-offset-4 ring-offset-zinc-900 rounded-full aspect-square object-cover"/>
      </div>
      <div className="flex flex-col">
        <p className="text-3xl font-bold bg-gradient-to-b from-white to-zinc-400 inline-block text-transparent bg-clip-text">M'barek ETTALEBY</p>
        <p className="font-bold text-4xl bg-gradient-to-r from-violet-500 to-violet-800 inline-block text-transparent bg-clip-text"><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">A</span> Full Stack Web <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">Developer</span></p>
        <div className="pt-4 flex items-center">
          <div className="flex items-center gap-2">
            <Github size={30}/>
            <p className="text-zinc-400">/mbarekTrismegistus</p>
          </div>
        </div>
      </div>
    </div>
  );
}
