import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import onMobile from "../helper/onMobile";
import MobileView from "./MobileView";
import {
  displayRazorpay,
  getPremiumStatus,
  loadRazorpay,
  showLeaderboard,
} from "../helper/premium";

function Header({ setLeaderboard }) {
  const loc = useLocation();
  const pageName = loc.pathname.replace("/", "");

  const [clicked, setClicked] = useState(false);
  const [premiumStatus, setPremiumStatus] = useState("Upgrade");

  useEffect(() => {
    getPremiumStatus(setPremiumStatus);
    loadRazorpay();
  }, []);

  return (
    <>
      {onMobile() ? (
        <div className="z-20 sticky top-0">
          <MobileView
            premiumStatus={premiumStatus}
            clicked={clicked}
            setClicked={setClicked}
            setPremiumStatus={setPremiumStatus}
            setLeaderboard={setLeaderboard}
          />
        </div>
      ) : (
        <>
          <div className="hidden lg:flex justify-between items-center bg-green-600 text-white px-9 text-lg sticky top-0 z-20">
            <div className="flex items-center space-x-9">
              <div className="text-xl font-bold tracking-wide">Xpenser</div>
              <div className="flex space-x-9 py-4">
                <Link
                  to={"/"}
                  className={`hover:text-black ${
                    pageName === "" ? "text-black" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to={"/daily"}
                  className={`hover:text-black ${
                    pageName === "daily" ? "text-black" : ""
                  }`}
                >
                  Daily
                </Link>
                <Link
                  to={"/weekly"}
                  className={`hover:text-black ${
                    pageName === "weekly" ? "text-black" : ""
                  }`}
                >
                  Weekly
                </Link>
                <Link
                  to={"/monthly"}
                  className={`hover:text-black ${
                    pageName === "monthly" ? "text-black" : ""
                  }`}
                >
                  Monthly
                </Link>
                {/* <Link
                  to={"/total"}
                  className={`hover:text-black ${
                    pageName === "total" ? "text-black" : ""
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
                  if (premiumStatus === "Upgrade")
                    displayRazorpay(setPremiumStatus);
                  else {
                    showLeaderboard(setLeaderboard);
                  }
                }}
              >
                {premiumStatus}
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
          <div className="lg:hidden px-4 bg-green-600  z-20 sticky top-0">
            <MobileView
              premiumStatus={premiumStatus}
              clicked={clicked}
              setClicked={setClicked}
              setPremiumStatus={setPremiumStatus}
            />
          </div>
        </>
      )}
    </>
  );
}

Header.propTypes = {
  setLeaderboard: PropTypes.func,
};

export default Header;
