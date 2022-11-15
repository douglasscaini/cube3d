import { WebGLRenderer } from "three";

export function Renderer() {
    const canvas = document.getElementById("cube3d") as HTMLCanvasElement;

    const renderer = new WebGLRenderer({
        canvas,
        antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    return renderer;
}
