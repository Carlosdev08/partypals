// components/ui/forms/FormControl.js
import React from 'react';
import { useForm } from '@/context/FormContext';

const FormControl = ({ name, label, ...props }) => {
  const { register } = useForm();
  
  return (
    <div className="form-control">
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} {...register(name)} {...props} />
    </div>
  );
};

export default FormControl;
