import { useState } from "react";

function Header() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="w-full flex items-center justify-between bg-[#202020] text-[whitesmoke] px-4 lg:px-12">
      <div className="text-3xl py-3">Xpenser</div>
      <div className={clicked? "fixed top-16 right-0 flex flex-col items-center space-y-2 bg-[#242424] p-3 rounded-lg lg:space-x-0 lg:space-y-2 lg:flex-row lg:bg-inherit lg:static":"hidden lg:flex lg:items-center lg:space-x-2"}>
        <div className="w-full px-4 py-2 rounded-lg flex justify-center active:bg-[#393939] active:text-gray-400 lg:w-fit lg:hover:bg-[#393939] lg:active:bg-[#323232] lg:hover:text-gray-400 lg:cursor-pointer">
          Login
        </div>
        <div className="bg-blue-600 active:bg-blue-700 px-4 py-2 rounded-lg lg:cursor-pointer">
          Get Started
        </div>
      </div>
      <div className="flex flex-col items-center lg:hidden pr-2">
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
