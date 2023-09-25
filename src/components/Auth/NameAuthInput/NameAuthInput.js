import React from 'react';
import AuthInput from '../AuthInput/AuthInput';

const NameAuthInput = () => {
  return (
    <AuthInput
      labelText='Имя'
      type='text'
      name='name'
      placeholder='Введите имя'
      minLength='2'
      maxLength='30'
      pattern='[A-Za-zА-Яа-яЁё\s-]+'
      required
    />
  );
};

export default NameAuthInput;