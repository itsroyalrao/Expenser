import axios from "axios";

async function findUser(setUser) {
  try {
    const user = localStorage.getItem("user");

    if (user) {
      const response = await axios.get(
        `http://localhost:3000/auth?user=${user}`
      );
      setUser(response.data.user);
    } else {
      window.location.href = "/login";
    }
  } catch (e) {
    console.log(e);
  }
}

export default findUser;
