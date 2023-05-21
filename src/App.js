import { useState } from 'react';
import './App.css';
import { Timer } from './components/timer';
import { LengthControl } from './components/length-control';
import { AppWrapper, LengthWrapper, MainWrapper } from './styled';

import TimerContext from './timer-context';
import Navbar from './components/navbar';
import { appData } from './context/data';
import { ThemeProvider } from 'styled-components';
import { themes } from './themes/theme';

function App() {
  const [data, setData] = useState(appData);

  const updateData = (newData) => {
    setData(newData);
  };
  return (
    <ThemeProvider
      theme={themes.find((theme) => theme.id === data.currentTheme.value)}
    >
      <TimerContext.Provider value={{ data, updateData }}>
        <AppWrapper>
          <Navbar />
          <MainWrapper>
            <LengthWrapper>
              <LengthControl title="Session Length" type="session" />
              <LengthControl title="Break Length" type="break" />
            </LengthWrapper>
            <Timer />
          </MainWrapper>
        </AppWrapper>
      </TimerContext.Provider>
    </ThemeProvider>
  );
}

export default App;
