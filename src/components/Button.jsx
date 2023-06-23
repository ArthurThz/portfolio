export default function Button({ children }) {
  return (
    <div className="w-24 py-4 ">
      <a
        target="_blank"
        href="https://github.com/arthurthz"
        className="ease-in
         duration-200
         cursor-pointer
         w-24
         h-10
         md:h-10
         md:w-10
         md:bg-opacity-60
         text-ebony-50
         rounded-full
       bg-ebony-900
       md:hover:text-ebony-50
       md:text-ebony-950
         md:relative
         flex
         items-center
         md:hover:w-24
         mr-5
         md:hover:bg-opacity-100                            
          "
      >
        <span
          className="z-10
           px-4 
          flex
          items-center          
          tracking-wider ease-in-out duration-150 text-md font-roboto
          h-full
          w-full
          justify-center
          md:justify-start
          md:hover:ml-1 
          md:absolute      
        "
        >
          {children}
        </span>
      </a>
    </div>
  );
}
