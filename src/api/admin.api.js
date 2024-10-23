import { BASE_URL } from "../utils/constant";
import { sendRequest } from "./base";
import axios from "axios";
export const adminLogin = async (payload) => {
  try {
    const response = await sendRequest("POST", payload, "admin/login", {
      "Content-Type": "application/x-www-form-urlencoded",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Uploading Project

export const uploadProjects = async (token, payload) => {
  try {
    const response = await axios.post(`${BASE_URL}/projects/upload`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
