import { PerspectiveCamera } from "three";

export function Camera() {
    const camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.9, 1000);
    camera.position.z = 96;

    return camera;
}
