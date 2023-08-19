import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/usersOperations';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.target;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    console.log('name');
    console.log('email');
    console.log('password');

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
    form.reset();
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
        <h1>Register your account</h1>
        <TextField
          id="outlined-basic-1"
          label="Name"
          variant="outlined"
          type="text"
          name="userName"
          required
          minLength={2}
          sx={{
            width: '330px',
            marginBottom: '20px',
          }}
        />
        <TextField
          id="outlined-basic-2"
          label="Email"
          variant="outlined"
          type="email"
          name="userEmail"
          required
          sx={{
            width: '330px',
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
          minLength={7}
          sx={{
            width: '330px',
            marginBottom: '20px',
          }}
        />
        <Button variant="contained" type="submit" sx={{ width: '330px' }}>
          Register
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;
