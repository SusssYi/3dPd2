import React from "react";
import DarkModeToggle from "./DarkModeToggle";

interface HeadProps {}
const Head: React.FC<HeadProps> = () => {
    return (
        <div className="fixed py-8 flex justify-end pd-header max-h-[10vh] w-full h-auto">
            <DarkModeToggle size={30} />
        </div>
    );
};
export default Head;
