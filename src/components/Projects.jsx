import Image from "next/image";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";

import ReactLogo from "/public/react-icon.svg";
import TSLogo from "/public/ts-icon.svg";
import TailwindLogo from "/public/tailwind-logo.svg";

import { AiFillGithub } from "react-icons/ai";
import Button from "./Button";

export default function Projects() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-10 bg-astronaut-500">
      <h1 className="text-xl font-roboto font-bold ">Projetos</h1>

      <div className="py-6   max-h-2xl max-w-2xl shadow-md">
        <h3 className="font-roboto text-md text-zinc-800 md:text-lg lg:text-2xl">
          Clone site Nike
        </h3>

        <div className="flex items-center gap-2 pt-3 pb-1">
          <h3 className="text-sm font-roboto md:text-md lg:text-lg ">
            tech stack:
          </h3>
          <Image src={ReactLogo} alt="js logo" className="w-6 h-6" />
          <Image src={TSLogo} alt="js logo" className="w-6 h-6" />
          <Image src={TailwindLogo} alt="js logo" className="w-6 h-6" />
        </div>
        <Image src={web1} alt="clone site nike" />
        <div className="flex gap-3 px-4 py-2 items-center">
          <Button children={"Preview"} />
          <a href="#" className="text-black text-4xl">
            <AiFillGithub />
          </a>
        </div>
      </div>

      <div className="py-6  max-h-2xl max-w-2xl shadow-md ">
        <h3 className="font-roboto text-md text-zinc-800">Clone site Nike</h3>
        <Image src={web2} alt="clone site nike" />
        <div className="flex gap-3 px-4 py-2 items-center">
          <Button children={"Preview"} />
          <a href="#" className="text-black text-4xl">
            <AiFillGithub />
          </a>
        </div>
      </div>

      <div className="py-6  max-h-2xl max-w-2xl shadow-md">
        <h3 className="font-roboto text-md text-zinc-800">Clone site Nike</h3>
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
