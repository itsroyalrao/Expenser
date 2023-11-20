import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";

function Home() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const userParam = new URLSearchParams(search).get("user");
  const user = JSON.parse(decodeURIComponent(userParam));

  useEffect(() => {
    if (user) {
      console.log("user", user);
    } else navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.post(
        "https://expenser-backend-production.up.railway.app/auth/session",
        { userID: user.sub }
      );
      console.log(response);
    };
    getUser();
  });

  return (
    <>
      {user && (
        <div className="w-full h-[100dvh] flex flex-col text-xl">
          <Header user={user.name} />
          <div className="grow flex justify-center items-center bg-[#393939] text-[whitesmoke]">
            Home
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
