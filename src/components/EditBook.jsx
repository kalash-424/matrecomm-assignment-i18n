import { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookForm from './form/BookForm.jsx';

const EditBook = ({ setCurrentTab, bookId }) => {
  const { books, setBooks } = useContext(BookContext);
  const bookToEdit = books.find(book => book.id === bookId);

  const handleOnSubmit = book => {
    const filteredBooks = books.filter(book => book.id !== bookId);
    setBooks([book, ...filteredBooks]);
    setCurrentTab('list');
  };

  return (
    <div className="addForm">
      <BookForm book={bookToEdit} handleSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditBook;
