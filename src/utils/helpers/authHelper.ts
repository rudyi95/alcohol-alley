import axios from "axios";

import { handleParseQueries } from "./parseQueriesHelper";

const BASE_CONNECTION = axios.create({
  baseURL: "/api",
});

export const apiWrapper = async <T>({
  method,
  url,
  data,
  isFormData = false,
  parseData,
}: ApiWrapper) => {
  const checkedUrl = parseData ? `${url}${handleParseQueries(parseData)}` : url;

  switch (method) {
    case "get":
      return await BASE_CONNECTION.get<T>(checkedUrl);
    case "post": {
      return await BASE_CONNECTION.post<T>(url, isFormData ? data : { ...data }, {
        headers: { "Content-Type": "application/json" },
      });
    }
    case "put": {
      return await BASE_CONNECTION.put<T>(url, { ...data });
    }
    case "delete":
      return await BASE_CONNECTION.delete<T>(url);
  }
};
