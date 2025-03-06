import jwtDecode from "https://cdn.jsdelivr.net/npm/jwt-decode@3.1.2/+esm";

export const decodeToken = () => {
  const token = localStorage.getItem('userToken')
  return token ? jwtDecode(token) : {}
}