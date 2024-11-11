import axios from "axios";
import { BASE_URL } from "../utils/constant";
export const getAllProjects = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/projects/getAllProjects`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
