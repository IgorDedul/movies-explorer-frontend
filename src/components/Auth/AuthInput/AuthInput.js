import React from 'react';
import './AuthInput.css';

const AuthInput = () => {
  return (
    <label className='auth__input-container'>
      <span className='auth__input-label'></span>
      <input         
        className='auth__input auth__input_incorrect'
      />
      <span className='auth__input-error'></span>
    </label>
  );
};

export default AuthInput;