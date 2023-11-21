import axios from "axios";
import headers from "./headers";

async function findUser(setUser) {
  try {
    const response = await axios.get(
      // `http://localhost:3000/home`,
      `https://expenser-backend-production.up.railway.app/home`,
      {
        headers: headers(),
      }
    );
    if (response.data.success) setUser(response.data.user);
    else window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}

export default findUser;
