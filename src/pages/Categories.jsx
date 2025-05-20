import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import BookCard from '../components/BookCard'
import SearchBar from '../components/SearchBar' // ✅ Import the SearchBar
import axios from 'axios'

const Categories = () => {
  const [books, setBooks] = useState([])    
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://example.com/api/books', {
          params: { q: searchQuery }
        })
        setBooks(response.data)
      } catch (error) {
        console.error('Error fetching books:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [searchQuery])

  const handleSearch = (query) => {
    navigate(`/?search=${query}`)
  }

  return (
    <div className="home-page">
      <h2>Discover Your Next Favorite Book</h2>
      <p>Access thousands of books from the comfort of your home</p>

      {/* ✅ Render SearchBar */}
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>

      {loading ? (
        <div className="loading">Loading books...</div>
      ) : (
        <div className="book-list">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Categories
