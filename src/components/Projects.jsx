import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";

import { SiStyledcomponents } from "react-icons/si";

import ReactLogo from "/public/react-icon.svg";
import TSLogo from "/public/ts-icon.svg";
import TailwindLogo from "/public/tailwind-logo.svg";

import { AiFillGithub } from "react-icons/ai";
import Button from "./Button";

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 bg-ebony-900">
      <h1 className="text-3xl font-openSans text-ebony-50 tracking-widest font-bold py-4 mb-4">
        Projetos
      </h1>

      <div className="py-6 px-4 bg-ebony-50 rounded-md  max-h-2xl max-w-2xl shadow-md ">
        <h3 className="font-openSans text-xl font-bold text-zinc-800 md:text-lg lg:text-2xl">
          Dio Clone
        </h3>

        <div className="flex items-center gap-2 pt-3 pb-1">
          <h3 className="text-md opacity-90 font-openSans md:text-md lg:text-lg ">
            tech stack:
          </h3>
          <Image src={ReactLogo} alt="js logo" className="w-6 h-6" />
          <Image src={TSLogo} alt="js logo" className="w-6 h-6" />
          <SiStyledcomponents alt="js logo" className="w-8 h-8" />
        </div>
        <Image src={web1} alt="clone site nike" />
        <div className="flex gap-3 px-4 py-2 items-center">
          <Button children={"Preview"} />
          <a
            href="#"
            className=" text-xl text-ebony-900 ease-in-out duration-150 flex items-center justify-center gap-2  "
          >
            <AiFillGithub className="mt-1" />
            <span>repositório</span>
          </a>
        </div>
      </div>

      <div className="py-6  max-h-2xl max-w-2xl shadow-md ">
        <h3 className="font-openSans text-md text-zinc-800">Clone site Nike</h3>
        <Image src={web2} alt="clone site nike" />
        <div className="flex gap-3 px-4 py-2 items-center">
          <Button children={"Preview"} />
          <a href="#" className="text-black text-4xl">
            <AiFillGithub />
          </a>
        </div>
      </div>

      <div className="py-6  max-h-2xl max-w-2xl shadow-md">
        <h3 className="font-openSans text-md text-zinc-800">Clone site Nike</h3>
        <Image src={web3} alt="clone site nike" />
        <div className="flex gap-3 px-4 py-2 items-center">
          <Button children={"Preview"} />
          <a href="#" className="text-black text-4xl">
            <AiFillGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
