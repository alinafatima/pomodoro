import React from 'react';
import { DropdownMenu, DropdownMenuListItem } from '../styled';

export const LanguageDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuListItem>English</DropdownMenuListItem>
      <DropdownMenuListItem>Urdu</DropdownMenuListItem>
    </DropdownMenu>
  );
};
