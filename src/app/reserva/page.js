"use client";
import React from "react";
import Reserva from "@/components/Reserva";
import {  Router, Route } from "react-router-dom";

import { FormContextProvider } from "@/context/FormContext";
import PaymentForm from "@/components/ui/PaymentForm";

const Page = () => {
  return (
    <>
      <div className="text-center">
        <FormContextProvider>
          <Reserva />
        </FormContextProvider>
      </div>
    </>
  );
};

export default Page;
