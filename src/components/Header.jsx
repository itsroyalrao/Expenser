import { useState } from "react";

function Header() {
  const [clicked, setClicked] = useState(false);

  const onMobile = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <div className="w-full flex items-center justify-between bg-[#202020] text-[whitesmoke] px-4 md:px-12">
      <div className="text-3xl py-3">Xpenser</div>
      <div className="hidden md:flex md:items-center md:space-x-2">
        <div className="w-full px-4 py-2 rounded-md flex justify-center active:bg-[#393939] active:text-gray-400 md:w-fit md:hover:bg-[#393939] md:active:bg-[#323232] md:hover:text-gray-400 md:cursor-pointer">
          Login
        </div>
        <div className="bg-blue-600 active:bg-blue-700 px-4 py-2 rounded-lg md:cursor-pointer">
          Get Started
        </div>
      </div>
      <div className="flex flex-col items-center md:hidden pr-2">
        <i
          className={
            onMobile
              ? clicked
                ? "fas fa-times scale-125"
                : "fas fa-bars scale-125"
              : clicked
              ? "fas fa-times scale-125 cursor-pointer"
              : "fas fa-bars scale-125 cursor-pointer"
          }
          onClick={() => setClicked(!clicked)}
        ></i>
        {clicked && (
          <div className="flex flex-col items-center space-y-2 fixed top-16 right-0 bg-[#242424] p-3 rounded-md">
            <div
              className={
                onMobile
                  ? "w-full px-4 py-2 rounded-md flex justify-center active:bg-[#393939] active:text-gray-400"
                  : "w-full px-4 py-2 rounded-md flex justify-center hover:bg-[#393939] active:bg-[#323232] active:text-gray-400 cursor-pointer"
              }
            >
              Login
            </div>
            <div
              className={
                onMobile
                  ? "flex justify-center bg-blue-600 active:bg-blue-700 px-4 py-2 rounded-md md:cursor-pointer"
                  : "flex justify-center bg-blue-600 active:bg-blue-700 px-4 py-2 rounded-md cursor-pointer"
              }
            >
              Get Started
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
