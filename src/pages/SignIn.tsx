import { useFormik } from "formik";
import React from "react";
import { User } from "../types/User";
import { meAPI, signInAPI } from "../api/index";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
export function SignIn(): JSX.Element {
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
        
      navigate("/");
      console.log({ data });
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
