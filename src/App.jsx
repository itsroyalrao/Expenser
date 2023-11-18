// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="w-full h-[100dvh] flex justify-center items-center bg-[#242424] text-[whitesmoke] ">
        Expenser
        <Home />
      </div>
    </>
  );
}

export default App;
