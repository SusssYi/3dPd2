import { gsap } from "gsap";
import React, { useEffect } from "react";
import { mockData } from "../utils/mockData";
interface HeroSectionsProps {
    data: typeof mockData[0];
    index: number;
}
const HeroSections: React.FC<HeroSectionsProps> = ({ data, index }) => {
    const {
        title,
        sectionNumber,
        direction,
        titleColor,
        blockColor,
        borderColor,
        posts,
    } = data;

    const sectionRef = React.useRef<HTMLDivElement>(null);
    const progressRef = React.useRef<HTMLDivElement>(null);

    // BorderRadios and progressBar Animation
    useEffect(() => {
        if (!document) return;
        if (direction === "right") {
            gsap.to(sectionRef.current, {
                borderTopLeftRadius: 10,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "top top",
                    scrub: 0.1,
                },
            });
            gsap.to(sectionRef.current, {
                borderBottomLeftRadius: 10,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: 0.1,
                },
            });
        } else {
            gsap.to(sectionRef.current, {
                borderTopRightRadius: 10,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "top top",
                    scrub: 0.1,
                },
            });
            gsap.to(sectionRef.current, {
                borderBottomRightRadius: 10,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "bottom bottom",
                    end: "bottom top",
                    scrub: 0.1,
                },
            });
        }

        gsap.fromTo(
            progressRef.current,
            {
                height: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.2,
                },
                ease: "power2.linear",
            },
            {
                height: "100%",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.2,
                },
                ease: "power2.linear",
            }
        );

        return () => {};
    }, []);

    return (
        <>
            {index === 0 && (
                <div className={`move-${index} section-margin`}></div>
            )}
            <section
                ref={sectionRef}
                className={`relative h-auto  min-h-[100vh] w-full py-[1000px]  px-[4%] shadow-xl lg:w-[50%]  ${
                    direction === "left"
                        ? "mr-auto rounded-tr-[600px] rounded-br-[600px]"
                        : "ml-auto rounded-tl-[600px] rounded-bl-[600px]"
                }  bg-[#faf4e5] dark:bg-color_background_dark `}
            >
                {/* progress bar */}
                <div
                    ref={progressRef}
                    className={`absolute top-0 ${
                        direction === "left" ? "left-0" : "right-0"
                    } dark:bg-color_pink_dark z-[99] h-full  w-[1%] min-w-[10px] bg-color_pink_light`}
                ></div>
                <div className="prose border-b-2  border-color_blue_light pb-[400px] dark:border-color_pink_light">
                    <h1 className=" relative">
                        <span
                            className={`absolute top-4 z-[99]  block origin-left skew-y-[25deg] transform font-medium uppercase ${titleColor} `}
                        >
                            {title}
                        </span>
                        <div
                            className={`section-title-decoration styleOne  border  ${borderColor}`}
                        ></div>
                        <div
                            className={`section-title-decoration styleTwo border ${borderColor}`}
                        ></div>
                        <div
                            className={`section-title-decoration  styleThree ${blockColor} `}
                        ></div>
                        <div className=" absolute  bottom-[-30vh] right-0 ">
                            {sectionNumber}
                        </div>
                    </h1>
                </div>
                <div className="prose mt-8 prose-h3:dark:text-color_text_dark prose-p:dark:text-color_text_dark">
                    {posts.map((post, index) => (
                        <div className="contents" key={index}>
                            <h3 className=" mb-8 font-bold  ">{post.title}</h3>
                            <p>{post.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div className={`move-${index + 1} section-margin`}></div>
        </>
    );
};
export default HeroSections;
