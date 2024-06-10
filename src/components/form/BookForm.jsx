import { useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";

const BookForm = ({ book, handleSubmit }) => {
  const { t } = useTranslation();

  const [bookState, setBookState] = useState({
    name: book ? book.name : "",
    author: book ? book.author : "",
    price: book ? book.price : "",
  });

  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      id: uuidv4(),
      date: new Date(),
      ...bookState,
    });
    setBookState({ name: "", author: "", price: "" });
  };

  const disabledSubmit =
    !bookState.name || !bookState.author || !bookState.price;

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="inputField">
        <label>{t("bookName")}</label>
        <input
          value={bookState["name"]}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder={t("bookNamePlaceholder")}
        />
      </div>
      <div className="inputField">
        <label>{t("authorName")}</label>
        <input
          value={bookState["author"]}
          onChange={handleChange}
          name="author"
          type="text"
          placeholder={t("authorNamePlaceholder")}
        />
      </div>
      <div className="inputField">
        <label>{t("bookPrice")}</label>
        <input
          value={bookState["price"]}
          onChange={handleChange}
          name="price"
          type="number"
          placeholder={t("pricePlaceholder")}
        />
      </div>
      <button type="submit" className="btnForm" disabled={disabledSubmit}>
        {book ?  t("Update")  :  t("Submit") }
      </button>
    </form>
  );
};

export default BookForm;

