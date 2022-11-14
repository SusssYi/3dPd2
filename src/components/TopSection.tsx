import React from "react";

interface TopSectionProps {}
const TopSection: React.FC<TopSectionProps> = () => {
    return (
        <div className="mt-[10vh] w-full h-[90vh] px-12 xl:px-0 ">
            <div className=" w-full xl:w-[50%] mx-auto h-full flex">
                <div className=" flex-1 flex flex-col justify-center h-full space-y-4 ">
                    <div className="text-title">Hello.</div>
                    <div className="text-title">I'm Adeleye</div>
                    <div className="text-title">Temiloluwa.</div>
                    <div className="text-gray-400 ">
                        I'm a fullstack software engineer based in Abeokuta.
                        I've work with the T3 stack and MERN stack most of the
                        time.
                    </div>
                    <div>Links</div>
                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    );
};
export default TopSection;
