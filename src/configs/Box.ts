import { BoxGeometry, MeshNormalMaterial, Mesh } from "three";

export function Box() {
    const boxGeometry = new BoxGeometry(16, 16, 16);
    const boxMaterial = new MeshNormalMaterial();
    const boxMesh = new Mesh(boxGeometry, boxMaterial);

    return boxMesh;
}
