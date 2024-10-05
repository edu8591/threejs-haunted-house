import * as THREE from "three";

const color = "#86cdff";

export const ambientLight = new THREE.AmbientLight(color, 0.275);

export const directionalLight = new THREE.DirectionalLight(color, 1.5);
directionalLight.position.set(3, 2, -8);
directionalLight.castShadow = true;

directionalLight.shadow.mapSize.width = 256;
directionalLight.shadow.mapSize.height = 256;
directionalLight.shadow.camera.top = 8;
directionalLight.shadow.camera.right = 8;
directionalLight.shadow.camera.bottom = -8;
directionalLight.shadow.camera.left = -8;
directionalLight.shadow.camera.near = 1;
directionalLight.shadow.camera.far = 20;
export const doorLight = new THREE.PointLight("#ff7d46", 5);

export const ghostLight1 = new THREE.PointLight("#8800ff", 6);
ghostLight1.castShadow = true;
ghostLight1.shadow.mapSize.width = 256;
ghostLight1.shadow.mapSize.height = 256;
ghostLight1.shadow.camera.fat = 10;

export const ghostLight2 = new THREE.PointLight("#ff0088", 6);
ghostLight2.castShadow = true;
ghostLight2.shadow.mapSize.width = 256;
ghostLight2.shadow.mapSize.height = 256;
ghostLight2.shadow.camera.fat = 10;

export const ghostLight3 = new THREE.PointLight("#ff0000", 6);
ghostLight3.castShadow = true;
ghostLight3.shadow.mapSize.width = 256;
ghostLight3.shadow.mapSize.height = 256;
ghostLight3.shadow.camera.fat = 10;
