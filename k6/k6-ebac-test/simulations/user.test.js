import http from "k6/http";
import { group, sleep } from "k6";
import Login from "../request/login.request";
import data from "../data/usuarios.json";

export const options = {
  vus: 10,
  duration: "30s",
};

export default function () {
  let login = new Login();

  group("Login e get token", () => {
    login.access(data.usario_OK.user, data.usario_OK.pass);
  });

  group("List users", () => {});
}
