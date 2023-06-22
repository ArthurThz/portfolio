export default function Button({ children }) {
  return (
    <div className="w-20">
      <a
        target="_blank"
        href="https://github.com/arthurthz"
        className="ease-in duration-100 cursor-pointer h-10 w-10 rounded-full bg-gray-500 relative flex items-center hover:w-20 mr-5"
      >
        <span className="z-10 px-3 absolute text-md font-roboto ">
          {children}
        </span>
      </a>
    </div>
  );
}
