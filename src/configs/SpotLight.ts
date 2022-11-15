import { SpotLight as SpotLightConfig } from "three";

export function SpotLight() {
    const spotLight = new SpotLightConfig(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);

    return spotLight;
}
