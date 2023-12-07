import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Header from "../components/Header";
import findUser from "../helper/findUser";
import Card from "../components/Card";
import Popup from "../components/Popup";
import onMobile from "../helper/onMobile";

function Home() {
  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    findUser(setUser);
  }, []);

  useEffect(() => {
    if (showPopup) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showPopup]);

  return (
    <>
      {user && (
        <>
          <div className="w-full h-fit min-h-[100svh] flex flex-col text-xl">
            <Header user={user} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
              <Card email={user.email} title={"today's expense"} />
              <Card
                email={user.email}
                title={"total expense"}
                total={total}
                setTotal={setTotal}
              />
              <Card email={user.email} title={"average daily expense"} />
              <Card email={user.email} title={"average weekly expense"} />
              <Card email={user.email} title={"average monthly expense"} />
              <Card email={user.email} title={"average yearly expense"} />
            </div>
            <div
              className={
                onMobile()
                  ? "fas fa-plus bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 w-fit px-4 py-[15px] text-white rounded-full fixed bottom-4 right-4"
                  : "fas fa-plus bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 w-fit px-4 py-[15px] text-white rounded-full cursor-pointer hover:bg-blue-700 fixed bottom-4 right-4"
              }
              onClick={() => setShowPopup(!showPopup)}
            />
          </div>
          {showPopup && (
            <>
              <div className="w-[100dvw] h-full fixed top-0 flex justify-center items-center z-20 bg-slate-600 opacity-75 overflow-auto" />
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

Home.propTypes = {
  total: PropTypes.number,
  setTotal: PropTypes.func,
};

export default Home;
