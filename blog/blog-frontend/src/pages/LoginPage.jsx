import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthFormTemplate from '../components/auth/AuthFormTemplate';

const LoginPage = () => {
  return (
    <AuthFormTemplate>
      <AuthForm />
    </AuthFormTemplate>
  );
};

export default LoginPage;
