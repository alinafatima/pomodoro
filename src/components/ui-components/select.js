import React, { useContext, useState } from 'react';
import TimerContext from '../../timer-context';

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
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
