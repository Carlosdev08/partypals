import React from 'react';
import Reserva from "@/components/Reserva";
import { FormContextProvider } from "@/context/FormContext";

const page = () => {
  return (
    <FormContextProvider >
      <Reserva />
    </FormContextProvider>
  );
};

export default page;