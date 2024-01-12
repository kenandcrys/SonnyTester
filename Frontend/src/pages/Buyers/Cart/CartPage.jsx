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
    <div className="bg-[#F0F0F0]">
      <div className="flex px-4 pt-8 flex-col mx-auto gap-8 lg:grid grid-cols-3 lg:max-h-[827px] lg:px-10 lg:pt-[68px]">

        {/* List of orders */}
        <div className="flex flex-col justify-center items-start col-start-1 col-end-3 bg-blue-200 lg:h-[759px]">
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
            <p className="self-center text-xl font-semibold lg:text-2xl lg:font-bold">No products in your cart</p>
          )} 
        </div>
        <div className="flex flex-col items-start gap-8 lg:gap-5 col-start-3 col-end-4">
          {/* Cart Summary */}
          <div className="flex flex-col w-full p-4 bg-white font-Roboto py-6 px-8 lg:items-center">
            <div className="text-xl lg:text-[25px] font-semibold lg:font-bold lg:leading-[30px] text-center text-[#0F1111]">Cart Summary</div>
            {/* {carts.map((item) => (
              <div key={item.id}>
                <div className="ProductName">
                  <div>{item.product.name} </div>
                </div>
              </div>
            ))} 
            No idea what this is*/}
            <div className="flex flex-col items-start gap-3 self-stretch py-6">
              <div className="flex justify-between items-center self-stretch">
                <div className="text-[14px] font-normal leading-5 lg:text-xl lg:leading-6 text-[#605D64]">Subtotal</div>
                <div className="text-base font-medium lg:text-xl lg:leading-[30px] text-[#605D64]">${getTotal()}</div>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <div className="text-[14px] font-normal leading-5 lg:text-xl lg:leading-6 text-[#605D64]">Promo code</div>
                <div className="text-base font-medium lg:text-xl lg:leading-[30px] text-[#605D64]">ADC345</div>
              </div>
              <div className="flex justify-between items-center self-stretch">
                <div className="text-[14px] font-normal leading-5 lg:text-xl lg:leading-6 text-[#605D64]">Shipping</div>
                <div className="text-base font-medium lg:text-xl lg:leading-[30px] text-[#605D64]">$23.57</div>
              </div>
              <div className="flex justify-between items-center self-stretch text-xl font-semibold leading-7 text-[#1D1B20]">
                <div className="lg:font-bold lg:leading-6">Total</div>
                <div className="lg:text-2xl lg:font-bold">$258.11</div>
              </div>
            </div>
            <button className="flex justify-center items-center rounded-[5px] gap-[10px] text-[#0F1111] bg-[#EEC643] h-[44px] lg:w-[70%] px-[30px] py-[14px] text-[14px] font-semibold leading-5 lg:text-base lg:leading-[19.2px] lg:font-normal" onClick={checkout}>Checkout</button>
          </div>

          {/* Promo Code */}
          <div className="flex flex-col p-4 w-full bg-white items-start lg:px-8 lg:py-6 ">
            <div className="flex justify-between items-center self-stretch">
              <input type="text" placeholder="Promo Code" className=" h-[50px] lg:w-[249px] p-[10px] text-[13px] font-normal leading-4 border-[#AEA9B1] border-solid border rounded"/>
              <button className="h-[50px] py-[14px] px-[30px] text-center border border-[#2284B6] border-solid text-[14px] lg:text-base rounded text-[#2284B6] leading-5 font-semibold lg:font-medium lg:tracking-[0.08px]">Apply</button>
            </div>
          </div>

          {/* Returns */}
          <div className="w-full flex flex-col items-start gap-4 p-4 bg-white font-Roboto lg:px-8 lg:py-6">
            <div className="text-xl lg:text-2xl font-semibold text-[#313133] lg:leading-10">Returns are easy</div>
            <p className="text-base font-normal">
              Free return within 15 days for Official Store items and 7 days for
              other eligible items. <span className="underline text-[#2284B6]">See more</span>
            </p>
          </div>
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
