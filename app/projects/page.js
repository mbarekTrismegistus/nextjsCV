import {Button, Divider, Progress} from "@heroui/react";
import Link from "next/link";
import { ArrowRight, Github, Stars } from "react-bootstrap-icons";
import { Link as LinkIcon } from "react-bootstrap-icons";




export default function Skills() {
  return (
    <div className="text-zinc-200 pt-[15vh] px-8 text-start justify-self-start">
      <p className="flex items-center font-bold text-5xl gap-3 pb-4"><Stars size={40}/>Projects</p>
      <div className="flex flex-wrap w-full bg-zinc-900 rounded-lg border-1 border-zinc-800 p-5">
        <div className="flex flex-col basis-1/2 py-5 gap-4">
            <p className="font-bold text-3xl">Art Dungeon</p>
            <p>
                A website for artists to share their art with everyone, made with nextjs
            </p>
            <Link className="font-bold hover:text-violet-600 flex items-center gap-4" href={'https://github.com/mbarekTrismegistus/ArtDungeon'}><Github size={20}/>Github repo</Link>
            
            <Link className="font-bold hover:text-violet-600 flex items-center gap-4" href={'https://art-dungeon.vercel.app/'}><LinkIcon size={20}/>Link</Link>

        </div>
        <div className="flex flex-col basis-1/2 py-5 gap-4">
            <p className="font-bold text-3xl">Wired Courses</p>
            <p>
                A website to share and stream course online made with angular
            </p>
            <Link className="font-bold hover:text-violet-600 flex items-center gap-4" href={'https://github.com/mbarekTrismegistus/wiredCourses'}><Github size={20}/>Github repo</Link>
            
            <Link className="font-bold hover:text-violet-600 flex items-center gap-4" href={'https://wired-courses.vercel.app/'}><LinkIcon size={20}/>Link</Link>

        </div>
        <div className="flex flex-col basis-1/2 py-5 gap-4">
            <p className="font-bold text-3xl">Bros Email Sender</p>
            <p>
                A website to manage communication via email made with nextjs and resend
            </p>
            <Link className="font-bold hover:text-violet-600 flex items-center gap-4" href={'https://github.com/mbarekTrismegistus/NextEmailSender'}><Github size={20}/>Github repo</Link>
            
        </div>
        <div className="flex flex-col basis-1/2 py-5 gap-4">
            <p className="font-bold text-3xl">Wired Chess</p>
            <p>
                A website For online chess, built with phoenix and elixir to ensure the highest performance and scalability
            </p>

        </div>
      </div>
      <Button as={Link} size="lg" variant="flat" className="bg-[#744e96]/30 text-white rounded-full my-5" href="/contact">Contact<ArrowRight/> </Button>
    </div>
  );
}
