import { gsap } from "gsap";
import * as THREE from "three";
import Sizes from "./Sizes";
const GSAPAnimations = {
    miniFLoorSpread: (roomRef: any) => {
        const mm = gsap.matchMedia();
        const firstMoveTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".move-0",
                start: "top top",
                end: "bottom bottom",
                markers: false,
                scrub: true,
            },
        });
        // second move
        const secondMoveTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".move-1",
                start: "top top",
                end: "bottom bottom",
                markers: false,
                scrub: true,
            },
        });
        const secondPartTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".move-2",
                start: "top top",
            },
        });
        const sizes = new Sizes();
        // When client is on laptop
        mm.add("(min-width: 969px)", () => {
            // first
            firstMoveTimeline.to(roomRef.current.position, {
                x: () => sizes.width * 0.001,
                ease: "power2.inOut",
            });
            // second
            secondMoveTimeline
                .to(
                    roomRef.current.position,
                    {
                        x: () => 0,
                        z: () => sizes.height * 0.002,
                    },
                    "same"
                )
                .to(
                    roomRef.current.scale,
                    {
                        x: 0.3,
                        y: 0.3,
                        z: 0.3,
                    },
                    "same"
                )
                .to(
                    roomRef.current.position,
                    {
                        y: 0.7,
                    },
                    "same"
                );
        });
        // When client is on mobile
        mm.add("(max-width: 968px)", () => {
            firstMoveTimeline.to(roomRef.current.position, {
                x: () => sizes.width * 0.0014,
            });
            secondMoveTimeline
                .to(
                    roomRef.current.position,
                    {
                        x: () => 1.5,
                        z: () => sizes.height * 0.002,
                    },
                    "same"
                )
                .to(
                    roomRef.current.scale,
                    {
                        x: 0.25,
                        y: 0.25,
                        z: 0.25,
                    },
                    "same"
                )
                .to(
                    roomRef.current.position,
                    {
                        y: 0.7 * 2,
                    },
                    "same"
                );
        });
        // Work on all devices
        mm.add("all", () => {
            roomRef.current.children.forEach((child: any) => {
                if (child.name === "Mini_Floor") {
                    secondPartTimeline.add(
                        gsap.to(child.position, {
                            x: -5.44055,
                            z: 13.6135,
                            duration: 0.3,
                            ease: "back.out(2)",
                        })
                    );
                }
                if (child.name === "Mailbox") {
                    secondPartTimeline.add(
                        gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                            ease: "back.out(2)",
                        })
                    );
                }
                if (child.name === "Lamp") {
                    secondPartTimeline.add(
                        gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                            ease: "back.out(2)",
                        })
                    );
                }

                if (child.name === "Dirt") {
                    secondPartTimeline.add(
                        gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                            ease: "back.out(2)",
                        }),
                        "-=0.2"
                    );
                }
                if (child.name === "FloorFirst") {
                    secondPartTimeline.add(
                        gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                            ease: "back.out(2)",
                        }),
                        "-=0.2"
                    );
                }

                if (child.name === "FloorSecond") {
                    secondPartTimeline.add(
                        gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                            ease: "back.out(2)",
                        }),
                        "-=0.2"
                    );
                }

                if (child.name === "FloorThird") {
                    secondPartTimeline.add(
                        gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.3,
                            ease: "back.out(2)",
                        }),
                        "-=0.2"
                    );
                }
                if (child.name === "Flower1") {
                    secondPartTimeline.add(
                        gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.4,
                            ease: "back.out(2)",
                        })
                    );
                }

                if (child.name === "Flower2") {
                    secondPartTimeline.add(
                        gsap.to(child.scale, {
                            x: 1,
                            y: 1,
                            z: 1,
                            duration: 0.5,
                            ease: "back.out(2)",
                        })
                    );
                }
            });
        });
    },
    initalChildren: (scene: any, texture: any) => {
        scene.children.forEach((child: any) => {
            if (child instanceof THREE.Group) {
                child.children.forEach((child1) => {
                    child1.castShadow = true;
                    child1.receiveShadow = true;
                });
            }

            if (child.name === "Aquarium") {
                child.children[0].material = new THREE.MeshPhysicalMaterial({});
                child.children[0].material.roughness = 0;
                child.children[0].material.color.set(0x549dd2);
                child.children[0].material.ior = 3;
                child.children[0].material.transmission = 1;
                child.children[0].material.opacity = 1;
                child.children[0].material.metalness = 0;
            }

            if (child.name === "Computer") {
                child.children[1].material = new THREE.MeshBasicMaterial({
                    map: texture,
                });
            }

            if (child.name === "Mini_Floor") {
                child.position.x = -0.289521;
                child.position.y = -0.820406436920166;
                child.position.z = 8.83;
            }

            if (
                child.name === "Flower1" ||
                child.name === "Flower2" ||
                child.name === "Mailbox" ||
                child.name === "Lamp" ||
                child.name === "FloorFirst" ||
                child.name === "FloorThird" ||
                child.name === "Dirt" ||
                child.name === "FloorSecond"
            ) {
                child.scale.set(0, 0, 0);
            }
        });
    },
    firstIntro: (
        childRefs: any,
        isDeskTop: any,
        setFirstCompleted: any,
        RoomRef: any
    ) => {
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
    },

    secondIntro: (childRefs: any, isDeskTop: boolean, RoomRef: any) => {
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
    },
};

export default GSAPAnimations;
