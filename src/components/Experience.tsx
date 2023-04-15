import {
    AmbientLightProbeProps,
    DirectionalLightProps,
    OrthographicCameraProps,
} from "@react-three/fiber";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { useMainContext } from "../context/main.context";

import Floor from "../models/Floor";
import Room from "../models/Room";
import Sizes from "../utils/Sizes";

interface EXperienceProps {}
const Experience: React.FC<EXperienceProps> = () => {
    const sizes = new Sizes();

    const orthographicCameraRef = useRef<OrthographicCameraProps>(null!);
    const directionalLightRef = useRef<DirectionalLightProps>(null!);
    const ambientLightLightRef = useRef<AmbientLightProbeProps>(null!);

    const { colorTheme } = useMainContext();
    const mm = gsap.matchMedia();

    // Dark Mode Light handler
    useEffect(() => {
        if (colorTheme === "light") {
            gsap.to(directionalLightRef.current.color as any, {
                r: 1,
                g: 1,
                b: 1,
            });
            gsap.to(ambientLightLightRef.current.color as any, {
                r: 1,
                g: 1,
                b: 1,
            });
        } else {
            gsap.to(directionalLightRef.current.color as any, {
                r: 0.17,
                b: 0.686,
                g: 0.2313,
            });
            gsap.to(ambientLightLightRef.current.color as any, {
                r: 0.17,
                b: 0.686,
                g: 0.2313,
            });

            gsap.to(directionalLightRef.current, {
                intensity: 0.37,
            });
            gsap.to(ambientLightLightRef.current, {
                intensity: 0.37,
            });
        }
    }, [colorTheme]);
    // Camera control
    useEffect(() => {
        if (!document) return;
        const thirdMoveTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".move-2",
                start: "top top",
                end: "bottom bottom",
                markers: false,
                scrub: true,
            },
        });
        mm.add(" (min-width: 969px) ", () => {
            thirdMoveTimeline.to(
                orthographicCameraRef.current.position as any,
                {
                    x: 3.73,
                    y: 1.6,
                    z: -2.21,
                },
                "same"
            );
        });
        mm.add(
            " (max-width: 968px) ",
            () => {
                thirdMoveTimeline.to(
                    orthographicCameraRef.current.position as any,
                    {
                        x: 0.49,
                        y: 1.12,
                        z: -1.75,
                    }
                );
            },
            "same"
        );
        return () => {};
    }, []);
    return (
        <>
            <ambientLight
                color={[0.17, 0.686, 0.2313]}
                intensity={0.5}
                ref={ambientLightLightRef as any}
            />
            <directionalLight
                castShadow
                position={[-1.5, 7, -0.13]}
                intensity={0.5}
                color={[0.17, 0.686, 0.2313]}
                shadow-mapSize-width={4096}
                shadow-mapSize-height={4096}
                shadow-camera-far={20}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                shadow-normalBias={0.05}
                ref={directionalLightRef as any}
            />

            <orthographicCamera
                left={(-sizes.aspect * sizes.frustumSize) / 2}
                right={(sizes.aspect * sizes.frustumSize) / 2}
                top={sizes.frustumSize / 2}
                bottom={-sizes.frustumSize / 2}
                near={-100}
                far={100}
                position={[0, -0.42, 0]}
                rotation={[0.09, -0.48, 0.07]}
                ref={orthographicCameraRef as any}
            >
                <Room />
                <Floor />
            </orthographicCamera>

            <perspectiveCamera
                args={[35, sizes.aspect, 0.1, 1000]}
                position={[12, 29, 14]}
            />
        </>
    );
};
export default Experience;
