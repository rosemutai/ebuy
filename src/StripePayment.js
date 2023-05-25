import { loadStripe } from '@stripe/stripe-js';
import { PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  return (
    <form>
      <PaymentElement />
      <button>Sumit</button>
    </form>
  )
}

export default CheckoutForm;