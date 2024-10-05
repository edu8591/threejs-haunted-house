import * as THREE from "three";

const color = "#86cdff";

export const ambientLight = new THREE.AmbientLight(color, 0.275);

export const directionalLight = new THREE.DirectionalLight(color, 1.5);
directionalLight.position.set(3, 2, -8);
directionalLight.castShadow = true;

export const doorLight = new THREE.PointLight("#ff7d46", 5);

export const ghostLight1 = new THREE.PointLight("#8800ff", 6);
ghostLight1.castShadow = true;
export const ghostLight2 = new THREE.PointLight("#ff0088", 6);
ghostLight2.castShadow = true;
export const ghostLight3 = new THREE.PointLight("#ff0000", 6);
ghostLight3.castShadow = true;
