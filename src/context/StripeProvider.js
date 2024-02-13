"use client";
import PaymentForm from '@/components/PaymentForm';
import { StripeProvider } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OjLmYDgG3hqUqPFdGVcsA1iiBh8PT4WDVw182YsmJuMPKvvF5za9Z5nBkjpCHndiSZ96v8R4YYcC38aN1bjQJcG00QqWSsVbb');

function App() {
  return (
    <StripeProvider stripe={stripePromise}>
      <PaymentForm />
    </StripeProvider>
  );
}
