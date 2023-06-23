import authApi from "./authApi";
import itemsApi from "./itemsApi";

const api = {
  ...authApi,
  ...itemsApi,
};

export default api;
