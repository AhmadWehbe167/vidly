import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndpoint = "/auth";
const tokenKey = "token";
http.setJWT(getJWT());

export async function login(user) {
  const {data:jwt} = await http.post(apiEndpoint, { email: user.email, password: user.password });
  localStorage.setItem(tokenKey, jwt);
}

export async function loginWithJwt(jwt){
  localStorage.setItem(tokenKey, jwt);
}

export async function logout(){
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser(){
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJWT(){
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  loginWithJwt, 
  logout,
  getCurrentUser, 
  getJWT
}