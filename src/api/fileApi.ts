import { apiWrapper } from "src/utils/helpers/authHelper";

const fileApi = {
  postImage: (data: any) => {
    console.log(data);
    return apiWrapper<LoginResponse>({
      method: "post",
      url: "/file/images",
      data,
      isFormData: true,
    });
  },
};

export default fileApi;
