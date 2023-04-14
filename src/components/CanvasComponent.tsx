import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import Experience from "./Experience";
interface RoomCanvasProps {}
// Canvas
const RoomCanvas: React.FC<RoomCanvasProps> = () => {
    return (
        <Canvas
            shadows
            className=" h-full w-full "
            gl={{
                toneMapping: THREE.CineonToneMapping,
                toneMappingExposure: 1.5,
                outputEncoding: THREE.sRGBEncoding,
                useLegacyLights: true,
            }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <OrbitControls />
            <Experience />
        </Canvas>
    );
};
export default RoomCanvas;
