import "./App.css";
import tw from "tailwind-styled-components";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Home from "./layouts/Home";
import { Routes, Route } from "react-router-dom";
import Calendar from "./layouts/Calendar";
import Intention from "./layouts/Intention";
import Stats from "./layouts/Stats";
import {
  MobileKeyboardContext,
  isMobileDevice,
} from "./context/MobileKeyboardContext";
import { useState } from "react";

interface AppContainerProps {
  $isKeyboardShown: boolean;
}

// fit the content when keyboard is enabled in mobile devices
const AppContainer = tw.div<AppContainerProps>`
${(p) => (p.$isKeyboardShown ? "h-fit" : "h-screen")}
flex flex-col absolute inset-0`;

// fit the content when keyboard is enabled in mobile devices
const MainContainer = tw.div<AppContainerProps>`
${(p) => (p.$isKeyboardShown ? "h-fit" : "h-full")}
px-8 overflow-auto scrollbar-hide`;

function App() {
  const [isKeyboardShown, setIsKeyboardShown] = useState<boolean>(false);

  const setIsKeyboardShownOnMobile = (b: boolean) => {
    console.log(isMobileDevice());
    setIsKeyboardShown(isMobileDevice() && b);
  };

  return (
    <MobileKeyboardContext.Provider
      value={{ isKeyboardShown, setIsKeyboardShownOnMobile }}
    >
      <AppContainer $isKeyboardShown={isKeyboardShown}>
        <TopBar />
        <MainContainer $isKeyboardShown={isKeyboardShown}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/intentionally" element={<Intention />} />
          </Routes>
        </MainContainer>
        {!isKeyboardShown && <NavBar />}
      </AppContainer>
    </MobileKeyboardContext.Provider>
  );
}

export default App;
