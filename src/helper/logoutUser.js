import axios from "axios";
import { url } from "./onMobile";

function logoutUser(email) {
  try {
    localStorage.clear();
    axios.get(`${url()}/auth/logout?email=${email}`);
    window.location.href = "/login";
  } catch (e) {
    console.log(e);
  }
}

export default logoutUser;
