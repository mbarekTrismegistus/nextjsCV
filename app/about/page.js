import {Button} from "@heroui/react";
import Link from "next/link";
import { ArrowRight, Github } from "react-bootstrap-icons";



export default function About() {
  return (
    <div className="text-zinc-200 pt-[20vh] px-8 text-start justify-self-start">
      <p className="font-bold text-5xl pb-4">M'barek ETTALEBY</p>
      <div className="bg-zinc-900 rounded-lg border-1 border-zinc-800 px-5">
        <div className="py-5">
            <p>Currently studying my third year in the <Link className="font-bold text-decoration-line" href={'https://www.estsb.ucd.ac.ma/'}>EST-sidi bennour</Link> (ingénierie des système informatiques et de technologie web)</p>
            <p>before that I got my my diploma in full stack web development from ISTA Larache in 2024</p>
        </div>
        <div className="py-5">
            <p>An inituiative developer who seeks perfection in all his creations, and try to always be up-to-date about all tech trends and changes in the world of Programming</p>
            <p>With a knowledge and experience in handling projects from their very first steps to deployement</p>
        </div>
        <div className="py-5">
            <Link className="flex items-center gap-2" href={'https://github.com/mbarekTrismegistus'}>
                <Github size={30}/>
                <p>/mbarekTrismegistus</p>
            </Link>
        </div>
      </div>
      <Button as={Link} size="lg" variant="flat" className="bg-[#744e96]/30 text-white rounded-full my-5" href="/skills">My Skills<ArrowRight/> </Button>
    </div>
  );
}
