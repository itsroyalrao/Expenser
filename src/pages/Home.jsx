import { useLocation } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  const location = useLocation()
  console.log(location);
  
  return (
    <>
      <div className="w-full h-[100dvh] flex flex-col text-xl">
        <Header />
        <div className="grow flex justify-center items-center bg-[#393939] text-[whitesmoke]">
          Home
        </div>
      </div>
    </>
  );
}

export default Home;
