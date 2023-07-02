import React, { useEffect } from "react";
import { useFormik } from "formik";
import { TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import { useStyles } from "./style";
import { useHttp } from "../../../utils/hooks/http.hook.js";
import { useMessage } from "../../../utils/hooks/message.hook.js";
import { useAppDispatch } from "src/utils/hooks/redux";
import { register } from "src/redux/services/authService";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Login: React.FC = () => {
  const classes = useStyles();
  const message = useMessage();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { /* request, */ error, clearError } = useHttp();

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const formik = useFormik<RegisterRequest>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthDate: null,
    },
    onSubmit: (value) => {
      dispatch(register({ data: value, func: () => navigate("/login") }));
    },
  });

  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit} className={classes.container}>
        <div className={classes.headText}>Реєстрація</div>
        <div className={classes.items}>
          <TextField
            id="firstName"
            name="firstName"
            type="text"
            label="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <TextField
            id="lastName"
            name="lastName"
            type="text"
            label="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Birthday"
              value={formik.values.birthDate}
              onChange={(newValue: any) => {
                formik.setFieldValue("birthDate", moment(newValue).toISOString());
              }}
              autoFocus={false}
              renderInput={(params: any) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            autoComplete="new-password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button variant="outlined" color="primary" type="submit">
            Зареєструватися
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
