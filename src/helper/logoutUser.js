import axios from "axios";

async function logoutUser(email) {
  try {
    localStorage.clear();
    await axios.post(
      `http://localhost:3000/auth/logout`,
      // `https://expenser-backend-production.up.railway.app/auth/logout`,
      { email }
    );
    window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}

export default logoutUser;
