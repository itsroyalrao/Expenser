import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import onMobile from "../helper/onMobile";
import MobileView from "./MobileView";
import { displayRazorpay, loadRazorpay } from "../helper/displayRazorpay";

function Header() {
  const loc = useLocation();
  const pageName = loc.pathname.replace("/", "");

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    loadRazorpay();
  }, []);

  return (
    <>
      {onMobile() ? (
        <div className="z-20 sticky top-0">
          <MobileView clicked={clicked} setClicked={setClicked} />
        </div>
      ) : (
        <>
          <div className="hidden lg:flex justify-between items-center bg-[rgb(0,94,72)] px-9 text-lg sticky top-0 z-20">
            <div className="flex items-center space-x-9">
              <div className="text-xl font-bold tracking-wide">Xpenser</div>
              <div className="flex space-x-9 py-4">
                <Link
                  to={"/"}
                  className={`hover:text-yellow-400 ${
                    pageName === "" ? "text-yellow-400" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to={"/daily"}
                  className={`hover:text-yellow-400 ${
                    pageName === "daily" ? "text-yellow-400" : ""
                  }`}
                >
                  Daily
                </Link>
                <Link
                  to={"/weekly"}
                  className={`hover:text-yellow-400 ${
                    pageName === "weekly" ? "text-yellow-400" : ""
                  }`}
                >
                  Weekly
                </Link>
                <Link
                  to={"/monthly"}
                  className={`hover:text-yellow-400 ${
                    pageName === "monthly" ? "text-yellow-400" : ""
                  }`}
                >
                  Monthly
                </Link>
                {/* <Link
                  to={"/total"}
                  className={`hover:text-yellow-400 ${
                    pageName === "total" ? "text-yellow-400" : ""
                  }`}
                >
                  Total
                </Link> */}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="bg-blue-500 px-4 py-2 cursor-pointer rounded"
                onClick={() => {
                  displayRazorpay();
                }}
              >
                Upgrade
              </div>
              <Link
                to={"/login"}
                className="bg-red-500 px-4 py-2 rounded"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Logout
              </Link>
            </div>
          </div>
          <div className="lg:hidden px-4 bg-[rgb(0,94,72)]  z-20 sticky top-0">
            <MobileView clicked={clicked} setClicked={setClicked} />
          </div>
        </>
      )}
    </>
  );
}

export default Header;
