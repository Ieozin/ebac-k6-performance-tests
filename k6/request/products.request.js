import http from "k6/http";
import Utils from "../utils/utils";

export default class Products {
  list(token) {
    return http.get(`${Utils.getBaseUrl()}/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}