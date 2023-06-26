import React, { useState } from 'react';
import { NavBarWrapper, NavList, NavListItem } from '../styled';
import { Info } from './info';
import { LanguageDropdown } from './language-dropdown';
import { Settings } from './settings';
import { HoverableFontAwesomeIcon } from './../styled';
import {
  faGlobe,
  faGear,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

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
    <NavBarWrapper>
      <NavList>
        <NavListItem onClick={toggleInfoModal}>
          <HoverableFontAwesomeIcon
            icon={faCircleInfo}
            color={'white'}
            height={70}
            width = {70}
          />
        </NavListItem>
        <NavListItem onClick={toggleSettingsModal}>
          <HoverableFontAwesomeIcon icon={faGear} color={'white'}  />
        </NavListItem>
        <NavListItem onClick={toggleLanguageDropdown}>
          <HoverableFontAwesomeIcon icon={faGlobe} color={'white'} />
          {openLanguageDropdown && <LanguageDropdown />}
        </NavListItem>
      </NavList>
      <Info isOpen={openInfo} closeModal={toggleInfoModal} />
      <Settings isOpen={openSettings} closeModal={toggleSettingsModal} />
    </NavBarWrapper>
  );
};

export default Navbar;
