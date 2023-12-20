function onMobile() {
  const onMobile = /Mobi|Android/i.test(navigator.userAgent);
  return onMobile;
}

// const url = () => "http://localhost:3000";
const url = () => "https://expenser-backend-production.up.railway.app";

export { onMobile, url };
