import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TotalExpense from "./pages/TotalExpense";

function App() {
  axios.defaults.withCredentials = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/totalExpensePage" element={<TotalExpense />} />
      </Routes>
    </Router>
  );
}

export default App;
