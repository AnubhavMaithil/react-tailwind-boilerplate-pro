import { Axios } from "../Content/MainContent";

const userApi = "/user";

export async function registerUser(payload) {
  try {
    const response = await Axios.post(`${userApi}/register`, payload);
    return response?.data;
  } catch (error) {
    console.error("Registration error:", error);
    return error?.response?.data || error;
  }
}
export async function login(payload) {
  try {
    const response = await Axios.post(`/login`, payload);
    return response?.data;
  } catch (error) {
    console.error("Login error:", error);
    return error?.response?.data || error;
  }
}
export async function userProfile() {
  try {
    const response = await Axios.get(`${userApi}/profile`);
    return response?.data;
  } catch (error) {
    console.error("User profile error:", error);
    return error?.response?.data || error;
  }
}
