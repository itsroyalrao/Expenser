import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import cors from "cors";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

cors();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
