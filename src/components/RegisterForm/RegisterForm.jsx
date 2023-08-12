import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/usersOperations';

const RegisterForm = () => {

    const dispatch = useDispatch();

const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;
  
    dispatch(
        registerUserThunk({
            name,
            email,
            password
        }))

        // console.log({
        //     name,
        //     email,
        //     password
        // });

}
  return (
    <form onSubmit={handleSubmit}>
    <label>
      <p>Name:</p>
      <input name='userName' type='text' required minLength={2}></input>
    </label>
    <br />
    <label>
      <p>Email:</p>
      <input name='userEmail' type='email' required></input>
    </label>
    <br />
    <label>
      <p>Password:</p>
      <input name='userPassword' type='password' required minLength={7}></input>
    </label>
    <br />
    <button type='submit'>Sign Up</button>
  </form>
  )
}

export default RegisterForm;
