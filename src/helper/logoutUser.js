// import axios from "axios";

async function logoutUser(email) {
  try {
    localStorage.clear();
    //   await axios.get(
    //     `http://localhost:3000/auth?user=${user}`
    //     `https://expenser-backend-production.up.railway.app/auth?user=${user}`
    //   );
    window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}

export default logoutUser;
