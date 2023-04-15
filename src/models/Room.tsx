import { useGLTF, useVideoTexture } from "@react-three/drei";
import { PrimitiveProps, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";
import GSAPAnimations from "../utils/Animations";

interface RoomProps {}

const assetsName = "room2";

const Room: React.FC<RoomProps> = () => {
    const { scene } = useGLTF(`/models/${assetsName}.glb`);
    const [scrolled, setScroll] = useState<boolean>(null!);
    const [firstCompleted, setFirstCompleted] = useState<boolean>(null!);

    const isDeskTop = useMediaQuery({
        query: "(min-width: 980px)",
    });

    const lerpRef = useRef<{ current: number; target: number }>({
        current: 0,
        target: 0,
    });
    const RoomRef = useRef<PrimitiveProps>(null!);
    const lightRef = useRef<THREE.RectAreaLight>(null!);
    const childRefs = useRef<{ [key: string]: THREE.Object3D<THREE.Event> }>(
        {}
    );

    const texture = useVideoTexture("/textures/PeepoHappy.mp4", {
        loop: true,
        autoplay: true,
        muted: true,
        start: true,
    });

    // FIXME: Move to utils
    const firstIntro = () => {
        const TimeLine = gsap.timeline();
        if (isDeskTop) {
            TimeLine.to(childRefs.current["cube001"].scale, {
                x: 3,
                y: 3,
                z: 3,
                ease: "back.out(2.5)",
                duration: 1.7,
            }).to(".intro-text .animatedis", {
                yPercent: -100,
                stagger: 0.05,
                ease: "back.out(1.5)",
                onComplete: () => {
                    setFirstCompleted(true);
                },
            });
        } else {
            TimeLine.to(childRefs.current["cube001"].scale, {
                x: 4,
                y: 4,
                z: 4,
                ease: "back.out(2.5)",
                duration: 0.7,
            })
                .to(RoomRef.current.position, {
                    z: -1,
                    ease: "power1.out",
                    duration: 0.7,
                })
                .to(".intro-text .animatedis", {
                    yPercent: -100,
                    stagger: 0.05,
                    ease: "back.in(1.5)",
                    onComplete: () => {
                        setFirstCompleted(true);
                    },
                })
                .to(".arrow", {
                    opacity: 1,
                    x: 100,
                });
        }
    };
    // FIXME: Move to utils
    const secondIntro = () => {
        const TimeLine = gsap.timeline();

        if (isDeskTop) {
            TimeLine.to(".intro-text .animatedis", {
                yPercent: 100,
                stagger: 0.07,
                ease: "back.in(1.5)",
            })
                .to(childRefs.current["cube001"].position, {
                    x: 8,
                    y: 0.1,
                    z: 0,
                    ease: "back.out(2.5)",
                    duration: 0.7,
                })
                .to(
                    childRefs.current["cube001"].rotation,
                    {
                        y: 2 * Math.PI + Math.PI / 4,
                    },
                    "same"
                )
                .to(
                    childRefs.current["cube001"].scale,
                    {
                        x: 10,
                        y: 10,
                        z: 10,
                    },
                    "same"
                )
                .to(
                    childRefs.current["cube001"].position,
                    {
                        y: 8.5618,
                        z: 1.324,
                        x: 4,
                    },
                    "same"
                )
                .set(childRefs.current["body"].scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                })
                .to(
                    RoomRef.current.position,
                    {
                        x: 0.5,
                        z: 0.5,
                    },
                    "same"
                )
                .to(childRefs.current["cube001"].scale, {
                    x: 0,
                    y: 0,
                    z: 0,
                    duration: 0.6,
                })
                .to(
                    ".hero-title .animatedis",
                    {
                        yPercent: -100,
                        stagger: 0.07,
                        ease: "back.in(1.5)",
                    },
                    "same1"
                )
                .to(
                    ".hero-subtitle-1 .animatedis",
                    {
                        yPercent: -100,
                        stagger: 0.07,
                        ease: "back.in(1.5)",
                    },
                    "same1"
                )
                .to(
                    ".hero-subtitle-2 .animatedis",
                    {
                        yPercent: -100,
                        stagger: 0.07,
                        ease: "back.in(1.5)",
                    },
                    "same1"
                )
                .to(
                    ".hero-subtitle-3 .animatedis",
                    {
                        yPercent: -100,
                        stagger: 0.07,
                        ease: "back.in(1.5)",
                    },
                    "same1"
                )
                .to(
                    childRefs.current["aquarium"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.7,
                        ease: "back.out(2.2)",
                    },
                    ">-0.5"
                )
                .to(
                    childRefs.current["shelves"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.7,
                        ease: "back.out(2.2)",
                    },
                    ">-0.4"
                )
                .to(
                    childRefs.current["floor_items"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.7,
                        ease: "back.out(2.2)",
                    },
                    ">-0.3"
                )
                .to(
                    childRefs.current["desks"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.7,
                        ease: "back.out(2.2)",
                    },
                    ">-0.2"
                )
                .to(
                    childRefs.current["table_stuff"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.7,
                        ease: "back.out(2.2)",
                    },
                    ">-0.1"
                )
                .to(
                    childRefs.current["computer"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.7,
                        ease: "back.out(2.2)",
                    },
                    ">-0.1"
                )
                .to(childRefs.current["mini_floor"].scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                    duration: 0.7,
                    ease: "back.out(2.2)",
                })
                .to(
                    childRefs.current["chair"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.4,
                        ease: "back.out(2.2)",
                    },
                    "chair"
                )
                .to(
                    childRefs.current["fish"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.4,
                        ease: "back.out(2.2)",
                    },
                    "chair"
                )
                .to(
                    childRefs.current["chair"].rotation,
                    {
                        y: 4 * Math.PI + Math.PI / 4,
                        ease: "power2.out",
                        duration: 1,
                        onComplete: () => {
                            document.body.style.overflow = "auto";
                        },
                    },
                    "chair"
                );
        } else {
            TimeLine.to(childRefs.current["cube001"].position, {
                x: 8,
                y: 0.1,
                z: 0,
                ease: "back.out(2.5)",
                duration: 0.7,
            })
                .to(
                    childRefs.current["cube001"].rotation,
                    {
                        y: 2 * Math.PI + Math.PI / 4,
                    },
                    "same"
                )
                .to(
                    childRefs.current["cube001"].scale,
                    {
                        x: 10,
                        y: 10,
                        z: 10,
                    },
                    "same"
                )
                .to(
                    childRefs.current["cube001"].position,
                    {
                        y: 8.5618,
                        z: 1.324,
                        x: 4,
                    },
                    "same"
                )
                .set(childRefs.current["body"].scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                })

                .to(childRefs.current["cube001"].scale, {
                    x: 0,
                    y: 0,
                    z: 0,
                    duration: 0.7,
                })
                .to(
                    childRefs.current["aquarium"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.5,
                        ease: "back.out(2.2)",
                    },
                    ">-0.5"
                )
                .to(
                    childRefs.current["shelves"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.5,
                        ease: "back.out(2.2)",
                    },
                    ">-0.4"
                )
                .to(
                    childRefs.current["floor_items"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.5,
                        ease: "back.out(2.2)",
                    },
                    ">-0.3"
                )
                .to(
                    childRefs.current["desks"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.5,
                        ease: "back.out(2.2)",
                    },
                    ">-0.2"
                )
                .to(
                    childRefs.current["table_stuff"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.5,
                        ease: "back.out(2.2)",
                    },
                    ">-0.1"
                )
                .to(
                    childRefs.current["computer"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.5,
                        ease: "back.out(2.2)",
                    },
                    ">-0.1"
                )
                .to(childRefs.current["mini_floor"].scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                    duration: 0.5,
                    ease: "back.out(2.2)",
                })
                .to(
                    childRefs.current["chair"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.5,
                        ease: "back.out(2.2)",
                    },
                    "chair"
                )
                .to(
                    childRefs.current["fish"].scale,
                    {
                        x: 1,
                        y: 1,
                        z: 1,
                        duration: 0.5,
                        ease: "back.out(2.2)",
                    },
                    "chair"
                )
                .to(
                    childRefs.current["chair"].rotation,
                    {
                        y: 4 * Math.PI + Math.PI / 4,
                        ease: "power2.out",
                        duration: 1,
                    },
                    "chair"
                )
                .to(
                    RoomRef.current.position,
                    {
                        x: 0.1,
                        z: 0.2,
                        onComplete: () => {
                            document.body.style.overflow = "auto";
                        },
                    },
                    ">-0.5"
                );
        }
    };

    // Mouse move offset animation
    useFrame(() => {
        lerpRef.current.current = gsap.utils.interpolate(
            lerpRef.current.current,
            lerpRef.current.target,
            0.05
        );
        RoomRef.current.rotation.y = lerpRef.current.current;
        // if (window.scrollY > 0 && !scrolled) setScroll(true);
    });
    // Mouse wheel to enable scroll
    useEffect(() => {
        window.addEventListener("wheel", () => {
            if (!scrolled) setScroll(true);
        });

        window.addEventListener("touchmove", () => {
            if (!scrolled) setScroll(true);
        });

        return () => {
            window.removeEventListener("touchmove", () => {});
            window.removeEventListener("wheel", () => {});
        };
    }, []);
    // Mouse move
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            const r =
                ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;

            lerpRef.current.target = r * 0.05;
        });

        return () => {
            window.removeEventListener("mousemove", () => {});
        };
    }, []);

    //  FireIntroAnimation
    useEffect(() => {
        if (!document) return;
        if (!firstCompleted) {
            firstIntro();
        }
        if (scrolled && firstCompleted) {
            secondIntro();
        }
    }, [isDeskTop, scrolled, firstCompleted]);

    // Init children status when assets first loaded
    useEffect(() => {
        GSAPAnimations.initalChildren(scene, texture);
        document.body.style.overflow = " hidden";

        scene.children.forEach((child) => {
            child.scale.set(0, 0, 0);

            if (child.name === "Cube001") {
                child.scale.set(1, 1, 1);
                child.position.set(0, 0, 0);
                child.rotation.set(0, Math.PI / 4, 0);
                child.castShadow = true;
                child.receiveShadow = true;
            }
            if (child) {
                childRefs.current[child.name.toLowerCase()] = child;
            }
        });
        // Add rectLight to scene
        const rectLight = new THREE.RectAreaLight(0xffffff, 1, 0.7, 0.7);
        rectLight.position.set(8, 7, 1);
        rectLight.rotation.x = -Math.PI / 2;
        rectLight.rotation.z = Math.PI / 4;
        lightRef.current = rectLight;
        scene.add(rectLight);
    }, [assetsName]);

    // scrollTrigger animation
    useEffect(() => {
        if (!document) return;
        // Register ScrollTrigger Timeline
        GSAPAnimations.miniFLoorSpread(RoomRef);
        return () => {};
    }, []);

    return (
        <>
            <primitive
                ref={RoomRef}
                object={scene}
                scale={isDeskTop ? [0.08, 0.08, 0.08] : [0.1, 0.1, 0.1]}
                receiveShadow={true}
                position={isDeskTop ? [-1, 0.2, 0] : [0, 0.2, -1]}
            />
        </>
    );
};
export default Room;

useGLTF.preload(`/models/${assetsName}.glb`);
