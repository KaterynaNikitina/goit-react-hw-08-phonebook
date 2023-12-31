import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthentificated } from 'redux/selectors';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const authentificated = useSelector(selectAuthentificated);
  if (authentificated) return <Navigate to="/contacts" />;

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
