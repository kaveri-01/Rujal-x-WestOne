// src/pages/CartPage.jsx
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const [showPopup, setShowPopup] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState("");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // ✅ Handle Checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Build WhatsApp message
    let message = "🛒 *New Order Details:*\n\n";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.color}, ${item.size}) x ${
        item.qty
      } = ₹${item.price * item.qty}\n`;
    });

    message += `\n*Total:* ₹${subtotal}\n\nPlease confirm my order.`;

    // Replace with your WhatsApp number (with country code, no +)
    const phoneNumber = "919819932042";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Save URL and show popup
    setCheckoutUrl(url);
    setShowPopup(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border p-4 rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {item.color} | {item.size}
                  </p>
                  <p className="font-semibold">₹{item.price}</p>

                  {/* Qty Controls */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                    >
                      –
                    </button>
                    <span className="px-4 py-1 border-t border-b">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Summary */}
        <div className="border p-6 rounded-lg shadow h-fit">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <p className="flex justify-between mb-2">
            <span>Subtotal</span> <span>₹{subtotal}</span>
          </p>
          <p className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span> <span>₹{subtotal}</span>
          </p>
          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* ✅ Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">
              ✅🎉 Thank You for Your Order! 🛍️
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
            
              <br />
              🙏 We truly appreciate your trust in us!📦
            </p>
            <button
              onClick={() => {
                window.open(checkoutUrl, "_blank");
                setShowPopup(false);
              }}
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Continue to WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
