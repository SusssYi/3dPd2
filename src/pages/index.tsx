import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import React, { Suspense, useEffect, useRef } from "react";
import RoomCanvas from "../components/CanvasComponent";
import DarkModeToggle from "../components/DarkModeToogle";
import HeroSections from "../components/HeroSections";
import useDarkSide from "../hooks/useDark";
import { mockData } from "../utils/mockData";
interface AppProps {}
const Home: React.FC<AppProps> = () => {
    const { setTheme } = useDarkSide();

    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
            setTheme("light");
        };
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            {/* Models */}
            <div className=" fixed top-0 z-0 h-screen w-screen ">
                <RoomCanvas />
            </div>
            {/* main */}
            <div className=" .section-1  absolute top-0  z-[999] h-auto w-full">
                {/* hero */}
                <section>
                    <div className=" relative mx-auto h-screen max-w-[1100px]  sm:w-[calc(100%-160px)] ">
                        <div className="absolute bottom-[168px] left-0 space-y-2 text-color_text_light dark:text-color_text_dark  md:space-y-4">
                            <h1 className="text-6xl  font-bold ">
                                Abigail Bloom
                            </h1>
                            <p className="hero-main-description ">
                                Digital Media Student | 3D Artist
                            </p>
                        </div>

                        <div className="absolute top-[calc(50%-120px)] right-0 text-color_text_light  dark:text-color_text_dark">
                            <p className="text-4xl tracking-wide ">
                                AbigailBloom
                            </p>
                            <p className="text-4xl tracking-wide">Portfolio</p>
                        </div>
                    </div>
                </section>
                {/* sections */}
                {mockData.map((item, index) => (
                    <HeroSections
                        key={item.sectionNumber}
                        data={item}
                        index={index}
                    />
                ))}
            </div>
            {/* ToggleIcons */}
            <div className="toggle-box  fixed top-0 right-0 z-[999] flex  items-center space-x-2  p-4">
                <DarkModeToggle />
            </div>
        </Suspense>
    );
};
export default Home;

// Loader
const Loader = () => {
    const { progress } = useProgress();
    return (
        <div className=" bg-['#f7f0e0] flex h-screen w-screen flex-col items-center justify-center space-x-8 md:space-x-12">
            <div>
                <BouncingDots />
            </div>
            <div className=" text-2xl">{progress}%</div>
        </div>
    );
};

// Bouncing Dots Animation
// eslint-disable-next-line require-jsdoc
function BouncingDots() {
    const dotsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const dots = dotsRef.current;

        gsap.set(dots, { y: "-=50", opacity: 0 });

        const tl = gsap.timeline({ repeat: -1 });
        tl.to(dots[0], {
            y: "+=50",
            opacity: 1,
            duration: 0.5,
            ease: "bounce.out",
        })
            .to(
                dots[1],
                { y: "+=50", opacity: 1, duration: 0.5, ease: "bounce.out" },
                "-=0.25"
            )
            .to(
                dots[2],
                { y: "+=50", opacity: 1, duration: 0.5, ease: "bounce.out" },
                "-=0.25"
            )
            .to(
                dots[0],
                { y: "-=50", opacity: 0, duration: 0.5, ease: "power2.inOut" },
                "+=1.5"
            )
            .to(
                dots[1],
                { y: "-=50", opacity: 0, duration: 0.5, ease: "power2.inOut" },
                "-=0.25"
            )
            .to(
                dots[2],
                { y: "-=50", opacity: 0, duration: 0.5, ease: "power2.inOut" },
                "-=0.25"
            );

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <div className="flex space-x-8">
            <div
                className="h-[50px] w-[50px] rounded-full bg-pink-300"
                ref={(el) => (dotsRef.current[0] = el as any)}
            ></div>
            <div
                className="h-[50px] w-[50px] rounded-full bg-pink-300"
                ref={(el) => (dotsRef.current[1] = el as any)}
            ></div>
            <div
                className="h-[50px] w-[50px] rounded-full bg-pink-300"
                ref={(el) => (dotsRef.current[2] = el as any)}
            ></div>
        </div>
    );
}
