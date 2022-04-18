import { useFormik } from "formik";
import React, { useEffect } from "react";
import { User } from "../types/User";
import { meAPI, signInAPI } from "../api/index";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer/store";
import { setToken, setUser } from "../reducer/app";
export function SignIn(): JSX.Element {
  const dispatch = useDispatch();

  async function saveUser(token: string) {
    const user = await meAPI(token);

    dispatch(setUser(user));
    console.log({ user });
  }

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      user: "",
    },

    onSubmit: async (values) => {
      const data = await signInAPI(values.email, values.password);

      localStorage.setItem("auth-token", data.token);
      dispatch(setToken(data.token));
      saveUser(data.token);

      navigate("/");
    },
  });

  return (
    <div>
      <h1>Create An account</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <span>Email</span>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <span>Password</span>
          <input
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            id="password"
            placeholder="Password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
