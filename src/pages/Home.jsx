import Header from "../components/Header";

function Home() {
  return (
    <>
      <div className="w-full h-[100dvh] flex flex-col text-xl">
        <Header />
        <div className="grow flex justify-center items-center bg-[#242424] text-[whitesmoke]">
          Home
        </div>
      </div>
    </>
  );
}

export default Home;
