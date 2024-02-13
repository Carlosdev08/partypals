import * as React from 'react';
import { useFormContextExtended } from '@/context/FormContext'

const FormControl = ({ name, label, type, ...props }) => {
  const { register, formState: { errors } } = useFormContextExtended();
  
  

  
  return (
    <div className="form-control">
      {label && <label htmlFor={name}>{label}</label>}
      <input id={name} {...register(name)} type={type} {...props} />
      {errors[name] && <span className="error">{errors[name].message}</span>}
    </div>
  );
};

export default FormControl;
