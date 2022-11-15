import { useEffect } from "react";

import { Scene } from "three";

import { Camera } from "./configs/Camera";
import { Renderer } from "./configs/Renderer";
import { AmbientLight } from "./configs/AmbientLight";
import { SpotLight } from "./configs/SpotLight";
import { Box } from "./configs/Box";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import "../src/global.css";

export function App() {
    useEffect(() => {
        const scene = new Scene();
        const camera = Camera();

        const renderer = Renderer();
        document.body.appendChild(renderer.domElement);

        const ambientLight = AmbientLight();
        const spotLight = SpotLight();
        const boxMesh = Box();
        scene.add(ambientLight);
        scene.add(spotLight);
        scene.add(boxMesh);

        const controls = new OrbitControls(camera, renderer.domElement);

        const animate = () => {
            boxMesh.rotation.x += 0.002;
            boxMesh.rotation.y += 0.002;
            controls.update();
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        };

        animate();
    });

    return (
        <>
            <canvas id="cube3d" />
        </>
    );
}
