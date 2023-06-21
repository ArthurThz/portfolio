import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Lottie from "lottie-web";

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
    <div className="py-10 px-4 w-full flex flex-col items-center justify-center bg-slate-100 ">
      <h2 className="text-4xl font-bold tracking-wider flex text-blue-800">
        React Developer
      </h2>

      <p className="flex flex-col w-full text-center font-roboto text-base mt-2 py-2">
        Sou desenvolvedor front-end e apaixonado pelo ecossistema Javascript.
      </p>

      <div className="flex w-full py-5 justify-center gap-6 text-3xl text-blue-800">
        <AiFillGithub className="cursor-pointer" />
        <AiFillLinkedin className="cursor-pointer" />
      </div>
      {/* Animation */}
      <div
        className="w-56 h-56 bg-gradient-to-b from-blue-600 rounded-full"
        ref={animationContainer}
      />
    </div>
  );
}
