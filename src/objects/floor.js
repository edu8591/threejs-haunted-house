import * as THREE from "three";
import { floorTextures } from "../textures";

const floorGeometry = new THREE.PlaneGeometry(20, 20, 100, 100);
const floorMaterial = new THREE.MeshStandardMaterial({
  alphaMap: floorTextures.alpha,
  transparent: true,
  map: floorTextures.color,
  aoMap: floorTextures.ARM,
  roughnessMap: floorTextures.ARM,
  metalnessMap: floorTextures.ARM,
  normalMap: floorTextures.normal,
  displacementMap: floorTextures.displacement,
  displacementScale: 0.4,
  displacementBias: -0.1,
});
export const floor = new THREE.Mesh(floorGeometry, floorMaterial);

floor.receiveShadow = true;
floor.rotation.x = -Math.PI * 0.5;
floor.position.y = 0;
