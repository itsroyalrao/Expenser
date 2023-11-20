import { useState } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ user }) {
  const [clicked, setClicked] = useState(false);

  const onMobile = /Mobi|Android/i.test(navigator.userAgent);
  console.log("header-user", user);

  const logout = async () => {
    window.open(
      `https://expenser-backend-production.up.railway.app/auth/logout?userID=${user}`,
      "_self"
    );
  };

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
                <div>{user}</div>
                <div
                  className="w-full text-[whitesmoke] bg-red-600 px-3 py-2 rounded-lg active:bg-red-700"
                  onClick={logout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="hidden md:flex md:items-center md:space-x-3">
            <div>{user}</div>
            <div
              className="text-[whitesmoke] bg-red-600 px-3 py-2 rounded-lg cursor-pointer active:bg-red-700"
              onClick={logout}
            >
              Logout
            </div>
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
                <div>{user}</div>
                <div
                  className="w-full text-[whitesmoke] bg-red-600 px-3 py-2 rounded-lg cursor-pointer active:bg-red-700"
                  onClick={logout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.string,
};

export default Header;
