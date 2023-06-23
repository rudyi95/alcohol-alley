import { useState, useEffect } from "react";

type Token = Nullable<string>;

export const useToken = (): [Token, (token: Token) => void] => {
  const [token, setToken] = useState<Token>(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      localStorage.removeItem("token");
    } else {
      localStorage.setItem("token", token);
    }
  }, [token]);

  const updateToken = (newToken: Token) => {
    setToken(newToken);
  };

  return [token, updateToken];
};
