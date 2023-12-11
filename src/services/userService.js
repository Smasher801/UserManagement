import { httpAxios } from "@/helper/httpHelper";
// import { response } from "express";
// import { resolve } from "styled-jsx/macro";

export async function SignUpUser(userData) {
  const data = await httpAxios
    .post("/api/users", userData)
    .then((response) => response.data);
  return data;
}

export async function LoginUser(loginData) {
  const res = await httpAxios
    .post("/api/login", loginData)
    .then((response) => response.data);
  return res;
}

export async function currentUser() {
  const res = await httpAxios
    .get("/api/current")
    .then((response) => response.data);
  return res;
}

export async function logoutFun() {
  const res = await httpAxios
    .post("/api/logout")
    .then((response) => response.data);
  return res;
}
