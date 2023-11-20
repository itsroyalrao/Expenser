import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function Home() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const userParam = new URLSearchParams(search).get("user");
  const user = JSON.parse(decodeURIComponent(userParam));

  useEffect(() => {
    if (user) {
      console.log(user);
    } else navigate("/login");
  }, [user, navigate]);

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
