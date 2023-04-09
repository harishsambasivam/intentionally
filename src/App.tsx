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

const AppContainer = tw.div`flex flex-col h-screen`;

const MainContainer = tw.div`px-8 py-2 overflow-auto scrollbar-hide h-full`;

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
      <AppContainer>
        <TopBar />
        <MainContainer>
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
