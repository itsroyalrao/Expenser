import axios from "axios";

function logoutUser(email) {
  try {
    localStorage.clear();
    axios.get(
      `http://localhost:3000/auth/logout?email=${email}`
      // `https://expenser-backend-production.up.railway.app/auth/logout?email=${email}`
    );
    window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}

export default logoutUser;
