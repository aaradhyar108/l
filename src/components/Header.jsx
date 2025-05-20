import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">BookNook</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="Books">Books</Link>
          <Link to="Categories">Categories</Link>
          <Link to="About">About</Link>
          <Link to="Contact">Contact</Link>
          <Link to="checkout" className="cart-icon">
            <FiShoppingCart />
            <span className="cart-count">0</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
