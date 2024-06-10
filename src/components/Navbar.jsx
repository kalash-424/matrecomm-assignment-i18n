import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { LanguageSelector } from './LanguageSelector';
import React from 'react';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          {t('bookManagement')}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                {t('about')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                {t('contact')}
              </NavLink>
            </li>
          </ul>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
