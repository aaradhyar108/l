import { Link } from 'react-router-dom'

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={book.coverImage} alt={book.title} />
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="author">by {book.author}</p>
        <p className="price">${book.price.toFixed(2)}</p>
        <div className="book-actions">
          <Link to={`/book/${book.id}`} className="btn btn-details">Details</Link>
          <button className="btn btn-add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default BookCard