import authApi from "./authApi";
import itemsApi from "./itemsApi";
import fileApi from "./fileApi";

const api = {
  ...authApi,
  ...itemsApi,
  ...fileApi,
};

export default api;
