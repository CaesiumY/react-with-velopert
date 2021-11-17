import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';

const RegisterPage = () => {
  return (
    <AuthFormTemplate>
      <AuthForm type="register" />
    </AuthFormTemplate>
  );
};

export default RegisterPage;
