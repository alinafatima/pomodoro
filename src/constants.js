import Rooster from './sounds/rooster.wav'; 
import BattleShip from './sounds/battleship.wav'; 

export const TIMER_TYPES = {
  session: {
    label: 'Session',
  },
  break: {
    label: 'Break',
  },
};

export const THEME_OPTIONS = [
  {
    value: 'theme1',
    label: 'Stars',
  },
  {
    value: 'theme2',
    label: 'Lotus',
  },
  {
    value: 'theme5',
    label: 'Sea',
  },
  {
    value: 'theme7',
    label: 'Sunset',
  },
  {
    value: 'theme8',
    label: 'Autumn',
  },
];

export const ALARM_SOUND_OPTIONS = [
  {
    value: Rooster,
    label: 'Rooster',
  },
  {
    value: BattleShip,
    label: 'Battle Ship',
  },
];

export const LANGUAGE_OPTIONS = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'ur',
    label: 'Urdu',
  },
];

