import { gsap } from "gsap";
import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useMainContext } from "../context/main.context";
import useDarkSide from "../hooks/useDark";
const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { colorTheme, setTheme } = useDarkSide();
    const { changeColorTheme } = useMainContext();

    // Toggle Animation
    const handleToggle = () => {
        const tl = gsap.timeline();
        tl.to(".toggle-box", { opacity: 0, duration: 0.2 })
            .to(".toggle-container", { width: 0, opacity: 0, duration: 0.5 })
            .to(".toggle-label", { opacity: 0, duration: 0.5 })
            .call(() => setIsDarkMode(!isDarkMode))
            .to(".toggle-box", { opacity: 1, duration: 0.2 })
            .to(".toggle-container", {
                width: "2.5rem",
                opacity: 1,
                duration: 0.5,
            })
            .to(".toggle-label", { opacity: 1, duration: 0.5 });

        setIsDarkMode(!isDarkMode);
        setTheme(colorTheme);
        changeColorTheme(colorTheme);
    };

    return (
        <>
            <div className="toggle-label text-black dark:text-white ">
                {isDarkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
            </div>
            <div
                className={`toggle-container group     relative flex   h-4 w-[2.5rem] cursor-pointer items-center justify-start rounded-full py-3 px-4 ${
                    isDarkMode ? "bg-gray-700" : "bg-pink-500"
                }`}
                onClick={handleToggle}
            >
                <div
                    className={`toggle-circle absolute  right-1 h-3 w-3 rounded-full
           bg-white transition-all duration-300
           ease-in-out
           group-hover:-scale-75
          ${isDarkMode ? "left-1" : "ring-1"} `}
                ></div>
            </div>
        </>
    );
};

export default DarkModeToggle;
