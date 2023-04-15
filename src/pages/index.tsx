import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";
import gsap from "gsap";
import { NextSeo } from "next-seo";
import React, { Suspense, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
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
    // FIXME: Add smooth scroll

    return (
        <Suspense fallback={<Loader />}>
            {/* seo */}
            <NextSeo
                title="PeepoHappy"
                description="Welcome to PeepoHappy - your go-to destination for simple and delightful 3D experiences! Our website offers a wide range of 3D content, from games to animations, designed to bring joy to users of all ages. Explore our collection of interactive 3D worlds, engage with our immersive virtual environments, and let your imagination soar! With PeepoHappy, you can discover endless possibilities in the world of 3D. Join us now and experience the magic of PeepoHappy!"
                canonical="https://3d.suyis.me/"
                openGraph={{
                    url: "https://3d.suyis.me/",
                    title: "PeepoHappy",
                    description:
                        " Welcome to PeepoHappy - your go-to destination for simple and delightful 3D experiences! Our website offers a wide range of 3D content, from games to animations, designed to bring joy to users of all ages. Explore our collection of interactive 3D worlds, engage with our immersive virtual environments, and let your imagination soar! With PeepoHappy, you can discover endless possibilities in the world of 3D. Join us now and experience the magic of PeepoHappy!",
                    images: [
                        {
                            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStKzYK-sSYYQEFSki4Q8bg7mrlMD-a60ZfKNhrLwomVl30OrYto8yuQnx-gOf1aed-IGM&usqp=CAU",
                            width: 800,
                            height: 600,
                            alt: "PeepoHappy",
                            type: "image/png",
                        },
                    ],
                }}
                twitter={{
                    handle: "@hentai81318989",
                    site: "@hentai81318989",
                    cardType: "summary_large_image",
                }}
            />
            {/* Models */}
            <div className=" fixed top-0 z-0 h-screen w-screen ">
                <RoomCanvas />
            </div>
            {/* main */}
            <div className=" .section-1  absolute top-0  z-[999] h-auto w-full">
                {/* hero */}
                <section>
                    <div className=" relative mx-auto h-screen max-w-[1100px]  sm:w-[calc(100%-160px)] ">
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1,
                                delay: 3,
                            }}
                            className=" fixed bottom-[3%]  text-black dark:text-white left-[50%] animate-bounce text-2xl md:text-3xl   "
                        >
                            <FaAngleDown />
                        </motion.div>
                        <div className=" absolute top-[55%] left-[45%] font-medium text-base intro-text ">
                            {"Welcome to my portfolio!"
                                .split("")
                                .map((char, index) => {
                                    if (char === " ") {
                                        return (
                                            <span
                                                className="animatedis"
                                                key={index}
                                            >
                                                &nbsp;
                                            </span>
                                        );
                                    }
                                    return (
                                        <span
                                            className="animatedis"
                                            key={index}
                                        >
                                            {char}
                                        </span>
                                    );
                                })}
                        </div>
                        <div className="absolute bottom-[168px] left-0 space-y-2 text-color_text_light dark:text-color_text_dark  md:space-y-4">
                            <h1 className="text-6xl   font-bold overflow-hidden hero-title leading-[73px]">
                                {"PeepoHappy".split("").map((char, index) => {
                                    return (
                                        <span
                                            className="animatedis"
                                            key={index}
                                        >
                                            {char}
                                        </span>
                                    );
                                })}
                            </h1>
                            <p className="hero-main-description overflow-hidden  hero-subtitle-1 ">
                                {"Digital Media Student | 3D Artist"
                                    .split("")
                                    .map((char, index) => {
                                        return (
                                            <span
                                                className="animatedis"
                                                key={index}
                                            >
                                                {char}
                                            </span>
                                        );
                                    })}
                            </p>
                        </div>

                        <div className="absolute top-[calc(50%-120px)] right-0 text-color_text_light  dark:text-color_text_dark">
                            <p className="text-4xl tracking-wide overflow-hidden hero-subtitle-2  leading-[70px] ">
                                {"PeepoHappy".split("").map((char, index) => {
                                    return (
                                        <span
                                            className="animatedis"
                                            key={index}
                                        >
                                            {char}
                                        </span>
                                    );
                                })}
                            </p>
                            <p className="text-4xl tracking-wide overflow-hidden hero-subtitle-3">
                                {"Portfolio".split("").map((char, index) => {
                                    return (
                                        <span
                                            className="animatedis"
                                            key={index}
                                        >
                                            {char}
                                        </span>
                                    );
                                })}
                            </p>
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
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    delay: 3,
                }}
                className="toggle-box   fixed top-0 right-0 z-[999] flex  items-center space-x-2  p-4 "
            >
                <DarkModeToggle />
            </motion.div>
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
