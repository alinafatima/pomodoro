import React, { useContext, useEffect, useState } from 'react';
import TimerContext from './../timer-context';
import {
  LengthControlButtonWrapper,
  LengthControlWrapper,
  UpdateTimerLengthButton,
  UpdateTimerLengthLabel,
} from '../styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';

export const LengthControl = ({ title, type }) => {
  const theme = useTheme();
  const { data, updateData } = useContext(TimerContext);

  const [timerLength, setTimerLength] = useState(data[type]?.minutes);

  const updateLength = (value) => {
    const newData = { ...data };
    newData[type].minutes = value;
    updateData(newData);
  };

  useEffect(() => {
    updateLength(timerLength);
  }, [timerLength]);

  const handleIncrement = () => {
    setTimerLength((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (timerLength !== 1) {
      setTimerLength((prev) => prev - 1);
    }
  };

  return (
    <LengthControlWrapper>
      {title}
      <LengthControlButtonWrapper>
        <UpdateTimerLengthButton
          onClick={handleIncrement}
          disabled={data?.isRunning}
        >
          <FontAwesomeIcon icon={faArrowUp} size="2x" color={theme.quinary} />
        </UpdateTimerLengthButton>
        <UpdateTimerLengthLabel>{timerLength}</UpdateTimerLengthLabel>
        <UpdateTimerLengthButton
          onClick={handleDecrement}
          disabled={data?.isRunning}
        >
          <FontAwesomeIcon icon={faArrowDown} size="2x" color={theme.quinary} />
        </UpdateTimerLengthButton>
      </LengthControlButtonWrapper>
    </LengthControlWrapper>
  );
};
