import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
interface FloorProps {}
const Floor: React.FC<FloorProps> = () => {
    const firstCircle = useRef<THREE.Mesh>(null!);
    const secondCircle = useRef<THREE.Mesh>(null!);
    const thirdCircle = useRef<THREE.Mesh>(null!);

    // Floor Animation
    useEffect(() => {
        if (!document) return;
        gsap.timeline({
            scrollTrigger: {
                trigger: ".move-0",
                start: "top top",
                end: "bottom bottom",
                markers: false,
                scrub: 0.4,
            },
        }).to(firstCircle.current?.scale, {
            x: 15,
            y: 15,
            z: 15,
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: ".move-1",
                start: "top top",
                end: "bottom bottom",
                markers: false,
                scrub: 0.4,
            },
        }).to(secondCircle.current?.scale, {
            x: 15,
            y: 15,
            z: 15,
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: ".move-2",
                start: "top top",
                end: "bottom bottom",
                markers: false,
                scrub: 0.4,
            },
        }).to(thirdCircle.current?.scale, {
            x: 15,
            y: 15,
            z: 15,
        });
    }, []);

    return (
        <>
            <mesh
                rotation-x={-Math.PI / 2}
                receiveShadow
                scale={2}
                position-y={-0.11}
                position-x={2}
            >
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial
                    color={new THREE.Color("#f7f0e0")}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh
                rotation-x={-Math.PI / 2}
                receiveShadow
                ref={firstCircle}
                position={[0, -0.1, 0]}
                scale={[0, 0, 0]}
            >
                <circleGeometry args={[5, 64]} />
                <meshStandardMaterial
                    color={new THREE.Color(new THREE.Color(0xe5a1aa))}
                />
            </mesh>
            <mesh
                position-x={2}
                rotation-x={-Math.PI / 2}
                receiveShadow
                ref={secondCircle}
                position={[0, -0.09, 0]}
                scale={[0, 0, 0]}
            >
                <circleGeometry args={[5, 64]} />
                <meshStandardMaterial
                    color={new THREE.Color(new THREE.Color(0x8395cd))}
                />
            </mesh>
            <mesh
                position-x={2}
                rotation-x={-Math.PI / 2}
                receiveShadow
                ref={thirdCircle}
                position={[0, -0.08, 0]}
                scale={[0, 0, 0]}
            >
                <circleGeometry args={[5, 64]} />
                <meshStandardMaterial
                    color={new THREE.Color(new THREE.Color(0x7ad0ac))}
                />
            </mesh>
        </>
    );
};
export default Floor;
