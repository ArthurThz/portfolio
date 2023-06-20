import { BsFillMoonStarsFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <nav className="w-screen flex justify-between items-center p-5">
      <h1 className=" font-outfit text-xl">Arthur Theodoro</h1>
      <ul className="flex items-center">
        <li className="cursor-pointer">
          <BsFillMoonStarsFill />
        </li>
        <li>
          <a
            href="#"
            className=" text-white px-4 py-2 rounded-md ml-5 bg-gradient-to-r from-cyan-500 to-teal-500"
          >
            Curriculo
          </a>
        </li>
      </ul>
    </nav>
  );
}
