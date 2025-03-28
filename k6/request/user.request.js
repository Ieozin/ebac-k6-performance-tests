import http from "k6/http";
import utils from "../utils/utils";
import { check } from "k6";

export default class User {
  list(token) {
    let response = http.get(`${utils.getBaseUrl()}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    check(response, {
      "Listagem deve retornar 200": (response) =>
        response && response.status === 200,
    });
  }
}
