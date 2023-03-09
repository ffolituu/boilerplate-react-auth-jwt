import axios from "axios";
import authHeader from "../Auth/AuthHeader";

const API_URL = import.meta.env.VITE_APP_END_POINT;

class TodoService {
  getAllTodo() {
    return axios.get(API_URL + "660/todos", { headers: authHeader() });
  }
}

export default new TodoService();
