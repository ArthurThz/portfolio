import Image from "next/image";

import JSLogo from "../../public/js-icon.svg";
import TSLogo from "../../public/ts-icon.svg";
import TaliwindLogo from "../../public/tailwind-logo.svg";
import ReactLogo from "../../public/react-icon.svg";
import GitLogo from "../../public/git-logo.svg";
import GitHubLogo from "../../public/github-icon.svg";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-4">
      <h2 className="font-bold font-roboto text-2xl">Sobre mim</h2>
      <p className="text-center font-roboto text-md leading-8 py-5">
        Gosto de transformar problemas em soluções, buscando sempre o equilibrio
        entre algo que chame atenção por ser bonito e ao mesmo tempo funcional.
      </p>
      <h3 className="text-xl font-bold font-roboto mb-2 ">Tecnologias</h3>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 place-items-center justify-items-center py-4 w-full">
        <div className="flex flex-col justify-center items-center">
          <Image className="w-24 h-24" src={ReactLogo} alt="logo react" />
          <p className="font-roboto text-lg">React</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image className="w-24 h-24" src={TSLogo} alt="logo typescript" />
          <p className="font-roboto text-lg">Typescript</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image className="w-24 h-24" src={JSLogo} alt="logo javascript" />
          <p className="font-roboto text-lg">Javascript</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image className="w-24 h-24" src={TaliwindLogo} alt="logo tailwind" />
          <p className="font-roboto text-lg">Tailwind CSS</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image className="w-24 h-24" src={GitLogo} alt="logo tailwind" />
          <p className="font-roboto text-lg">Git</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image className="w-24 h-24" src={GitHubLogo} alt="logo tailwind" />
          <p className="font-roboto text-lg">GitHub</p>
        </div>
      </div>
    </section>
  );
}
