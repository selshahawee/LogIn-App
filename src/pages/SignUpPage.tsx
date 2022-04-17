import { useFormik } from 'formik';
import React from 'react';
import { User } from '../types/User';
import { singUpAPI} from '../api/index';


function SingUpPage(): JSX.Element {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            userName: "",
            firstName: "",
            lastName: "",

        },
        onSubmit: async (values) => {
            const data = await singUpAPI(values);
            console.log(data)
        }
    })


  return (
    <div>
          <h1> create an account </h1>
          <form onSubmit={formik.handleSubmit}>
              <div>
                  <span>first name </span>
                  <input name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      id="firstName"
                      placeholder='firstName' />   
                  
              </div>
              <div>
                  <span>last name </span>
                  <input name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}  
                      id="lastName"
                      placeholder='lastName' />   

              </div>
              <div>
                  <span>user name </span>
                  <input name="userName"
                      value={formik.values.userName}
                      onChange={formik.handleChange}
                      id="userName"
                      placeholder='userName' />   
                  

              </div>
              <div>
                  <span>email </span>
                  <input name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      id="email"
                      placeholder='email' />
              </div>
              <div>
                  <span>password </span>
                  <input name="password"  
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      id="password"
                      placeholder='password' />

              </div>
              <button type="submit">create an account</button>
              
          </form>
            

                  

    </div>
  )
}

export default SingUpPage
