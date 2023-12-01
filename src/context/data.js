import { ALARM_SOUND_OPTIONS, THEME_OPTIONS } from '../constants';

export const appData = {
  session: {
    minutes: 10,
    seconds: 0,
  },
  break: {
    minutes: 5,
    seconds: 0,
  },
  isRunning: false,
  currentTheme: THEME_OPTIONS[6],
  currentLanguage: "en", 
  isRtl: false,
  currentAlarm: ALARM_SOUND_OPTIONS[0]
};
