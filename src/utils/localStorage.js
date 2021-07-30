export function checkToken() {
  if (localStorage.getItem("token") === null) {
    return null;
  } else {
    return localStorage.getItem("token");
  }
}
