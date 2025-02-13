import { Divider } from "@heroui/divider";
import Image from "next/image";
import { Envelope, Github, Telephone, MortarboardFill } from "react-bootstrap-icons";


export default function Home() {
  return (
    <div className="max-w-[60vw] flex flex-col">
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
              <p className="text-zinc-400 text-sm">/mbarekTrismegistus</p>
            </div>
            <p className="text-zinc-400 text-2xl font-light mb-1">|</p>
            <div className="flex items-center gap-2">
              <Envelope size={20}/>
              <Divider orientation="vertical" className="b"/>
              <p className="text-zinc-400 text-sm">mbarek.talbi666@gmail.com</p>
            </div>
            <p className="text-zinc-400 text-2xl font-light mb-1">|</p>
            <div className="flex items-center gap-2">
              <Telephone size={20}/>
              <p className="text-zinc-400 text-sm">+2126 96 428456</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="py-5 px-3 bg-white">
          <div className="flex items-center gap-3">
            <MortarboardFill size={30} color="#252525"/>
            <p className="text-4xl font-bold bg-gradient-to-b from-zinc-700 to-zinc-900 inline-block text-transparent bg-clip-text">Formation</p>
          </div>
          <div className="flex">
            <div className="px-3 text-zinc-900">
              <ul>
                <li>
                  <div className="py-2">
                    <p className="font-bold text-violet-800">2024-present</p>
                    <p className="font-bold">Ecole superieur de technologie: Sidi Bennour</p>
                    <p className="">ingenierie de system informatique et technologie web</p>
                  </div>
                </li>
                <Divider/>
                <li>
                  <div className="pt-2">
                    <p className="font-bold text-violet-800">2022-2024</p>
                    <p className="font-bold">Institut spécialisé de technologie appliquée, Larache</p>
                    <p className="">Diplome de technicien specialisé au Development digital : Full Stack</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="px-3 text-zinc-900">
              <ul>
                <li>
                  <div className="py-2">
                    <p className="font-bold text-violet-800">2024-present</p>
                    <p className="font-bold">Ecole superieur de technologie: Sidi Bennour</p>
                    <p className="">ingenierie de system informatique et technologie web</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-5 px-3 bg-white">
          <div className="flex items-center gap-3">
            <MortarboardFill size={30} color="#252525"/>
            <p className="text-4xl font-bold bg-gradient-to-b from-zinc-700 to-zinc-900 inline-block text-transparent bg-clip-text">Conaissances et compétences</p>
          </div>
          <div className="flex text-zinc-900">
            <div className="">
              <div className="px-3 py-2">
                <p className="font-bold text-violet-800">Languages de Programmation :</p>
                <p className="font-bold ps-3">Elixir - JavaScript/Typescript - Java - Python - PHP</p>
              </div>
              <div className="px-3 py-2">
                <p className="font-bold text-violet-800">Système de gestion de base de données :</p>
                <p className="font-bold ps-3">PostgreSQL - Mysql/MariaDB - MongoDB - MSSQL</p>
              </div>
            </div>
            <div>
              <div className="px-3 py-2">
                <p className="font-bold text-violet-800">Méthode d'analyse et de modelisation :</p>
                <p className="font-bold ps-3">Merise, UML</p>
              </div>
              <div className="px-3 py-2">
                <p className="font-bold text-violet-800">Technologies Web :</p>
                <p className="font-bold ps-3">NextJS - Phoenix Framework - ReactJS - AngularJS - Laravel - NodeJS - Bun - TailwindCSS - ExpressJS</p>
              </div>
              <div className="px-3 py-2">
                <p className="font-bold text-violet-800">Autre</p>
                <p className="font-bold ps-3">Git - Administration Linux - </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
