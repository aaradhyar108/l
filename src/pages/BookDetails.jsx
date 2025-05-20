import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BookDetails = () => {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://example.com/api/books/${id}`)
        setBook(response.data)
      } catch (error) {
        console.error('Error fetching book details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBookDetails()
  }, [id])

  if (loading) return <div className="loading">Loading book details...</div>
  if (!book) return <div>Book not found</div>

  return (
    <div className="book-details">
      <div className="book-details-container">
        <div className="book-cover-large">
          <img src={book.coverImage} alt={book.title} />
        </div>
        <div className="book-info">
          <h1>{book.title}</h1>
          <p className="author">by {book.author}</p>
          <p className="price">${book.price.toFixed(2)}</p>
          <p className="description">{book.description}</p>
          <div className="book-actions">
            <button className="btn btn-add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails