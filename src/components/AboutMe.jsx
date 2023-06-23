import Image from "next/image";

import JSLogo from "../../public/js-icon.svg";
import TSLogo from "../../public/ts-icon.svg";
import TaliwindLogo from "../../public/tailwind-logo.svg";
import ReactLogo from "../../public/react-icon.svg";
import GitLogo from "../../public/git-logo.svg";
import GitHubLogo from "../../public/github-icon.svg";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-8 shadow-md  shadow-ebony-900 bg-gradient-to-b from-ebony-600 to-ebony-500   ">
      <h2 className="font-bold font-openSans text-2xl text-ebony-50 md:text-3xl  ">
        Um pouco sobre mim ...
      </h2>

      <div className="flex flex-col items-center px-1  justify-center shadow-lg rounded-md lg:items-start md:items-start md:py-9 lg:py-14">
        <p className="text-center font-openSans text-md leading-8 py-5 text-ebony-50 md:text-lg md:px-10  lg:text-xl  lg:px-24 md:text-justify ">
          Gosto de transformar problemas em soluções, buscando sempre o
          equilibrio entre algo que chame atenção por ter uma interface
          visualmente bonita e intuitiva além de ser funcional.
        </p>

        <p className="text-center font-openSans text-md leading-8 py-5 text-ebony-50 md:text-lg  md:px-10 lg:text-xl md:px-18  lg:px-24 md:text-justify">
          Estou sempre em desenvolvimento, estudar sobre tecnologia é um dos
          meus passatempos favoritos.
        </p>
        <p className="text-center font-openSans text-md leading-8 py-5 text-ebony-50 md:text-lg  md:px-10 lg:text-xl md:px-18 lg:px-24 md:text-justify ">
          Atualmente cursando o 5º semestre do bacharel em sistemas de
          informação.
        </p>
      </div>

      <div>
        <h3 className="text-xl text-center font-bold font-openSans mb-2 text-ebony-50 mt-14 md:text-2xl ">
          Tecnologias
        </h3>
        <div className="grid grid-cols-2 grid-rows-2 gap-6 place-items-center justify-items-center py-4 w-full md:grid-cols-3 md:grid-rows-2 md:gap-8 lg:flex lg:justify-between">
          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={ReactLogo} alt="logo react" />
            <p className="font-openSans text-lg text-ebony-50">React</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={TSLogo} alt="logo typescript" />
            <p className="font-openSans text-lg text-ebony-50">Typescript</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={JSLogo} alt="logo javascript" />
            <p className="font-openSans text-lg text-ebony-50">Javascript</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              className="w-24 h-24"
              src={TaliwindLogo}
              alt="logo tailwind"
            />
            <p className="font-openSans text-lg text-ebony-50">Tailwind CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={GitLogo} alt="logo tailwind" />
            <p className="font-openSans text-lg text-ebony-50">Git</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={GitHubLogo} alt="logo tailwind" />
            <p className="font-roboto text-lg text-ebony-50">GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
}
