import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import { signInAPI } from "../api/index";





export function SignInPage():JSX.Element {
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
    
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit}  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
                          autoFocus
                          onChange={formik.handleChange}
                            value={formik.values.email}
            />
            <TextField
              margin="normal"
              
              fullWidth
              name="password"
              label="Password"
              type="password"
                          id="password"
                          value={formik.values.password}
                            onChange={formik.handleChange}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
           
          </Box>
        </Box>
    
      </Container>
   
        );
    }  




