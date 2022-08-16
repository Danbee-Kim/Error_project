import Cookies from "universal-cookie";

const cookies = new Cookies();

export function setRefreshTokenToCookie(token) {
  cookies.set("Authorization", token, {
    path: "/login",
    expires: new Date(Date.now() + 2592000),
  });
}

export function getRefreshToken() {
  cookies.get("Authorization");
  console.log(cookies.get("Authorization"));
}

export function logout() {
  cookies.remove("Authorization");
}

export default Cookies;
