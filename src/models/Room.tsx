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
    GSAPAnimations.initalChildren(scene, texture);

    // Init children status when assets first loaded
    useEffect(() => {
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

    // scrollTrigger animation
    useEffect(() => {
        if (!document) return;
        // Register ScrollTrigger Timeline
        GSAPAnimations.miniFLoorSpread(RoomRef);
    }, []);

    //  FireIntroAnimation
    useEffect(() => {
        if (!document) return;
        if (!firstCompleted) {
            GSAPAnimations.firstIntro(
                childRefs,
                isDeskTop,
                setFirstCompleted,
                RoomRef
            );
        }
        if (scrolled && firstCompleted) {
            GSAPAnimations.secondIntro(childRefs, isDeskTop, RoomRef);
        }
    }, [isDeskTop, scrolled, firstCompleted]);

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
