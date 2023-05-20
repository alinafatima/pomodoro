import React, { useContext, useEffect, useState } from 'react';
import TimerContext from './timer-context';
import {
  LengthControlButtonWrapper,
  LengthControlWrapper,
  UpdateTimerLengthButton,
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export const LengthControl = ({ title, type }) => {
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
    if (timerLength !== 0) {
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
          <FontAwesomeIcon icon={faArrowUp} />
        </UpdateTimerLengthButton>
        {timerLength}
        <UpdateTimerLengthButton
          onClick={handleDecrement}
          disabled={data?.isRunning}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </UpdateTimerLengthButton>
      </LengthControlButtonWrapper>
    </LengthControlWrapper>
  );
};
