import React from 'react';
import AuthInput from './../AuthInput/AuthInput';

const PasswordAuthInput = ({...validationParams}) => {
  return (
    <AuthInput
      labelText='Пароль'
      type='password'
      name='password'
      placeholder='Введите пароль'
      minLength={6}
      maxLength={30}
      required
      {...validationParams}
    />
  );
};

export default PasswordAuthInput;
