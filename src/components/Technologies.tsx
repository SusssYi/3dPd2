import React from "react";

import { Backend, TechnologiesMock } from "../utils/mock";
interface TechnologiesProps {}
const Technologies: React.FC<TechnologiesProps> = () => {
    return (
        <div className="  px-12 xl:px-0 w-full min-h-[50vh]">
            <div className="mx-auto w-full  xl:w-[50%] text-center ">
                <div className="text-xl font-semibold"> Technologies</div>
                <div className=" w-full grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-12 xl:mt-16 gap-y-16 gap-x-8   ">
                    {Object.entries(TechnologiesMock).map(([key, value]) => {
                        const content = value as Backend;

                        return (
                            <div
                                className=" grid_boxes flex flex-col space-y-3 md:space-y-5 "
                                key={content.title}
                            >
                                <h2 className="text-lg font-semibold first-letter:uppercase">
                                    {content.title}
                                </h2>
                                <div className="text-gray-400">
                                    {content.desc}
                                </div>
                                <div className=" flex w-full justify-center space-x-4">
                                    {content.images.map((image) => (
                                        <div
                                            key={image.title}
                                            className="flex justify-center space-y-2 flex-col items-center"
                                        >
                                            <img
                                                src={image.image}
                                                className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                                                alt=""
                                            />
                                            <div className="">
                                                {image.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
export default Technologies;
