import { useState } from 'react';
import './App.css';
import { LengthControl } from './length-control';
import { LengthWrapper } from './styled';
import { Timer } from './timer';
import TimerContext from './timer-context';

const appData = {
  session: {
    minutes: 10,
    seconds: 0,
  },
  break: {
    minutes: 5,
    seconds: 0,
  },
};

function App() {
  const [data, setData] = useState(appData);

  const updateData = (newData) => {
    setData(newData);
  };
  return (
    <TimerContext.Provider value={{ data, updateData }}>
      <div className="App">
        <LengthWrapper>
          <LengthControl title="Session Length" type="session" />
          <LengthControl title="Break Length" type="break" />
        </LengthWrapper>
        <Timer />
      </div>
    </TimerContext.Provider>
  );
}

export default App;
