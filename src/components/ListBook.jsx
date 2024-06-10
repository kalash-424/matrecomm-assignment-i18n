import { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import Book from './Book';
import { useTranslation } from 'react-i18next';

const ListBook = ({ setCurrentTab, setEditBookId }) => {
  const { t } = useTranslation();
  const { books, setBooks } = useContext(BookContext);

  const handleRemoveBook = (id) => {
    const filteredBooks = books.filter(book => book.id !== id);
    setBooks(filteredBooks);
  };

  const handleEditBook = (id) => {
    setEditBookId(id);
    setCurrentTab('edit');
  };

  return (
    <div className="listBook">
      {books.length ? (
        books.map(book => (
          <Book
            book={book}
            key={book.id}
            handleRemoveBook={handleRemoveBook}
            handleEditBook={handleEditBook}
          />
        ))
      ) : (
        <p className="noData">{t('noBooksAvailable')}</p>
      )}
    </div>
  );
};

export default ListBook;
