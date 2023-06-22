import { BsFillMoonStarsFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center p-5 bg-ebony-900">
      <h1 className=" font-outfit text-xl text-ebony-50">Arthur Theodoro</h1>
      <ul className="flex items-center">
        <li>
          <a
            href="#"
            className=" text-ebony-50 border-2 border-ebony-400 font-roboto px-4 
            py-2 rounded-md ml-5
            hover:border-2
            ease-in-out          
            bg-ebony-900
            duration-100
            hover:border-ebony-400
            hover:bg-ebony-800
            hover:opacity-80

           
           
            "
          >
            Curriculo
          </a>
        </li>
      </ul>
    </nav>
  );
}
