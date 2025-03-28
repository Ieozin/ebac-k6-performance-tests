import http from "k6/http";
import { group, sleep } from "k6";
import data from "../data/usuarios.json";
import Login from "../request/login.request";
import User from "../request/user.request";

export const options = {
  stages: [
    { duration: "10s", target: 10 },
    { duration: "5s", target: 50 },
    { duration: "10s", target: 10 },
    { duration: "5s", target: 0 },
  ],
};

export default function () {
  let login = new Login();
  let user = new User();

  group("Login e get token", () => {
    login.access(data.usuario_ok.user, data.usuario_ok.pass);
  });

  group("List users", () => {
    user.list(login.getToken());
  });
}
