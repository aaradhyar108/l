import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Books from './Pages/Books';
import Categories from './Pages/Categories'; 
import BookDetails from './pages/BookDetails'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import './index.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App