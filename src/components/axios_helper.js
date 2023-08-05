import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "applications/json";

export const request = (method, url, data) => {
  return axios({
    method: method,
    url: url,
    data: data,
  });
};
