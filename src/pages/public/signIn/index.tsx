import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TextField, Button, Avatar } from "@mui/material";

import { useAppDispatch } from "src/utils/hooks/redux";
import { login } from "src/redux/services/authService";

import { useStyles } from "./style";
import { useToken } from "src/utils/hooks/useToken";

const Login: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  // const location = useLocation();
  const navigate = useNavigate();
  const [, setToken] = useToken();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      dispatch(
        login({
          data: value,
          func: (data) => {
            if (data) {
              setToken(data);
              navigate("/");
            }
          },
        })
      );
    },
  });

  // const { from }: any = location.state || { from: { pathname: "/" } };

  // If user was authenticated, redirect her to where she came from.
  // if (auth.isAuth) {
  //   return <Navigate to={from} />;
  // }

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit} className={classes.container}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <div className={classes.headText}>Увійти</div>
        <div className={classes.items}>
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button variant="outlined" color="primary" type="submit">
            Увійти
          </Button>
          <Button variant="outlined" color="primary" onClick={() => navigate("/register")}>
            Зареєструватися
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
