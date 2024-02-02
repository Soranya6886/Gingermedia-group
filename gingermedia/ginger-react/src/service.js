import axios from "axios";
let axiosInstance = axios.create();
axiosInstance.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("token");
  config.headers.Authorization = token;
});
class ApiService {
  baseUrl = "http://localhost:5000/api";
  signIn = async (user) => {
    try {
      return await axios.post(this.baseUrl + "/login", user);
    } catch (err) {
      throw err;
    }
  };
  register = async (user) => {
    try {
      return await axios.post(this.baseUrl + "/register", user);
    } catch (err) {
      throw err;
    }
  };
  getUserDetails = async (userId) => {
    try {
      return await axios.get(this.baseUrl + "/getUserDetails/" + userId);
    } catch (err) {
      throw err;
    }
  };
  editUserDetails = async (user) => {
    try {
      return await axios.put(
        this.baseUrl + "/editUserDetails/" + user.userId,
        user
      );
    } catch (err) {
      throw err;
    }
  };
}
const apiService = new ApiService();
export default apiService;
