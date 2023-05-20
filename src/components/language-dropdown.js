import React from 'react';
import i18n from '../i18n';
import { DropdownMenu, DropdownMenuListItem } from '../styled';

export const LanguageDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuListItem onClick={() => i18n.changeLanguage('en')}>
        English
      </DropdownMenuListItem>
      <DropdownMenuListItem onClick={() => i18n.changeLanguage('ur')}>
        Urdu
      </DropdownMenuListItem>
    </DropdownMenu>
  );
};
