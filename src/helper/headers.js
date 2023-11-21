import Cookies from "js-cookie";

export default function headers() {
  const headers = {
    Authorization: Cookies.get("uid"),
  };
  return headers;
}
