import React, { useState } from 'react';
import { NavList, NavListItem } from '../styled';
import { Info } from './info';
import { LanguageDropdown } from './language-dropdown';
import { Settings } from './settings';

const Navbar = () => {
  const [openLanguageDropdown, setOpenLanguageDropdown] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const toggleInfoModal = () => setOpenInfo((prev) => !prev);
  const toggleSettingsModal = () => setOpenSettings((prev) => !prev);

  const toggleLanguageDropdown = () => {
    setOpenLanguageDropdown((prev) => !prev);
  };

  return (
    <nav>
      <NavList>
        <NavListItem onClick={toggleInfoModal}>Info</NavListItem>
        <NavListItem onClick={toggleSettingsModal}>Settings</NavListItem>
        <NavListItem onClick={toggleLanguageDropdown}>
          Language
          {openLanguageDropdown && <LanguageDropdown />}
        </NavListItem>
      </NavList>
      <Info isOpen={openInfo} closeModal={toggleInfoModal} />
      <Settings isOpen={openSettings} closeModal={toggleSettingsModal} />
    </nav>
  );
};

export default Navbar;
