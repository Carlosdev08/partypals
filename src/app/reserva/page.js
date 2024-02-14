"use client";
import React from 'react';
import Reserva from "@/components/Reserva";
import { FormContextProvider } from "@/context/FormContext";


const Page = () => {
  return (
    <FormContextProvider>
        <Reserva />
    </FormContextProvider>
  );
};

export default Page;