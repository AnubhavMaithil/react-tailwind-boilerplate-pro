import { Axios } from "../constants/mainContent";

export async function getData() {
  try {
    const response = await Axios.get(`get-data`);
    return response?.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error?.response?.data || error;
  }
}