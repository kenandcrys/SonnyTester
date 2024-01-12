const Checkout = () => {
  return (
    <div>
      <div>
        <p>Shipment Address</p>
        <button>Edit</button>
      </div>

      <p>Payment method</p>

      <p>Shipping method</p>

      <div>
        <input type="radio" name="shipping" id="standard" />
        <label htmlFor="standard">Standard Shipping</label>

        <input type="radio" name="shipping" id="express" />
        <label htmlFor="express">Express Shipping</label>

        <input type="radio" name="shipping" id="overnight" />
        <label htmlFor="express">Overnight Shipping</label>

        <button>Continue to payment</button>
      </div>

      <div>
        <p>Order summary:{}</p>
        <p>Subtotal:{}</p>
        <p>Promo code:{}</p>
        <p>Shipping:{}</p>
        <p>Estimated tax:{}</p>
        <p>Total:{}</p>
      </div>
    </div>
  );
};

export default Checkout;
