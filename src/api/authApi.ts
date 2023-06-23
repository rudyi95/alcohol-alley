import { apiWrapper } from "src/utils/helpers/authHelper";

const authApi = {
  postLogIn: (data: LoginRequest) => {
    return apiWrapper<LoginResponse>({
      method: "post",
      url: "/auth/login",
      data,
    });
  },
  postRegister: (data: RegisterRequest) => {
    return apiWrapper({
      method: "post",
      url: "/auth/register",
      data,
    });
  },
};

export default authApi;
