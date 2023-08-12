import LoginForm from 'components/LoginForm/LoginForm';
import React from 'react';

import { useSelector } from 'react-redux';
import { selectAuthentificated } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  
  const authentificated = useSelector(selectAuthentificated);
  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div>
      <h1>Login Into Your Account</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
