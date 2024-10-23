import axios from "axios";
import { BASE_URL } from "../utils/constant";

export const sendRequest = async (method, payload, url, headers) => {
  const options = {
    method,
    headers: {
      ...headers,
      "Content-Type": headers["Content-Type"]
        ? headers["Content-Type"]
        : "application/json",
    },
    data: payload ? new URLSearchParams({ ...payload }) : null,
    url: `${BASE_URL}/${url}`,
  };

  try {
    const data = await axios(options);
    if (data) return data;
  } catch (error) {
    return error.response.data;
  }
};
