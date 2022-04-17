import { useFormik } from 'formik';
import React from 'react';
import { User } from "../types/User"
import { signInAPI } from "../api/index"



export function SignIn():JSX.Element {
    const formik = useFormik ({
    initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values) => {
            const data = await signInAPI(values.email, values.password);
            console.log(data)
        }
    })

  
  
  
    return (
        <div>
            <h1>Create An account</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <span>Email</span>
                    <input name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        id="email"
                    placeholder='Email'/>
                </div>
                <div>
                    <span>Password</span>
                    <input name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        id="password"
                    placeholder='Password'/>
                </div>
            </form>
    </div>
  )
}

