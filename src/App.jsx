import { useDebugValue, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import Header from './components/Header';
import ListBook from './components/ListBook';
import BookProvider from './context/BookContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact  from './components/Contact';

function App() {
  const [currentTab, setCurrentTab] = useState('list');
  const [editBookId, setEditBookId] = useState(null); 

  const renderCurrentTab = () => {
    switch (currentTab) {
      case 'add':
        return <AddBook setCurrentTab={setCurrentTab} />;
      case 'edit':
        return <EditBook setCurrentTab={setCurrentTab} bookId={editBookId} />;
      case 'list':
      default:
        return <ListBook setCurrentTab={setCurrentTab} setEditBookId={setEditBookId} />;
    }
  };

  return (
    <BookProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header setCurrentTab={setCurrentTab} currentTab={currentTab} />
                {renderCurrentTab()}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BookProvider>
  );
}

export default App;
