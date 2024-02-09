"use client";
import React, { createContext, useContext } from 'react';
import { useForm, FormProvider as RHFFormProvider } from 'react-hook-form';
import { z } from 'zod';

const FormContext = createContext();

export const useFormContextExtended = () => useContext(FormContext);

const formSchema = z.object({
  dob: z.date().optional().refine((date) => date <= new Date(), {
    message: "Date of birth cannot be in the future.",
  }),
});

export const FormContextProvider = ({ children, defaultValues }) => {
  const methods = useForm({
    defaultValues,
    resolver: async (data) => {
      try {
        const values = await  formSchema.parse(data);
        return { values, errors: {} };
      } catch (error) {
        return { values: {}, errors: error.formErrors.fieldErrors };
      }
    },
  });

  return (
    <RHFFormProvider {...methods}>
      <FormContext.Provider value={{ ...methods }}>
        {children}
      </FormContext.Provider>
    </RHFFormProvider>
  );
};

export default FormContextProvider;
