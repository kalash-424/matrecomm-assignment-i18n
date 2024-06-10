import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, query } = formData;
    let formErrors = false;

    if (!email) {
      toast.error(t("formEmailError"));
      formErrors = true;
    } else if (!validateEmail(email)) {
      toast.error(t("formValidEmailError"));
      formErrors = true;
    }
    if (phone.length !== 10) {
      toast.error(t("formPhoneError"));
      formErrors = true;
    }

    if (formErrors) return;

    toast.success(t("formSuccess"));
    setFormData({
      name: "",
      email: "",
      phone: "",
      query: "",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <div className="inputField">
          <label>{t("contactName")}</label>
          <input
            value={formData.name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder={t("contactNamePlaceholder")}
          />
        </div>
        <div className="inputField">
          <label>{t("contactEmail")}</label>
          <input
            value={formData.email}
            onChange={handleChange}
            name="email"
            type="text"
            placeholder={t("contactEmailPlaceholder")}
          />
        </div>
        <div className="inputField">
          <label>{t("contactPhone")}</label>
          <input
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            type="number"
            placeholder={t("contactPhonePlaceholder")}
          />
        </div>
        <div className="inputField">
          <label>{t("contactQuery")}</label>
          <textarea
            value={formData.query}
            onChange={handleChange}
            name="query"
            placeholder={t("contactQueryPlaceholder")}
          />
        </div>
        <button type="submit" className="btnForm" disabled={!formData.name || !formData.email || !formData.phone || !formData.query}>
          {t("Submit")}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
