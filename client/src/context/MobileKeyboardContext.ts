import { createContext } from "react";
interface ThemeContextType {
  isKeyboardShown: boolean;
  setIsKeyboardShownOnMobile: (theme: boolean) => void;
}

const MobileKeyboardContext = createContext<ThemeContextType>({
  isKeyboardShown: false,
  setIsKeyboardShownOnMobile: () => {},
});

const isMobileDevice = (): boolean => {
  return (
    /Android/i.test(navigator.userAgent) ||
    /iPhone/i.test(navigator.userAgent) ||
    /iPad/i.test(navigator.userAgent) ||
    /iPod/i.test(navigator.userAgent) ||
    /BlackBerry/i.test(navigator.userAgent) ||
    /Windows Phone/i.test(navigator.userAgent)
  );
};

export { MobileKeyboardContext, isMobileDevice };
