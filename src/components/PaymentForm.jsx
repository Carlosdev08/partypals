import React from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe.js aún no está cargado');
      return;
    }

    // Aquí personalizas qué campos recoger
    const paymentElement = elements.create('payment', {
      fields: {
        billingDetails: {
          name: 'never',
          email: 'never',
        }
      }
    });

    // Monta el Payment Element en tu DOM
    paymentElement.mount('#payment-element');

    // Llama a stripe.confirmPayment al enviar el formulario
    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://tuSitio.com/pagoExitoso',
        payment_method_data: {
          billing_details: {
            name: 'Jenny Rosen',
            email: 'jenny.rosen@example.com',
          }
        },
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log('El pago fue procesado o está en proceso');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="payment-element">
        {/* El elemento de pago se montará aquí */}
      </div>
      <button type="submit" disabled={!stripe}>
        Pagar
      </button>
    </form>
  );
};

export default PaymentForm;
