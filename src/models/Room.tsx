import { useGLTF, useVideoTexture } from "@react-three/drei";
import { PrimitiveProps, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";
import GSAPAnimations from "../utils/Animations";

interface RoomProps {}

const assetsName = "room2";

const Room: React.FC<RoomProps> = () => {
    const { scene } = useGLTF(`/models/${assetsName}.glb`);

    const isMobile = useMediaQuery({
        query: "(min-width: 980px)",
    });

    const lerpRef = useRef<{ current: number; target: number }>({
        current: 0,
        target: 0,
    });
    const RoomRef = useRef<PrimitiveProps>(null!);
    const lightRef = useRef<THREE.RectAreaLight>(null!);

    const texture = useVideoTexture("/textures/PeepoHappy.mp4", {
        loop: true,
        autoplay: true,
        muted: true,
        start: true,
    });

    // Mouse move offset animation
    useFrame(() => {
        lerpRef.current.current = gsap.utils.interpolate(
            lerpRef.current.current,
            lerpRef.current.target,
            0.05
        );
        RoomRef.current.rotation.y = lerpRef.current.current;
    });

    // scrollTrigger animation
    useEffect(() => {
        const timer = setTimeout(() => {
            // Register ScrollTrigger Timeline
            GSAPAnimations.miniFLoorSpread(RoomRef);
        }, 400);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    // Init children status when assets first loaded
    useEffect(() => {
        GSAPAnimations.initalChildren(scene, texture);
    }, [assetsName]);

    // Change the color of the aquarium When theme changed
    useEffect(() => {
        const rectLight = new THREE.RectAreaLight(0xffffff, 1, 1, 0.7);
        rectLight.position.set(8, 7, 1);
        rectLight.rotation.x = -Math.PI / 2;
        rectLight.rotation.z = Math.PI / 4;
        lightRef.current = rectLight;

        scene.add(rectLight);
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

    return (
        <>
            <primitive
                ref={RoomRef}
                object={scene}
                scale={isMobile ? [0.08, 0.08, 0.08] : [0.1, 0.1, 0.1]}
                receiveShadow={true}
                position={[0, 0.2, 0]}
            />
        </>
    );
};
export default Room;

useGLTF.preload(`/models/${assetsName}.glb`);
