import { createContext, useContext, useState } from "react";

type MainContextType = {
  colorTheme: string;
  changeColorTheme: (theme: string) => void;
};

const MainContext = createContext<MainContextType>(null!);

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorTheme, setColorTheme] = useState<string>("light");

  const changeColorTheme = (theme: string) => {
    setColorTheme(theme);
  };
  return (
    <MainContext.Provider
      value={{
        colorTheme: colorTheme,
        changeColorTheme,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => {
  return useContext(MainContext);
};

export { MainProvider, useMainContext };
