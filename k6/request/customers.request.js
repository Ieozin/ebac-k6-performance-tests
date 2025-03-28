import utils from "../utils/utils"
import http from "k6/http";

export default class Customers {
  list(token) {
    return http.get(`${utils.getBaseUrl()}/customers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}