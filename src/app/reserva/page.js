"use client";
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Reserva from "@/components/Reserva";
import { FormContextProvider } from "@/context/FormContext";

const stripePromise = loadStripe('tu_clave_publica_de_stripe');

const Page = () => {
  return (
    <FormContextProvider>
      <Elements stripe={stripePromise}>
        <Reserva />
      </Elements>
    </FormContextProvider>
  );
};

export default Page;