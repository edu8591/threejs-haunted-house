import * as THREE from "three";
import { graveTextures } from "../textures";

export const graves = new THREE.Group();

const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({
  map: graveTextures.color,
  aoMap: graveTextures.ARM,
  roughnessMap: graveTextures.ARM,
  metalnessMap: graveTextures.ARM,
  normalMap: graveTextures.normal,
});

for (let i = 0; i < 30; i++) {
  const grave = new THREE.Mesh(graveGeometry, graveMaterial);

  const angle = Math.random() * Math.PI * 2;
  const radius = 3 + Math.random() * 4;

  const x = Math.sin(angle) * radius;
  const z = Math.cos(angle) * radius;

  grave.position.x = x;
  grave.position.z = z;
  grave.position.y = Math.random() * 0.4;
  grave.rotation.x = Math.random() * 0.4 - 0.2;
  grave.rotation.z = Math.random() * 0.4 - 0.2;

  graves.add(grave);
}

graves.children.forEach((grave) => {
  grave.castShadow = true;
  grave.receiveShadow = true;
});
