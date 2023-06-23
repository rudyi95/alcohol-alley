import { apiWrapper } from "src/utils/helpers/authHelper";

const itemsApi = {
  getItemsAll: (parseData: QueriesData) =>
    apiWrapper<ArrayResponse<Item>>({
      method: "get",
      url: "/items/all",
      parseData,
    }),
  getItemById: (id: string) =>
    apiWrapper<Item>({
      method: "get",
      url: `/items/${id}`,
    }),
  getItemsByCategory: (category: string) =>
    apiWrapper<Item[]>({
      method: "get",
      url: `/items/${category}`,
    }),
  getItemsPopularAll: (parseData: QueriesData) =>
    apiWrapper<ArrayResponse<Item>>({
      method: "get",
      url: "/items/popular",
      parseData,
    }),
  postItem: (data: ItemRequest) =>
    apiWrapper({
      method: "post",
      url: "/items/add",
      data,
    }),
  deleteItem: (id: string) =>
    apiWrapper({
      method: "delete",
      url: `/items/${id}`,
    }),
  editItem: (data: Item) =>
    apiWrapper({
      method: "put",
      url: `/items/edit/${data._id}`,
      data,
    }),
};

export default itemsApi;
