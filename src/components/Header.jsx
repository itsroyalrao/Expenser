import { useState } from "react";

function Header() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="w-full flex items-center justify-between bg-[#202020] text-[whitesmoke] px-4 lg:px-12">
      <div className="text-3xl py-3">Xpenser</div>
      <div className={clicked? "fixed top-16 right-0 flex flex-col items-center space-y-2 bg-[#242424] p-3 rounded-lg md:space-x-0 md:space-y-2 md:flex-row md:bg-inherit md:static":"hidden md:flex md:items-center md:space-x-2"}>
        <div className="w-full px-4 py-2 rounded-lg flex justify-center active:bg-[#393939] active:text-gray-400 md:w-fit sm:hover:bg-[#393939] sm:active:bg-[#323232] sm:hover:text-gray-400 sm:cursor-pointer">
          Login
        </div>
        <div className="bg-blue-600 active:bg-blue-700 px-4 py-2 rounded-lg sm:cursor-pointer">
          Get Started
        </div>
      </div>
      <div className="flex flex-col items-center md:hidden">
        <i
          className={
            clicked ? "fas fa-times scale-125" : "fas fa-bars scale-125"
          }
          onClick={() => setClicked(!clicked)}
        ></i>
      </div>
    </div>
  );
}

export default Header;
