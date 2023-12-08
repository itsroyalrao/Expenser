import axios from "axios";

async function addUser(username, email, password, confirmPassword, setMessage) {
  try {
    if (!username) setMessage("Please provide Username");
    else if (!email) setMessage("Please provide Email address");
    else if (!password) setMessage("Please provide Password");
    else if (password !== confirmPassword) setMessage("Password doesn't match");
    else {
      const response = await axios.post(
        // `http://localhost:3000/auth/signup`,
        `https://expenser-backend-production.up.railway.app/auth/signup`,
        {
          username,
          email,
          password,
        }
      );
      console.log(response);
      if (response.data.success) {
        localStorage.setItem("user", email);
        window.location.href = "/";
      } else setMessage(response.data.msg);
    }
  } catch (e) {
    console.log(e);
  }
}

async function getUser(email, password, setMessage) {
  try {
    if (!email) setMessage("Please provide Email address");
    else if (!password) setMessage("Please provide Password");
    else {
      const response = await axios.post(
        // `http://localhost:3000/auth/login`,
        `https://expenser-backend-production.up.railway.app/auth/login`,
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        localStorage.setItem("user", email);
        window.location.href = "/";
      } else setMessage(response.data.msg);
    }
  } catch (e) {
    console.log(e);
  }
}

async function findUser(setUser) {
  try {
    const user = localStorage.getItem("user");

    if (user) {
      const response = await axios.get(
        // `http://localhost:3000/home?user=${user}`
        `https://expenser-backend-production.up.railway.app/home?user=${user}`
      );
      if (response.data.success) {
        if (response.data.user.loggedIn) {
          setUser(response.data.user);
        } else {
          window.location.href = "/login";
        }
      } else {
        window.location.href = "/login";
      }
    } else {
      window.location.href = "/login";
    }
  } catch (e) {
    console.log(e);
  }
}

const resetPass = async (email, setMessage) => {
  try {
    if (email) {
      const response = await axios.post(
        // "http://localhost:3000/auth/resetPassword",
        "https://expenser-backend-production.up.railway.app/auth/resetPassword",
        { email }
      );

      if (response.data.success) setMessage(response.data.msg);
      else setMessage(response.data.msg);

      email = "";
    } else {
      setMessage("Please provide email");
    }
  } catch (e) {
    console.log(e.message);
  }
};

const changePass = async (
  email,
  newPassword,
  confirmNewPassword,
  setMessage
) => {
  try {
    if (newPassword === confirmNewPassword && newPassword !== "") {
      const response = await axios.post(
        // "http://localhost:3000/auth/changePassword",
        "https://expenser-backend-production.up.railway.app/auth/changePassword",
        {
          email,
          newPassword,
        }
      );
      if (response.data.success) {
        setMessage(response.data.msg);
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    } else if (newPassword === "") setMessage("Please provide password!");
    else setMessage("Password do not match!");
  } catch (e) {
    console.log(e.message);
  }
};

export { addUser, getUser, findUser, resetPass, changePass };
