// CartPage.jsx
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";


const CartPage = ({ carts, setCarts }) => {
  const navigate = useNavigate();

  const getTotal = () =>
    carts.reduce(
      (total, item) => item.product.price * item.number_of_product + total,
      0
    );

  const deleteCart = (id) => {
    if (window.confirm("Are you sure to delete this product from the cart?")) {
      const updatedCarts = carts.filter((item) => item.id !== id);
      setCarts(updatedCarts);
      console.log(`Deleted product with ID: ${id}`);
    }
  };

  const updateQuantity = (id, qty) => {
    const updatedCarts = carts.map((item) =>
      item.id === id ? { ...item, number_of_product: qty } : item
    );
    setCarts(updatedCarts);
    console.log(`Updated quantity of product with ID: ${id} to ${qty}`);
  };

  const checkout = () => navigate("/checkout");

  return (
    <div>
      <div className="CartPage">
        {/* ... other JSX code ... */}

        <div className="cart">
          {carts.length > 0 ? (
            <>
              {carts.map((item, index) => (
                <div
                  key={index}
                  style={{ border: "1px solid #e5e5e5", marginBottom: "10px" }}
                >
                  <img src={item.product.avatar} alt={item.product.name} />
                  <div className="info">
                    <h3>{item.product.name}</h3>
                    <p>{item.product.description}</p>
                    <p>$ {item.product.price}</p>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.number_of_product + 1)
                      }
                    >
                      +
                    </button>
                    <span>{item.number_of_product}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.number_of_product - 1)
                      }
                    >
                      -
                    </button>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteCart(item.id)}
                    >
                      REMOVE
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            "No products in your cart"
          )}
        </div>

        <div className="CartSummary">
          <div>Cart Summary</div>
          {carts.map((item) => (
            <div key={item.id}>
              <div className="ProductName">
                <div>{item.product.name} </div>
              </div>
            </div>
          ))}
          <div>Subtotal: ${getTotal()} </div>
          <button onClick={checkout}>Checkout</button>
        </div>

        <div className="Returns">
          <div>Returns are easy</div>
          <div>
            Free return within 15 days for Official Store items and 7 days for
            other eligible items.
          </div>
          <div>See more</div>
        </div>
      </div>
    </div>
  );
};

CartPage.propTypes = {
  carts: PropTypes.array.isRequired,
  setCarts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  carts: state.cartReducer.carts,
});



export default connect(mapStateToProps, {})(CartPage);
