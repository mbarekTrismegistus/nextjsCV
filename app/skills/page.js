import {Button, Divider, Progress} from "@heroui/react";
import Link from "next/link";
import { ArrowRight, Github, Stars } from "react-bootstrap-icons";
import { FaReact } from "react-icons/fa";
import { FaPhoenixFramework } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FaCode } from "react-icons/fa";
import { SiFramework } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";



export default function Skills() {
  return (
    <div className="text-zinc-200 pt-[15vh] px-8 text-start justify-self-start">
      <p className="flex items-center font-bold text-5xl gap-3 pb-4"><Stars size={40}/>Skill</p>
      <div className="flex gap-4 w-full bg-zinc-900 rounded-lg border-1 border-zinc-800 px-5">
        <div className="flex flex-1 flex-col gap-3 py-5">
            <p className="font-bold flex items-center gap-3"><FaCode size={30}/> Programming Languages</p>
            <div className="px-10 flex flex-col gap-4">
                <div className="w-full">
                    <Progress classNames={{indicator: "bg-[#48205D]"}} label="Elixir" value={80} className="max-w-md"/>
                </div>
                <div className="w-full">
                    <Progress label="TypeScript" classNames={{indicator: "bg-[#007acc]"}} value={90} className="max-w-md"/>
                </div>
                <div className="w-full">
                    <Progress label="Python" classNames={{indicator: "bg-[#FFE873]"}} value={70} className="max-w-md"/>
                </div>
                <div className="w-full">
                    <Progress label="Java" classNames={{indicator: "bg-[#5382a1]"}} value={65} className="max-w-md"/>
                </div>
                <div className="w-full">
                    <Progress label="PHP" classNames={{indicator: "bg-[#AEB2D5]"}} value={70} className="max-w-md"/>
                </div>
            </div>
        </div>
        <div className="flex flex-1 flex-col gap-3 py-5">
            <p className="font-bold flex items-center gap-3"><SiFramework size={30}/>Frameworks and web technologies</p>
            <div className="flex flex-wrap gap-5 px-10">
                <FaReact color="#61DBFB" size={40}/>
                <FaPhoenixFramework color="#FD4F00" size={40}/>
                <RiNextjsFill size={40}/>
                <FaLaravel color="#F05340" size={40}/>
                <FaAngular color="#c3002f" size={40}/>
                <SiExpress size={40}/>
                <SiSpring color="#6DB33F" size={40}/>
                <FaNodeJs color="#3C873A" size={40}/>
                <RiTailwindCssFill color="	#a5f3fc" size={40}/>
                <FaAws color="	#FF9900" size={40}/>
                <FaGitAlt color="	#F1502F" size={40}/>
            </div>
            <div className="flex flex-col gap-3 py-5">
                <p className="font-bold flex items-center gap-3"><FaDatabase size={30}/>Database management system</p>
                <div className="flex flex-wrap gap-5 px-10">
                    <BiLogoPostgresql color="#008bb9" size={40}/>
                    <SiMongodb color="#4DB33D" size={40}/>
                    <GrMysql color="#00758F" size={40}/>
                    <DiMsqlServer color="#A91D22" size={40}/>

                </div>
            </div>
            <div className="flex flex-col gap-3 py-5">
                <p className="font-bold flex items-center gap-3"><CiCirclePlus size={30}/>Others</p>
                <div className="flex flex-wrap gap-5 px-10">
                    <p>Linux administration - Security - DevOps</p>

                </div>
            </div>
        </div>
      </div>
      <Button as={Link} size="lg" variant="flat" className="bg-[#744e96]/30 text-white rounded-full my-5" href="/projects">Projects<ArrowRight/> </Button>
    </div>
  );
}
