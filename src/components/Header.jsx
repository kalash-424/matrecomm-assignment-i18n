import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = ({ setCurrentTab, currentTab }) => {
  const { t } = useTranslation();
  const listBookText = t('listBook');
  const addBookText = t('addBook');

  const navigation = [
    { name: listBookText, tab: 'list' },
    { name: addBookText, tab: 'add' },
  ];

  return (
    <header>
      <nav>
        {navigation.map(nav => (
          <button
            key={nav.name}
            onClick={() => setCurrentTab(nav.tab)}
            className={currentTab === nav.tab ? 'active' : ''}
          >
            {nav.name}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
