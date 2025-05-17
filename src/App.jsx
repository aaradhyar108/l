import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import './App.css';

function App() {
  const [searchActive, setSearchActive] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const toggleSearch = () => setSearchActive(!searchActive);
  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };
  const closeModal = () => {
    setAuthModalOpen(false);
    setBookModalOpen(false);
  };
  const showBookDetails = (book) => {
    setSelectedBook(book);
    setBookModalOpen(true);
  };

  return (
    <Router>
      <div className="app">
        <Header 
          toggleSearch={toggleSearch} 
          openAuthModal={openAuthModal} 
          searchActive={searchActive}
        />
        
        <main>
          <Routes>
            <Route path="/" element={<Home showBookDetails={showBookDetails} />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books showBookDetails={showBookDetails} />} />
          </Routes>
        </main>

        <Footer />

        {/* Modals */}
        {authModalOpen && (
          <Modal onClose={closeModal}>
            <AuthForms mode={authMode} switchMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')} />
          </Modal>
        )}

        {bookModalOpen && selectedBook && (
          <Modal onClose={closeModal}>
            <BookDetails book={selectedBook} />
          </Modal>
        )}
      </div>
    </Router>
  );
}

export default App;