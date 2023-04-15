import axios from "axios";

const API_URL = import.meta.env.VITE_APP_END_POINT;

class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + "login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem(
            import.meta.env.VITE_APP_STORAGE_KEY,
            JSON.stringify(response.data)
          );
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem(import.meta.env.VITE_APP_STORAGE_KEY);
  }

  register(email: string, password: string) {
    return axios.post(API_URL + "register", {
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(
      localStorage.getItem(import.meta.env.VITE_APP_STORAGE_KEY) || "{}"
    );
  }
}

export default new AuthService();
