import { useEffect, useState } from "react";

import Header from "../components/Header";
import Popup from "../components/Popup";
import onMobile from "../helper/onMobile";
import { findUser } from "../helper/auth";
import HomeExpenses from "../components/HomeExpenses";

function Home() {
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [total, setTotal] = useState(null);
  const [leaderboard, setLeaderboard] = useState(null);

  useEffect(() => {
    findUser(setUser);
  }, []);

  return (
    <>
      {user && (
        <>
          <div className="w-full h-fit min-h-[100svh] flex flex-col text-xl bg-[#242424]">
            <Header user={user} setLeaderboard={setLeaderboard} />
            <HomeExpenses leaderboard={leaderboard} />
            <div
              className={
                onMobile()
                  ? "fas fa-plus bg-blue-600 w-fit px-4 py-[15px] text-white rounded-full fixed bottom-4 right-4"
                  : "fas fa-plus bg-blue-600 w-fit px-4 py-[15px] text-white rounded-full cursor-pointer hover:bg-blue-700 fixed bottom-4 right-4"
              }
              onClick={() => setShowPopup(!showPopup)}
            />
          </div>
          {showPopup && (
            <>
              <div className="w-[100dvw] h-full fixed top-0 flex justify-center items-center z-20 bg-black opacity-75 overflow-auto" />
              <Popup
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                email={user.email}
                setTotal={setTotal}
              />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Home;
