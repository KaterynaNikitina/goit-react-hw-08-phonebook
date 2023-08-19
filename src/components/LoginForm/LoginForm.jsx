import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/usersOperations';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      loginUserThunk({
        email,
        password,
      })
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Login into your account</h1>
        <TextField
          id="outlined-basic-2"
          label="Email"
          variant="outlined"
          type="email"
          name="userEmail"
          required
          sx={{
            width: '350px',
            marginBottom: '20px',
          }}
        />
        <TextField
          id="outlined-basic-3"
          label="Password"
          variant="outlined"
          type="password"
          name="userPassword"
          required
          sx={{
            width: '350px',
            marginBottom: '20px',
          }}
        />
        <Button variant="contained" type="submit" sx={{ width: '350px' }}>
          Log In
        </Button>
      </Box>
    </form>
  );
};

export default LoginForm;
