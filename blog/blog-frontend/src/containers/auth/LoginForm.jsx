import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../modules/auth';

const KEY = 'login';

const LoginForm = () => {
  const form = useSelector(({ auth }) => ({
    form: auth[KEY],
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeForm(KEY));
  }, [dispatch]);

  const onChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      changeField({
        form: KEY,
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO
  };

  return (
    <AuthForm type={KEY} form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default LoginForm;
