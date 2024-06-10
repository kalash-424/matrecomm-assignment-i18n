import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookForm from './form/BookForm';

const AddBook = ({ setCurrentTab }) => {
  const { books, setBooks } = useContext(BookContext);

  const handleOnSubmit = (book) => {
    setBooks([book, ...books]);
    setCurrentTab('list');
  };

  return (
    <div className="addForm">
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddBook;