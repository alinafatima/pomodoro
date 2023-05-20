import { useState } from 'react';
import './App.css';
import { Timer } from './components/timer';
import { LengthControl } from './components/length-control';
import { LengthWrapper } from './styled';

import TimerContext from './timer-context';
import Navbar from './components/navbar';

const appData = {
  session: {
    minutes: 10,
    seconds: 0,
  },
  break: {
    minutes: 5,
    seconds: 0,
  },
  isRunning: false,
};

function App() {
  const [data, setData] = useState(appData);

  const updateData = (newData) => {
    setData(newData);
  };
  return (
    <TimerContext.Provider value={{ data, updateData }}>
      <Navbar />
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
