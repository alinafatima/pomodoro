import React from 'react';
import { useContext } from 'react';
import i18n from '../i18n';
import { DropdownMenu, DropdownMenuListItem } from '../styled';
import TimerContext from '../timer-context';

export const LanguageDropdown = () => {

  const { data, updateData } = useContext(TimerContext);

   const onLanguageChange = (language) => {
    i18n.changeLanguage(language);
    const newData = { ...data };
    newData['currentLanguage'] = language;
    newData['isRtl'] = language === 'ur';
    updateData(newData);
   }; 

  return (
    <DropdownMenu>
      <DropdownMenuListItem onClick={() => onLanguageChange('en')}>
        English
      </DropdownMenuListItem>
      <DropdownMenuListItem onClick={() => onLanguageChange('ur')}>
        Urdu
      </DropdownMenuListItem>
    </DropdownMenu>
  );
};
