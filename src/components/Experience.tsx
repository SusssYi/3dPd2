import {
    AmbientLightProbeProps,
    DirectionalLightProps,
    OrthographicCameraProps,
} from "@react-three/fiber";
import { gsap } from "gsap";
import { useControls } from "leva";
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

    const { far, intensity, mapSize, normalBias, position } = useControls(
        "directionalLight",
        {
            mapSize: { value: 4096, min: 0, max: 4096, step: 1 },
            far: { value: 20, min: 0, max: 20, step: 1 },
            normalBias: { value: 0.05, min: 0, max: 1, step: 0.01 },
            intensity: { value: 0.5, min: 0, max: 1, step: 0.01 },
            position: {
                value: [-1.5, 7, -0.13],
                min: -10,
                max: 100,
                step: 0.01,
            },
            color: {
                value: {
                    r: 0,
                    g: 0,
                    b: 0,
                },
            },
        }
    );

    const mm = gsap.matchMedia();
    const { rotation, cameraPosition } = useControls("cameraRotation", {
        rotation: { value: [0.09, -0.48, 0.07], min: -10, max: 10, step: 0.01 },
        cameraPosition: { value: [0, -0.42, 0], min: -10, max: 10, step: 0.01 },
        lightPosition: { value: [-1.5, 7, 3], min: -10, max: 10, step: 0.01 },
    });

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
        console.log("colorThemeChanged");
    }, [colorTheme]);
    // Camera control
    useEffect(() => {
        const timer = setTimeout(() => {
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
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <>
            <ambientLight
                color={[0.17, 0.686, 0.2313]}
                intensity={intensity}
                ref={ambientLightLightRef as any}
            />
            <directionalLight
                castShadow
                position={position}
                intensity={intensity}
                color={[0.17, 0.686, 0.2313]}
                shadow-mapSize-width={mapSize}
                shadow-mapSize-height={mapSize}
                shadow-camera-far={far}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                shadow-normalBias={normalBias}
                ref={directionalLightRef as any}
            />

            <orthographicCamera
                left={(-sizes.aspect * sizes.frustumSize) / 2}
                right={(sizes.aspect * sizes.frustumSize) / 2}
                top={sizes.frustumSize / 2}
                bottom={-sizes.frustumSize / 2}
                near={-100}
                far={100}
                position={[...cameraPosition]}
                rotation={[rotation[0], rotation[1], rotation[2]]}
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
