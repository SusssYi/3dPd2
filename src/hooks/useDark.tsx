import { useEffect, useState } from "react";

// eslint-disable-next-line require-jsdoc
export default function useDarkSide() {
    const [theme, setTheme] = useState("light");
    const colorTheme = theme === "dark" ? "light" : "dark";

    // FIXME: When switch to darkMode  after reload page, the darkMode will not be reset as will
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return { colorTheme, setTheme };
}
