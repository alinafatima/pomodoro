import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TIMER_TYPES } from './../constants';
import {
  CountdownWrapper,
  DigitsWrapper,
  ProgressCircle,
  TimerButton,
  TimerLabelWrapper,
  TimerWrapper,
  TimerButtonContainer,
} from './../styled';
import TimerContext from './../timer-context';

export const Timer = () => {
  const { data , updateData } = useContext(TimerContext);
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
  const [totalSecondsPassed, setTotalSecondsPassed] = useState(0);
  const [progress, setProgress] = useState(0);
  const [session, setSession] = useState({});
  const [breakTime,setBreakTime] = useState({});

  const alarmSound = new Audio(data?.currentAlarm?.value);

    useEffect(()=>{
      setSession(data?.session);
      setBreakTime(data?.break);
    },[data])

  useEffect(() => {
    setInitialMinutes(data[timerType]?.minutes);
    setInitialSeconds(data[timerType]?.seconds);
    if (!isRunning) {
      setMinutes(data[timerType]?.minutes);
      setSeconds(data[timerType]?.seconds);
    }
  }, [session?.minutes, breakTime?.minutes])

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
    setTotalSecondsPassed(0);
    setProgress(0);
  };

  const updateTimerType = () => {
    alarmSound.play();

    setTimeout(() => {
      alarmSound.pause();
      alarmSound.currentTime = 0;
    }, 4000); 
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
            setTotalSecondsPassed((prev) => prev + 1);
          } else {
            setSeconds(59);
            setTotalSecondsPassed((prev) => prev + 1);
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
    setTotalSecondsPassed(0);
    setProgress(0);
  };

  const formatMinutes = (minutes) => {
    return minutes.toString().padStart(2, '0');
  };

  const formatSeconds = (seconds) => {
    return seconds === 60
      ? '0'.padStart(2, '0')
      : seconds.toString().padStart(2, '0');
  };

  useEffect(() => {
    setProgress(Math.ceil((totalSecondsPassed / (initialMinutes * 60)) * 100));
  }, [totalSecondsPassed]);

  return (
    <TimerWrapper>
      <ProgressCircle  p={progress}>
        <CountdownWrapper>
          <TimerLabelWrapper>{t(TIMER_TYPES[timerType].label)}</TimerLabelWrapper>
          <DigitsWrapper>
            {formatMinutes(minutes)}:{formatSeconds(seconds)}
          </DigitsWrapper>
        </CountdownWrapper>
      </ProgressCircle>
      <TimerButtonContainer>
        <TimerButton onClick={onStart}>{t('start')}</TimerButton>
        <TimerButton onClick={onPauseOrResume}>
          {isStartButtonPressed && !isRunning ? t('resume') : t('pause')}
        </TimerButton>
        <TimerButton onClick={onReset}> {t('reset')}</TimerButton>
      </TimerButtonContainer>
    </TimerWrapper>
  );
};
