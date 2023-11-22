import { useEffect, useState } from "react";

import Header from "../components/Header";
import findUser from "../helper/findUser";
import Card from "../components/Card";
import Popup from "../components/Popup";
import onMobile from "../helper/onMobile";

function Home() {
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    findUser(setUser);
  }, []);

  return (
    <>
      {user && (
        <>
          <div className="w-full h-fit min-h-[100dvh] flex flex-col text-xl bg-gray-300">
            <Header user={user} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
              <Card title={"today's expense"} />
              <Card title={"total expense"} />
              <Card title={"average daily expense"} />
              <Card title={"average weekly expense"} />
              <Card title={"average monthly expense"} />
              <Card title={"average yearly expense"} />
            </div>
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
              <div className="w-[100dvw] h-full fixed top-0 flex justify-center items-center z-10 bg-slate-600 opacity-75" />
              <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default Home;
