import { useState, useEffect } from "react";
import "./App.css";
import { Timer } from "./components/timer";
import { LengthControl } from "./components/length-control";
import {
  AppWrapper,
  LengthWrapper,
  MainWrapper,
  OverlayWrapper,
  MainContainer,
} from "./styled";
import TimerContext from "./timer-context";
import Navbar from "./components/navbar";
import { appData } from "./context/data";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import { themes } from "./themes/theme";
import { TaskList } from "./components/task-list";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation();
  const [data, setData] = useState(appData);
  const language = data.currentLanguage?.value;

  useEffect(() => {
    i18n.changeLanguage(language);
    const newData = { ...data };
    newData["isRtl"] = language === "ur";
    updateData(newData);
  }, [language]);

  const backgroundImage = themes.find(
    (theme) => theme.id === data.currentTheme.value
  )?.backgroundImage;

  const updateData = (newData) => {
    setData(newData);
  };
  return (
    <ThemeProvider
      theme={themes.find((theme) => theme.id === data.currentTheme.value)}
    >
      <TimerContext.Provider value={{ data, updateData }}>
        <AppWrapper backgroundImage={backgroundImage}>
        <Navbar />
          <MainContainer>
            <MainWrapper>
              <LengthWrapper>
                <LengthControl title={t("sessionLength")} type="session" />
                <LengthControl title={t("breakLength")} type="break" />
              </LengthWrapper>
              <Timer />
            </MainWrapper>
            <TaskList />
          </MainContainer>
          <OverlayWrapper />
         </AppWrapper>
      </TimerContext.Provider>
    </ThemeProvider>
  );
}

export default App;
