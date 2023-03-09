import axios from "axios";
import authHeader from "./../Auth/AuthHeader";

const API_URL = import.meta.env.VITE_APP_END_POINT;

class UserService {
  getAllUser() {
    return axios.get(API_URL + "660/users", { headers: authHeader() });
  }
}

export default new UserService();
