import * as THREE from "three";
import {
  bushTextures,
  doorTextures,
  roofTextures,
  wallsTextures,
} from "../textures";
import { doorLight } from "../lights";

export const house = new THREE.Group();

const wallsGeometry = new THREE.BoxGeometry(4, 2.5, 4);
const wallsMaterial = new THREE.MeshStandardMaterial({
  map: wallsTextures.color,
  aoMap: wallsTextures.ARM,
  roughnessMap: wallsTextures.ARM,
  metalnessMap: wallsTextures.ARM,
  normalMap: wallsTextures.normal,
});
const walls = new THREE.Mesh(wallsGeometry, wallsMaterial);
walls.position.y += wallsGeometry.parameters.height * 0.5;

house.add(walls);

const roofGeometry = new THREE.ConeGeometry(3.5, 1.5, 4);
const roofMaterial = new THREE.MeshStandardMaterial({
  map: roofTextures.color,
  aoMap: roofTextures.ARM,
  roughnessMap: roofTextures.ARM,
  metalnessMap: roofTextures.ARM,
  normalMap: roofTextures.normal,
});

const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.rotation.y = Math.PI * 0.25;
roof.position.y =
  wallsGeometry.parameters.height + roofGeometry.parameters.height * 0.5;

house.add(roof);

const doorGeometry = new THREE.PlaneGeometry(2.1, 2.1, 100, 100);
const doorMaterial = new THREE.MeshStandardMaterial({
  map: doorTextures.color,
  alphaMap: doorTextures.alpha,
  transparent: true,
  aoMap: doorTextures.ambientOcclusion,
  displacementMap: doorTextures.height,
  displacementScale: 0.1,
  displacementBias: -0.04,
  normalMap: doorTextures.normal,
  metalnessMap: doorTextures.metalness,
  roughnessMap: doorTextures.roughness,
});

const door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.y = doorGeometry.parameters.height * 0.5 - 0.1;
door.position.z = wallsGeometry.parameters.width * 0.5 + 0.01;

house.add(door);

// doorLight.position.set(0, 2.2, 2.5);
doorLight.position.z = wallsGeometry.parameters.width * 0.5 + 0.1;
doorLight.position.y = door.geometry.parameters.height + 0.4;
house.add(doorLight);
const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({
  color: "#ccffcc",
  map: bushTextures.color,
  aoMap: bushTextures.ARM,
  roughnessMap: bushTextures.ARM,
  metalnessMap: bushTextures.ARM,
  normalMap: bushTextures.normal,
});

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.scale.setScalar(0.5);
bush1.rotation.x = -0.75;
// bush1.scale.set(0.5, 0.5, 0.5); // same as above
bush1.position.set(0.8, 0.2, 2.2);
const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.scale.setScalar(0.25);
bush2.position.set(1.4, 0.1, 2.1);
bush2.rotation.x = -0.75;
const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.scale.setScalar(0.4);
bush3.position.set(-0.8, 0.1, 2.2);
bush3.rotation.x = -0.75;
const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.scale.setScalar(0.14);
bush4.position.set(-1, 0.05, 2.6);
bush4.rotation.x = -0.75;

house.add(bush1, bush2, bush3, bush4);
