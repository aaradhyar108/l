import { Link } from 'react-router-dom'

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <div className="item-info">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="btn-remove"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
            <Link to="/checkout" className="btn btn-checkout">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart