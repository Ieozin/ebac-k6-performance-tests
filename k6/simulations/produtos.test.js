import { group } from "k6";
import data from "../data/usuarios.json";
import Login from "../request/login.request";
import Products from "../request/products.request";

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
  const products = new Products();

  group("Login e listar produtos", () => {
    login.access(data.usuario_ok.user, data.usuario_ok.pass);
    const token = login.getToken(); // <--- Use getToken() após o login
    products.list(token);
  });
}
