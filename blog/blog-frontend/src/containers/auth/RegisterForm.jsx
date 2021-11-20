import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm, register } from '../../modules/auth';
import { check } from '../../modules/user';

const KEY = 'register';

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(initializeForm(KEY));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 401) {
        setError('이미 존재하는 계정입니다.');
        return;
      }

      setError('회원가입 실패');
      return;
    }

    if (auth) {
      console.log('회원 가입 성공');
      console.log(auth);
      dispatch(check());
      return;
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('check API 성공');
      console.log(user);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

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
    const { username, password, passwordConfirm } = form;

    if ([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(
        changeField({
          form: 'register',
          key: 'password',
          value: '',
        }),
      );
      dispatch(
        changeField({
          form: 'register',
          key: 'passwordConfirm',
          value: '',
        }),
      );
      return;
    }

    dispatch(register({ username, password }));
  };

  return (
    <AuthForm
      type={KEY}
      form={form}
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
    />
  );
};

export default RegisterForm;
