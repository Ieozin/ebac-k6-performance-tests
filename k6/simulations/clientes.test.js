import { group } from "k6";
import data from "../data/usuarios.json";
import Login from "../request/login.request";
import Customers from "../request/customers.request";

export const options = {
  stages: [
    { duration: "10s", target: 10 },
    { duration: "5s", target: 50 },
    { duration: "10s", target: 10 },
    { duration: "5s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["p(99) < 1000"],
  },
};

export default function () {
  const login = new Login();
  const customers = new Customers();

  group("Login e listar clientes", () => {
    login.access(data.usuario_ok.user, data.usuario_ok.pass);
    const token = login.getToken();
    customers.list(token);
  });
}
