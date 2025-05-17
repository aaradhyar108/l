const BookCard = ({ book, showBookDetails }) => {
  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={book.cover} alt={book.title} />
      </div>
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>by {book.author}</p>
        <div className="book-actions">
          <button className="borrow-btn" disabled={!book.available}>
            {book.available ? 'Borrow' : 'Unavailable'}
          </button>
          <button 
            className="details-btn" 
            onClick={() => showBookDetails(book)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;