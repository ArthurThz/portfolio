import Image from "next/image";

import JSLogo from "../../public/js-icon.svg";
import TSLogo from "../../public/ts-icon.svg";
import TaliwindLogo from "../../public/tailwind-logo.svg";
import ReactLogo from "../../public/react-icon.svg";
import GitLogo from "../../public/git-logo.svg";
import GitHubLogo from "../../public/github-icon.svg";
import SassLogo from "../../public/sass-logo.svg";
import StyledLogo from "../../public/styled-logo.svg";

import { BsGraphUpArrow } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillRocketFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <section className="bg-ebony-700 flex flex-col items-center justify-center py-20 px-8 shadow-md  shadow-ebony-900  ">
      <div
        className="flex flex-col items-center justify-center bg-ebony-50 p-5 shadow-md 
    shadow-ebony-900 
      rounded-md"
      >
        <h2 className="font-bold mt-3 font-roboto text-4xl text-ebony-900 tracking-wider md:text-4xl">
          Meus serviços
        </h2>

        <div
          className="flex flex-col gap-y-10 py-8 items-center px-3  text-ebony-900 bg-ebony-50
      mt-4  
      justify-center 
      md:px-2
      md:w-full 
      md:grid 
      md:grid-cols-2
      md:grid-rows-3
      md:gap-y-6
      md:gap-x-4
      md:place-items-center
      md:justify-items-center
      lg:grid-cols-3
      lg:grid-rows-2

      
      "
        >
          <div className="flex  flex-col   items-center justify-center text-center">
            <h1 className="text-xl md py-3 md:text-2xl lg:text-4xl">
              <BsGraphUpArrow />
            </h1>
            <h2 className="text-lg py-2 font-roboto font-bold tracking-wider md:text-xl">
              Escalabilidade
            </h2>
            <p className="text-md font-openSans md:text-lg">
              Codigos que permitem a evolução do seu sistema, adiantando as
              medidas que seriam tomadas no futuro.
            </p>
          </div>

          <div className="flex  flex-col  items-center justify-center text-center">
            <h1 className="text-xl py-3 md:text-2xl lg:text-4xl">
              <BsFillGearFill />
            </h1>
            <h2 className="text-lg py-2 font-roboto font-bold tracking-wider md:text-xl">
              Fácil Manutenção
            </h2>
            <p className="text-md font-openSans md:text-lg">
              Escrever códigos claros faz parte do trabalho de um bom
              desenvolvedor, é sempre bom ser claro e objetivo.
            </p>
          </div>

          <div className="flex flex-col  items-center justify-center text-center">
            <h1 className="text-xl py-3 md:text-2xl lg:text-4xl">
              <BsFillPencilFill />
            </h1>
            <h2 className="text-lg py-2 font-roboto font-bold tracking-wider md:text-xl">
              Personalização
            </h2>
            <p className="text-md font-openSans md:text-lg">
              Desenvolvimento de componentes de acordo com as suas necessidades,
              visando sempre a flexibilidade e adaptabilidade.
            </p>
          </div>

          <div className="flex flex-col  items-center justify-center text-center">
            <h1 className="text-xl py-3 md:text-2xl lg:text-4xl">
              <FaHandshake />
            </h1>
            <h2 className="text-lg py-2 font-roboto font-bold tracking-wider md:text-xl">
              Compromentimento
            </h2>
            <p className="text-md font-openSans md:text-lg">
              Gosto de terminar o que me proponho á fazer, mantendo sempre uma
              boa comunicação e deixando as ideias claras.
            </p>
          </div>

          <div className="flex flex-col  items-center justify-center text-center">
            <h1 className="text-xl py-3 md:text-2xl lg:text-4xl">
              <BsFillRocketFill />
            </h1>
            <h2 className="text-lg py-2 font-roboto font-bold tracking-wider md:text-xl">
              Desenvolvimento
            </h2>
            <p className="text-md font-openSans md:text-lg">
              Estou sempre buscando melhorar minhas qualidades, aprendendo
              sempre com meus erros e com as criticas.
            </p>
          </div>

          <div className="flex flex-col  items-center justify-center text-center">
            <h1 className="text-xl py-3 md:text-2xl lg:text-4xl">
              <FaUsers />
            </h1>
            <h2 className="text-lg py-2 font-roboto font-bold tracking-wider md:text-xl">
              Trabalho Em Equipe
            </h2>
            <p className="text-md font-openSans md:text-lg">
              Trabalhar em equipe cria muitas possibilidades de aprender e
              ensinar, e isso é o que me motiva.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl text-center font-bold font-roboto tracking-wider mb-2 text-ebony-50 mt-14 md:text-2xl ">
          Tecnologias
        </h3>
        <div className="grid grid-cols-3 grid-rows-2 gap-6 text-ebony-50 text-center place-items-center justify-items-center py-4 w-full md:grid-cols-3 md:grid-rows-2 md:gap-8 lg:flex lg:justify-between">
          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={ReactLogo} alt="logo react" />
            <p className="font-openSans text-lg ">React</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={TSLogo} alt="logo typescript" />
            <p className="font-openSans text-lg ">Typescript</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={JSLogo} alt="logo javascript" />
            <p className="font-openSans text-lg ">Javascript</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              className="w-24 h-24"
              src={TaliwindLogo}
              alt="logo tailwind"
            />
            <p className="font-openSans text-lg ">Tailwind CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={GitLogo} alt="logo tailwind" />
            <p className="font-openSans text-lg ">Git</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={GitHubLogo} alt="logo tailwind" />
            <p className="font-roboto text-lg ">GitHub</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={SassLogo} alt="logo tailwind" />
            <p className="font-roboto text-lg ">Sass</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image className="w-24 h-24" src={StyledLogo} alt="logo tailwind" />
            <p className="font-roboto text-lg ">Styled Components</p>
          </div>
        </div>
      </div>
    </section>
  );
}
