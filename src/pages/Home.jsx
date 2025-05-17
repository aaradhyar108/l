import { useState } from 'react';
import BookCard from '../components/BookCard';
import CategoryCard from '../components/CategoryCard';

const Home = ({ showBookDetails }) => {
  const [books] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://m.media-amazon.com/images/I/71FTb9X6wsL._AC_UF1000,1000_QL80_.jpg",
      description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald...",
      genre: "Fiction",
      year: 1925,
      pages: 180,
      available: true
    },
    // More books...
  ]);

  const [categories] = useState([
    { id: 'fiction', name: 'Fiction' },
    { id: 'non-fiction', name: 'Non-Fiction' },
    { id: 'science', name: 'Science' },
    { id: 'history', name: 'History' },
    { id: 'biography', name: 'Biography' },
    { id: 'fantasy', name: 'Fantasy' }
  ]);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <h2>Discover Your Next Favorite Book</h2>
          <p>Access thousands of books from the comfort of your home</p>
          <button className="cta-btn">Browse Collection</button>
        </div>
      </section>

      <section className="featured-books" id="books">
        <h2>Featured Books</h2>
        <div className="books-container">
          {books.map(book => (
            <BookCard key={book.id} book={book} showBookDetails={showBookDetails} />
          ))}
        </div>
      </section>

      <section className="categories" id="categories">
        <h2>Browse by Category</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <h2>About BookNook</h2>
        <p>BookNook is an online library dedicated to providing access to a wide range of books...</p>
        <div className="stats">
          <div className="stat">
            <h3>10,000+</h3>
            <p>Books Available</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Access</p>
          </div>
          <div className="stat">
            <h3>Free</h3>
            <p>Membership</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;