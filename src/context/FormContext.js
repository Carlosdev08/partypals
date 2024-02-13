"use client";
import React, { createContext, useContext } from 'react';
import { useForm } from 'react-hook-form';

export const FormContext = createContext();
import { zodResolver } from "@hookform/resolvers/zod";

export const FormContextProvider = ({ children, schema, defaultValues}) => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues
  });
  return (
    <FormContext.Provider value={methods}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContextExtended = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContextExtended must be used within a FormContextProvider');
  }
  return context;
};
