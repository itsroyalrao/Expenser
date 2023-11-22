import { useEffect, useState } from "react";

import Header from "../components/Header";
import findUser from "../helper/findUser";
import Card from "../components/Card";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    findUser(setUser);
  }, []);

  return (
    <>
      {user && (
        <div className="w-full h-fit min-h-[100dvh] flex flex-col text-xl bg-gray-300">
          <Header user={user} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
