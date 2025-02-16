import {Avatar, Button, Divider, Progress} from "@heroui/react";
import Link from "next/link";
import { ArrowRight, ChatFill, EnvelopeOpenFill, Github, Linkedin, PhoneFill, Stars } from "react-bootstrap-icons";
import { Messenger } from "react-bootstrap-icons";




export default function Skills() {
  return (
    <div className="text-zinc-200 pt-[15vh] max-w-[60vw] px-8 text-start justify-self-center mx-auto">
      <p className="flex items-center font-bold text-5xl gap-3 pb-4"><ChatFill size={40}/>Contact Me</p>
      <div className="flex flex-col w-full gap-5 bg-zinc-900 rounded-lg border-1 border-zinc-800 p-5">
        <div className="flex items-center gap-5">
            <Avatar src="/me.jpg" className="w-20 h-20" name="me" isBordered/>
            <div className="flex flex-col">
                <p className="font-bold text-2xl">M'barek ETTALEBY</p>
                <Link href={'mailto:mbarek.talbi666@gmail.com'}>
                    <p className="flex items-center gap-4">mbarek.talbi666@gmail.com</p>
                </Link>
                <p className="flex items-center gap-4">0696428456</p>
                
            </div>
        </div>
        <Link className="flex items-center gap-4" href={'https://www.linkedin.com/in/m-barek-ettaleby-94b23331b/'}><Linkedin size={20}/>Linkedin</Link>
        <Link className="flex items-center gap-4" href={'https://github.com/mbarekTrismegistus'}>
            <Github size={20}/>
            <p>/mbarekTrismegistus</p>
        </Link>
        <Button className="py-5" as={Link} href="/cv">
            My resume
        </Button>

      </div>
    </div>
  );
}
