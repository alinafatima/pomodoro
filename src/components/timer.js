import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TIMER_TYPES } from './../constants';
import {
  CountdownWrapper,
  DigitsWrapper,
  TimerButton,
  TimerWrapper,
} from './../styled';
import TimerContext from './../timer-context';

export const Timer = () => {
  const { data, updateData } = useContext(TimerContext);
  const { t } = useTranslation();
  const [timerType, setTimerType] = useState('session');
  const [initialMinutes, setInitialMinutes] = useState(
    data[timerType]?.minutes
  );
  const [initialSeconds, setInitialSeconds] = useState(
    data[timerType]?.seconds
  );
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isStartButtonPressed, setIsStartButtonPressed] = useState(false);

  const alarmSound = new Audio(
    'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
  );

  useEffect(() => {
    setInitialMinutes(data[timerType]?.minutes);
    setInitialSeconds(data[timerType]?.seconds);
    if (!isRunning) {
      setMinutes(data[timerType]?.minutes);
      setSeconds(data[timerType]?.seconds);
    }
  }, [data.session, data.break]);

  useEffect(() => {
    const newData = { ...data };
    newData['isRunning'] = isRunning;
    updateData(newData);
  }, [isRunning]);

  const updateMinutesAndSeconds = (timerType) => {
    setInitialMinutes(data[timerType]?.minutes);
    setInitialSeconds(data[timerType]?.seconds);
    setMinutes(data[timerType]?.minutes);
    setSeconds(data[timerType]?.seconds);
  };

  const updateTimerType = () => {
    alarmSound.play();
    if (timerType === 'session') {
      setTimerType('break');
      updateMinutesAndSeconds('break');
    } else {
      setTimerType('session');
      updateMinutesAndSeconds('session');
    }
  };

  useEffect(() => {
    let secondsTimer;

    if (isRunning) {
      secondsTimer = setTimeout(() => {
        if (minutes || seconds) {
          if (seconds) {
            setSeconds((prev) => prev - 1);
          } else {
            setSeconds(59);
            setMinutes((prev) => prev - 1);
          }
        } else {
          updateTimerType();
        }
      }, 1000);
    }

    return () => clearInterval(secondsTimer);
  }, [seconds, isRunning, minutes]);

  const onStart = () => {
    setIsStartButtonPressed(true);
    setIsRunning(true);
  };
  const onPauseOrResume = () => {
    if (isStartButtonPressed && !isRunning) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  };
  const onReset = () => {
    setIsStartButtonPressed(false);
    setIsRunning(false);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  const formatMinutes = (minutes) => {
    return minutes.toString().padStart(2, '0');
  };

  const formatSeconds = (seconds) => {
    return seconds === 60
      ? '0'.padStart(2, '0')
      : seconds.toString().padStart(2, '0');
  };

  return (
    <TimerWrapper>
      <CountdownWrapper>
        <div>{TIMER_TYPES[timerType].label}</div>
        <DigitsWrapper>
          {formatMinutes(minutes)}:{formatSeconds(seconds)}
        </DigitsWrapper>
      </CountdownWrapper>
      <div>
        <TimerButton onClick={onStart}>{t('start')}</TimerButton>
        <TimerButton onClick={onPauseOrResume}>
          {isStartButtonPressed && !isRunning ? t('resume') : t('pause')}
        </TimerButton>
        <TimerButton onClick={onReset}> {t('reset')}</TimerButton>
      </div>
    </TimerWrapper>
  );
};