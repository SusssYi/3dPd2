import { useTheme } from "next-themes";
import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

interface DarkModeToggleProps {
    size: number;
}
const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ size }) => {
    const { theme, setTheme } = useTheme();
    const toggleDarkMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <DarkModeSwitch
            style={{}}
            checked={theme === "dark"}
            onChange={toggleDarkMode}
            size={size}
        />
    );
};
export default DarkModeToggle;
