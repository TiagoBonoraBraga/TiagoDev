const Footer = () => {
  return (
    <footer class="border-t border-blue-300 w-full  overflow-auto ">
      <div
        class="
          container
          flex flex-col flex-wrap
          px-4
          
          overflow-auto
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
          
        "
      >
        <div class="flex-shrink-0 w-64 mx-auto text-center mt-10 text-blue-300 md:mx-0 md:text-left ">
          <a
            href="/"
            class="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-blue-700
              md:justify-start
            "
          >
            Tiago Dev
          </a>
          <p class="mt-5 mb-2 text-sm text-justify text-black-500 ss:flex ss:justify-center s:flex s:justify-start md:flex md:justify-start ">
            O{" "}
            <b style={{ color: "#3155c0" }} className="ml-1 mr-1">
              {" "}
              FUTURO{" "}
            </b>{" "}
            está em suas{" "}
            <b style={{ color: "#3155c0" }} className="ml-1 mr-1">
              {" "}
              MÃOS{" "}
            </b>
            ....
          </p>
         
        </div>
       
        <div class="justify-between w-full  text-center lg:flex flex flex-col items-end">
          <div class="w-full px-4 lg:w-1/3 md:w-1/2 ">
            <h2 class="mt-5 mb-2 font-bold tracking-widest text-blue-300 uppercase">
              Contato
            </h2>
            <ul class="mb-2 space-y-2 text-sm list-none">
              <li className="">
               
                <a class="text-black-500  hover:text-[110%]">
                  ogait.desenvolvedor.jr@gmail.com
                </a>
              </li>
              <li>
                <a class="text-blue-300 hover:text-[110%]">
                   41 - 98808-2384
                </a>
              </li>
            </ul>
            <div class="flex justify-center items-center lg:mt-2   ">
            <a
              href="https://www.linkedin.com/in/tiagocode/"
              target="_blank"
              class=" cursor-pointer"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-10 h-10 text-blue-500"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            <a
              href="https://github.com/TiagoBonoraBraga"
              target="_blank"
              class="ml-5 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="42"
                height="42"
                viewBox="0 0 24 24"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
            </a>
          </div>
          </div>   
                 
        </div>
        
      </div>
      <div class="flex justify-center ">
        <p class="text-xs text-blue-300 mb-1 ss:mb-2 ss:mt-5">
          All rights reserved by TiagoDev ©{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
