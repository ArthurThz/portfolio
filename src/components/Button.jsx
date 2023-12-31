export default function Button({ children, href }) {
  return (
    <div className="w-24 py-4  ">
      <a
        target="_blank"
        href={href}
        className="
         h-8
         w-24
       text-ebony-50
         ease-in
         duration-200
         cursor-pointer
         rounded-full
         flex
         relative
         items-center
         before:content-['']
         before:border-ebony-500
         before:border-2
         before:shadow-sm
         before:shadow-ebony-900
         before:w-[6.5rem]
         before:h-[2.5rem]
         before:absolute
         before:rounded-full
         before:-ml-1
       bg-ebony-800
         md:before:opacity-0
         md:h-9
         md:w-9
         md:bg-opacity-60
       md:text-ebony-950
         md:hover:w-24
       md:hover:text-ebony-50
         md:hover:before:opacity-60
         md:before:h-[2.75rem]
         
         md:before:duration-200
         md:before:ease-in
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
