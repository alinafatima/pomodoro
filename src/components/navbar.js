import React, { useState } from 'react';
import { NavBarWrapper, NavList, NavListItem } from '../styled';
import { Info } from './info';
import { Settings } from './settings';
import { HoverableFontAwesomeIcon } from './../styled';
import {
  faGear,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { SpotifyEmbed } from './spotifyEmbed';

const Navbar = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const toggleInfoModal = () => setOpenInfo((prev) => !prev);
  const toggleSettingsModal = () => setOpenSettings((prev) => !prev);

  return (
    <NavBarWrapper>
       <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: 5,
              marginLeft: 20,
              zIndex: 3,
              position: 'absolute',
            }}
          >
            <SpotifyEmbed />
          </div>
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
      </NavList>
      <Info isOpen={openInfo} closeModal={toggleInfoModal} />
      <Settings isOpen={openSettings} closeModal={toggleSettingsModal} />
    </NavBarWrapper>
  );
};

export default Navbar;
