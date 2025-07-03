import { Axios } from "../Content/MainContent";

const adminApi = "/admin";

export async function loginAdmin(payload) {
  try {
    const response = await Axios.post(`${adminApi}/login`, payload);
    return response?.data;
  } catch (error) {
    return error?.response.data;
  }
}

export async function adminProfile() {
  try {
    const response = await Axios.get(`${adminApi}/profile`);
    return response?.data;
  } catch (error) {
    return error?.response.data;
  }
}
