import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Header({ user }) {
  const onMobile = /Mobi|Android/i.test(navigator.userAgent);

  const [clicked, setClicked] = useState(false);

  return (
    <div className="w-full flex items-center justify-between bg-[#202020] text-[whitesmoke] px-4 md:px-12">
      <div className="text-3xl py-3">Xpenser</div>
      {onMobile ? (
        <>
          <div className="flex flex-col items-center pr-2">
            <i
              className={
                clicked ? "fas fa-times scale-125" : "fas fa-bars scale-125"
              }
              onClick={() => setClicked(!clicked)}
            ></i>
            {clicked && (
              <div className="flex flex-col items-center space-y-2 fixed top-16 right-0 bg-[#242424] p-3 rounded-md">
                <div className="w-full flex justify-center capitalize bg-[#393939] p-2 rounded">
                  {user.username}
                </div>
                <Link
                  className="w-full text-[whitesmoke] bg-red-600 px-3 py-2 rounded active:bg-red-700"
                  onClick={() => {
                    document.cookie = `uid=; expires=Thu, 01 Jan 2000 00:00:00 UTC; path=/;`;
                  }}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:flex md:items-center md:space-x-3">
            <div className="capitalize bg-[#393939] p-2 rounded">
              {user.username}
            </div>
            <Link
              className="text-[whitesmoke] bg-red-600 px-3 py-2 rounded active:bg-red-700"
              onClick={() => {
                document.cookie = `uid=; expires=Thu, 01 Jan 2000 00:00:00 UTC; path=/;`;
              }}
            >
              Logout
            </Link>
          </div>
          <div className="flex flex-col items-center md:hidden pr-2">
            <i
              className={
                clicked
                  ? "fas fa-times scale-125 cursor-pointer"
                  : "fas fa-bars scale-125 cursor-pointer"
              }
              onClick={() => setClicked(!clicked)}
            ></i>
            {clicked && (
              <div className="flex flex-col items-center space-y-2 fixed top-16 right-0 bg-[#242424] p-3 rounded-md">
                <div className="w-full flex justify-center capitalize bg-[#393939] p-2 rounded">
                  {user.username}
                </div>
                <Link
                  to={"/login"}
                  className="w-full text-[whitesmoke] bg-red-600 px-3 py-2 rounded  active:bg-red-700"
                  onClick={() => {
                    document.cookie = `uid=; expires=Thu, 01 Jan 2000 00:00:00 UTC; path=/;`;
                  }}
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.object,
};

export default Header;
