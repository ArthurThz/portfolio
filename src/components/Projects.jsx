import Image from "next/image";
import web1 from "../../public/web1.png";
import dioClone from "/public/dio-clone.png";
import consultaJa from "/public/consultaja.png";
import newsHomePage from "/public/new-homepage.png";

import { SiStyledcomponents } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";

import { AiFillGithub } from "react-icons/ai";
import Button from "./Button";

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 bg-ebony-900">
      <h1 className="text-3xl font-openSans text-ebony-50 tracking-widest font-bold py-4 mb-4">
        Projetos
      </h1>

      <div className="py-6 px-10 bg-ebony-100 rounded-md mb-9  max-h-2xl max-w-2xl shadow-md shadow-zinc-500 ">
        <h3 className="font-openSans text-xl font-bold text-zinc-800 md:text-lg lg:text-2xl">
          Dio Clone
        </h3>

        <div className="flex items-center gap-2 pt-3 pb-1">
          <h3 className="text-md opacity-90 mb-2 font-openSans md:text-md lg:text-lg ">
            tech stack:
          </h3>
          <FaReact alt="js logo" className="w-6 h-6 text-zinc-800" />
          <SiTypescript alt="js logo" className="w-6 h-6 text-zinc-800" />
          <SiStyledcomponents alt="js logo" className="w-8 h-8 text-zinc-800" />
        </div>
        <Image
          src={dioClone}
          alt="Projeto dio clone"
          className="shadow-md rounded-md"
        />
        <div className="flex gap-3 px-4 py-2 items-center">
          <Button children={"Preview"} />
          <a
            target="_blank"
            href="https://github.com/ArthurThz/dio-formacao-react"
            className=" text-xl text-ebony-800 ease-in-out duration-150 flex items-center justify-center gap-2 ml-2 underline  "
          >
            <AiFillGithub className="mt-1" />
            <span>repositório</span>
          </a>
        </div>
      </div>

      <div className="py-6 px-10 bg-ebony-100 rounded-md mb-9  max-h-2xl max-w-2xl shadow-sm shadow-zinc-900 ">
        <h3 className="font-openSans text-xl font-bold text-zinc-800 md:text-lg lg:text-2xl">
          Consulta já
        </h3>

        <div className="flex items-center gap-2 pt-3 pb-1">
          <h3 className="text-md opacity-90 mb-2 font-openSans md:text-md lg:text-lg ">
            tech stack:
          </h3>
          <FaReact alt="js logo" className="w-6 h-6 text-zinc-800" />
          <FaSass alt="js logo" className="w-6 h-6 text-zinc-800" />
        </div>
        <Image
          src={consultaJa}
          alt="Projeto consulta ja"
          className=" shadow-md rounded-md"
        />
        <div className="flex gap-3 px-4 py-2 items-center">
          <Button children={"Preview"} />
          <a
            target="_blank"
            href="https://github.com/ArthurThz/projeto-consulta-ja"
            className=" text-xl text-ebony-800 ease-in-out duration-150 flex items-center justify-center gap-2 ml-2 underline  "
          >
            <AiFillGithub className="mt-1" />
            <span>repositório</span>
          </a>
        </div>
      </div>

      <div className="py-6 px-10 bg-ebony-100 rounded-md mb-9  max-h-2xl max-w-2xl shadow-sm shadow-zinc-900 ">
        <h3 className="font-openSans text-xl font-bold text-zinc-800 md:text-lg lg:text-2xl">
          News Homepage
        </h3>

        <div className="flex items-center gap-2 pt-3 pb-1">
          <h3 className="text-md opacity-90 mb-2 font-openSans md:text-md lg:text-lg ">
            tech stack:
          </h3>
          <AiFillHtml5 alt="js logo" className="w-6 h-6 text-zinc-800" />
          <DiCss3 alt="js logo" className="w-6 h-6 text-zinc-800" />
        </div>
        <Image
          src={newsHomePage}
          alt="Projeto news homepage"
          className="shadow-md rounded-md"
        />
        <div className="flex gap-3 px-4 py-2 items-center">
          <Button
            children={"Preview"}
            href={"https://arthurthz.github.io/news-homepage/"}
          />
          <a
            target="_blank"
            href="https://github.com/ArthurThz/news-homepage"
            className=" text-xl text-ebony-800 ease-in-out duration-150 flex items-center justify-center gap-2 ml-2 underline  "
          >
            <AiFillGithub className="mt-1" />
            <span>repositório</span>
          </a>
        </div>
      </div>
    </section>
  );
}
