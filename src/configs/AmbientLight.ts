import { AmbientLightProbe } from "three";

export function AmbientLight() {
    const ambientLight = new AmbientLightProbe(0xffffff, 0.5);
    ambientLight.castShadow = true;

    return ambientLight;
}
