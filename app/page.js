import { Divider } from "@heroui/divider";
import { Progress } from "@heroui/progress";
import Image from "next/image";
import { Envelope, Github, Telephone, MortarboardFill, Stars, Translate, CodeSlash, BriefcaseFill } from "react-bootstrap-icons";


export default function Home() {
  return (
    <div className="max-w-[100vw] flex flex-col">
      <div className="bg-white flex justify-center p-5 items-center gap-9 bg-zinc-900">
        {/* <div className="flex flex-col items-center">
          <Image src={'/pierre.jpg'} width={150} height={150} alt="personal picture" className="ring-2 ring-violet-600 ring-offset-4 ring-offset-zinc-900 rounded-full aspect-square object-cover"/>
        </div> */}
        <div className="flex flex-col text-center">
          <p className="text-4xl font-bold bg-gradient-to-b from-white to-zinc-400 inline-block text-transparent bg-clip-text">M'barek ETTALEBY</p>
          <p className="font-bold text-5xl bg-gradient-to-r from-violet-500 to-violet-800 inline-block text-transparent bg-clip-text"><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">A</span> Full Stack Web <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">Developer</span></p>
          <div className="pt-4 flex gap-3 justify-center flex-wrap items-center">
            <div className="flex  items-center gap-2">
              <Github size={30}/>
              <p className="text-zinc-400 text-sm">/mbarekTrismegistus</p>
              <Divider orientation="vertical" className="bg-zinc-400 min-h-[20px]"/>
            </div>
            <div className="flex items-center gap-2">
              <Envelope size={30} className="p-[4px]"/>
              <p className="text-zinc-400 text-sm">mbarek.talbi666@gmail.com</p>
              <Divider orientation="vertical" className="bg-zinc-400 min-h-[20px]"/>
            </div>
            <div className="flex items-center gap-2">
              <Telephone size={30} className="p-[4px]"/>
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
          <div className="flex px-8">
            <div className="basis-2/4 px-3 text-zinc-900">
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
            <div className="basis-2/4 px-3 text-zinc-900">
              <ul>
                <li>
                  <div className="py-2">
                    <p className="font-bold text-violet-800">2022</p>
                    <p className="font-bold">Lycee Abdelkader Nkhcha, Ksar El Kebir</p>
                    <p className="">baccalauréat sciences physiques</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-5 px-3 bg-white">
          <div className="flex items-center gap-3">
            <CodeSlash size={30} color="#252525"/>
            <p className="text-4xl font-bold bg-gradient-to-b from-zinc-700 to-zinc-900 inline-block text-transparent bg-clip-text">Conaissances et compétences</p>
          </div>
          <div className="flex flex-wrap text-zinc-900 px-8 ">
            <div className="basis-2/4">
              
              <div className="px-3 py-2">
                <p className="font-bold text-violet-800">Languages de Programmation :</p>
                <p className="font-bold ps-3">Elixir - JavaScript/Typescript - Java - Python - PHP</p>
              </div>
              <Divider/>

              <div className="px-3 py-2">
                <p className="font-bold text-violet-800">Technologies Web :</p>
                <p className="font-bold ps-3">NextJS - Phoenix Framework - ReactJS - AngularJS - Laravel - NodeJS - Bun - TailwindCSS - ExpressJS - Spring Boot</p>
              </div>
              <Divider/>

              <div className="px-3 py-2">
                <p className="font-bold text-violet-800">Autre</p>
                <p className="font-bold ps-3">Git - Administration Linux - securite web/reseau - AWS/Oracle cloud - DevOps - Cloud Native</p>
              </div>
              <Divider/>

            </div>
            <div className="basis-2/4">
              <div className="px-3 py-2">
                <p className="font-bold text-violet-800">Méthode d'analyse et de modelisation :</p>
                <p className="font-bold ps-3">Merise, UML</p>
              </div>
              <Divider/>

              <div className="px-3 py-2">
                <p className="font-bold text-violet-800">Système de gestion de base de données :</p>
                <p className="font-bold ps-3">PostgreSQL - Mysql/MariaDB - MongoDB - MSSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-3 bg-white">
          <div className="flex items-center gap-3">
            <BriefcaseFill size={30} color="#252525"/>
            <p className="text-4xl font-bold bg-gradient-to-b from-zinc-700 to-zinc-900 inline-block text-transparent bg-clip-text">Projets</p>
          </div>
          <div className="flex flex-wrap text-zinc-900 px-8 ">
            <div className="basis-2/4">
                <div className="px-3 py-2">
                  <p className="font-bold text-violet-800">2025 Projet personnel</p>
                  <p className="font-bold ps-3">Site de L'échec online</p>
                  <p className="ps-3"><span className="font-bold">Outils: </span>Elixir - Phoenix Framework - PostgreSQL - Git</p>
                </div>
                <Divider/>

                <div className="px-3 py-2">
                  <p className="font-bold text-violet-800">2025 Projet personnel</p>
                  <p className="font-bold ps-3">web app pour partager et de streaming des cours online</p>
                  <p className="ps-3"><span className="font-bold">Outils: </span>AngularJS - Tanstack Query - ExpressJS - TailwindCSS - PostgreSQL - Git - Vercel - Supabase</p>
                </div>
                <Divider/>
                
            </div>
            <div className="basis-2/4">
                <div className="px-3 py-2">
                  <p className="font-bold text-violet-800">2024 Projet personnel</p>
                  <p className="font-bold ps-3">Site Web pour les Artists, parteger leur creation</p>
                  <p className="ps-3"><span className="font-bold">Outils: </span>NextJS 15 - ReactJS - Drizzle - NodeJS - TailwindCSS - PostgreSQL - Git - Vercel - Supabase</p>
                </div>
                <Divider/>
                <div className="px-3 py-2">
                  <p className="font-bold text-violet-800">2024 Projet De Stage</p>
                  <p className="font-bold ps-3">Site Web pour gerer la communication par Email</p>
                  <p className="ps-3"><span className="font-bold">Outils: </span>NextJS 15 - ReactJS - Prisma - NodeJS - TailwindCSS - PostgreSQL - Git - Resend - Vercel - Supabase</p>
                </div>
            </div>
            <div className="basis-2/4">
                <div className="px-3 py-2">
                  <p className="font-bold text-violet-800">2024 Projet De synthese</p>
                  <p className="font-bold ps-3">Forum de discussion</p>
                  <p className="ps-3"><span className="font-bold">Outils: </span>NextJS 13 - ReactJS - Prisma - NodeJS - TailwindCSS - PostgreSQL - Git - Vercel - Supabase</p>
                </div>
                
            </div>
          </div>
      </div>
      <div className="py-5 px-3 bg-white">
          <div className="flex py-4 items-center gap-3">
            <Translate size={30} color="#252525"/>
            <p className="text-4xl font-bold bg-gradient-to-b from-zinc-700 to-zinc-900 inline-block text-transparent bg-clip-text">Langues</p>
          </div>
          <div className="flex gap-4 px-8 text-zinc-900">
            <Progress value={85} color="secondary" className="" label="Anglais"/>
            <Progress value={65} color="secondary" className="" label="Francais"/>
          </div>
          
      </div>
      <div className="py-5 px-3 bg-white">
          <div className="flex py-4 items-center gap-3">
            <Stars size={30} color="#252525"/>
            <p className="text-4xl font-bold bg-gradient-to-b from-zinc-700 to-zinc-900 inline-block text-transparent bg-clip-text">Loisir</p>
          </div>
          <div className="flex flex-col gap-4 px-8 text-zinc-900">
            <p className="font-bold text-xl">- jouer de la flûte</p>
            <p className="font-bold text-xl">- jouer aux échecs</p>
            <p className="font-bold text-xl">- Le dessin</p>
            <p className="font-bold text-xl">- Lecture des livres historique</p>

          </div>
          
      </div>
    </div>
  );
}
