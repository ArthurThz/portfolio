import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import Lottie from "lottie-web";
import Image from "next/image";

import reactLogo from "/public/react-icon.svg";
import { useEffect, createRef } from "react";

export default function Intro() {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/developer.json",
    });

    return () => anim.destroy();
  }, []);
  return (
    <div className="py-10 px-1 w-full flex flex-col items-center justify-center  shadow-ebony-900 bg-ebony-50">
      <h2 className="text-4xl font-bold -tracking-tight flex text-astronaut-950 xs:text-3xl md:text-5xl lg:text-6xl  items-center justify-center">
        React Developer{" "}
        <FaReact className="md:h-12 md:w-12 lg:h-14 lg:w-14 ml-1" />
      </h2>

      <p className="flex flex-col w-full text-center font-roboto text-xl mt-2 py-2 text-ebony-800 md:text-xl lg:text-2xl">
        Sou desenvolvedor front-end e apaixonado pelo ecossistema Javascript.
      </p>

      <p className="flex flex-col w-full text-center font-roboto text-xl mt-2 py-2 text-ebony-800 md:text-xl lg:text-2xl">
        Tenho 1 ano de experiência como freelancer.
      </p>

      <div className="flex w-full py-5 justify-center gap-6 text-3xl text-ebony-800">
        <a
          href="https://github.com/arthurthz"
          target="_blank"
          className=" ease-in-out duration-100 hover:-translate-y-2"
        >
          <AiFillGithub className="cursor-pointer md:h-10 md:w-10" />
        </a>
        <a
          href="https://linkedin.com/in/arthurthz"
          target="_blank"
          className=" ease-in-out duration-100 hover:-translate-y-2"
        >
          <AiFillLinkedin className="cursor-pointer md:h-10 md:w-10" />
        </a>
      </div>
      {/* Animation */}
      <div
        className="w-56 h-56 bg-gradient-to-b from-ebony-800 to-ebony-100 rounded-full md:h-64 md:w-64"
        ref={animationContainer}
      />
    </div>
  );
}
