import Nav from "../../Nav";
import CheckoutDeliveryAddress from "./CheckoutDeliveryAddress";
import CheckoutPaymentOptions from "./CheckoutPaymentOptions";
import CheckoutProducts from "./CheckoutProducts";

export default function CheckoutPage() {
  return (
    <>
      <Nav />
      <section className="container mx-auto my-5">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Checkout
        </h2>
      </section>
      <CheckoutDeliveryAddress />
      <CheckoutProducts />
      <CheckoutPaymentOptions />
    </>
  );
}
