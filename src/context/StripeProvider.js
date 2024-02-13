import PaymentForm from '@/components/PaymentForm';
import { StripeProvider } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Usa tu clave pública de Stripe aquí
const stripePromise = loadStripe('pk_test_tuClavePublicaDeStripe');

function App() {
  return (
    <StripeProvider stripe={stripePromise}>
      <PaymentForm />
    </StripeProvider>
  );
}
