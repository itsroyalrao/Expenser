import { useEffect, useState } from "react";
import Header from "../components/Header";
import findUser from "../helper/findUser";

function Home() {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    findUser(setUser);
  }, []);

  return (
    <>
      {user && (
        <div className="w-full h-[100dvh] flex flex-col text-xl">
          <Header user={user} />
          <div className="grow flex justify-center items-center bg-[#393939] text-[whitesmoke]">
            Home
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
