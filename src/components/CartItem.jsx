import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const changeQuantity = (item, quantity) => {
    if (quantity >= 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: quantity
        })
      );
    }
  };

  return (
    <div>
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div>
          <a href="/">Home</a>
          <a href="/#plants">Plants</a>
          <a href="/cart">🛒 Cart ({cartItems.length})</a>
        </div>
      </nav>

      <main>
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div>
            <h2>Your cart is empty</h2>
            <a href="/#plants">Continue Shopping</a>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="120"
                />

                <div>
                  <h2>{item.name}</h2>
                  <p>Unit Price: ${item.price}</p>

                  <button
                    onClick={() =>
                      changeQuantity(item, item.quantity - 1)
                    }
                  >
                    -
                  </button>

                  <span> {item.quantity} </span>

                  <button
                    onClick={() =>
                      changeQuantity(item, item.quantity + 1)
                    }
                  >
                    +
                  </button>

                  <p>
                    Total: ${item.price * item.quantity}
                  </p>

                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <h2>Grand Total: ${totalAmount}</h2>

            <button
              onClick={() => alert("Coming Soon")}
            >
              Checkout
            </button>

            <br />
            <br />

            <a href="/#plants">Continue Shopping</a>
          </div>
        )}
      </main>
    </div>
  );
}

export default CartItem;
