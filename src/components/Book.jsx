import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Book = ({ book, handleRemoveBook, handleEditBook }) => {
  const { t, i18n } = useTranslation();
  const { id, name, author, price, date } = book;

  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const getFormattedDate = async () => {
      const formatted = await i18n.formatDate(date, i18n.language);
      setFormattedDate(formatted);
    };
    getFormattedDate();
  }, [date, i18n.language]);

  return (
    <div className="book">
      <h2>{name}</h2>
      <div className="bookDetail">
        <p>{t('author')}: {author}</p>
        <p>{t('price')}: {price}</p>
        <p>{t('date')}: {formattedDate}</p>
      </div>
      <div className="buttons">
        <button onClick={() => handleEditBook(id)}>{t('edit')}</button>
        <button onClick={() => handleRemoveBook(id)} className="delete">{t('delete')}</button>
      </div>
    </div>
  );
};

export default Book;
