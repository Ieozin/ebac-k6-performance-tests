import http from "k6/http";
import utils from "../utils/utils";
import { check } from "k6";

export default class Login {
  #token;

  access(user, pass) {
    let response = http.post(
      `${utils.getBaseUrl()}/login`,
      JSON.stringify({
        username: user,
        password: pass,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    this.#token = response.json("accessToken");

    check(response, {
      "Status deve ser 201": (r) => r.status === 201,
    });
  }

  getToken() {
    return this.#token;
  }
}
