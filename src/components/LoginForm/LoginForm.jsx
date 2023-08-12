import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/usersOperations';

const LoginForm = () => {

const dispatch = useDispatch();

const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;
  
    dispatch(
        loginUserThunk({
            email,
            password
        }))

        // console.log({
        // 
        //     email,
        //     password
        // });

}
  return (
    <form onSubmit={handleSubmit}>
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
    <button type='submit'>Sign In</button>
  </form>
  )
}

export default LoginForm;
