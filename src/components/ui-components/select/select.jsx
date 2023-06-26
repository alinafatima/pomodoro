import React, { useContext, useState } from 'react';
import TimerContext from './../../../timer-context';
import { SelectWrapper, StyledSelect } from './styled';

const Select = ({ options, field }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const { data, updateData } = useContext(TimerContext);

  const updateInContext = (value) => {
    const newData = { ...data };
    newData[field] = value;
    updateData(newData);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    updateInContext(options.find((opt) => opt.value === event.target.value));
  };

  return (
    <SelectWrapper>
      <StyledSelect value={selectedOption} onChange={handleSelectChange}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;
