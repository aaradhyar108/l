import { Link } from 'react-router-dom';
import { FaBookOpen, FaSearch } from 'react-icons/fa';
import SearchBar from './SearchBar';

const Header = ({ toggleSearch, openAuthModal, searchActive }) => {
  return (
    <header>
      <div className="logo">
        <FaBookOpen />
        <Link to="/"><h1>BookNook</h1></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><a href="#categories">Categories</a></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="user-actions">
        <button onClick={() => openAuthModal('login')}>Login</button>
        <button onClick={() => openAuthModal('signup')}>Sign Up</button>
        <FaSearch onClick={toggleSearch} id="search-icon" />
      </div>
      
      <SearchBar active={searchActive} toggleSearch={toggleSearch} />
    </header>
  );
};

export default Header;