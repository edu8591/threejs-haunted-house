import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Timer } from "three/addons/misc/Timer.js";
import GUI from "lil-gui";

const loadingManager = new THREE.LoadingManager();
loadingManager.onError = (e) => {
  console.log(e);
  console.log("error");
};
const textureLoader = new THREE.TextureLoader(loadingManager);

const axesHelper = new THREE.AxesHelper(10);
axesHelper.position.y = 5;
/**
 * Base
 */
// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

scene.add(axesHelper);
/**
 * Objects
 */
/**
 * House
 */
// house group
const house = new THREE.Group();
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(4, 2.5, 4),
  new THREE.MeshStandardMaterial()
);
walls.position.y += walls.geometry.parameters.height * 0.5;
house.add(walls);

const roof = new THREE.Mesh(
  new THREE.ConeGeometry(3.5, 1.5, 4),
  new THREE.MeshStandardMaterial()
);
roof.rotation.y = Math.PI * 0.25;
roof.position.y =
  walls.geometry.parameters.height + roof.geometry.parameters.height * 0.5;
house.add(roof);

const door = new THREE.Mesh(
  new THREE.PlaneGeometry(2.1, 2.1),
  new THREE.MeshStandardMaterial({ color: "red" })
);
door.position.y = door.geometry.parameters.height * 0.5 - 0.1;
door.position.z = walls.geometry.parameters.width * 0.5 + 0.01;
house.add(door);
scene.add(house);
// Floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial()
);
floor.rotation.x = -Math.PI * 0.5;
floor.position.y = 0;
scene.add(floor);

// Bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16);
const bushMaterial = new THREE.MeshStandardMaterial({ color: "#89c854" });

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial);
bush1.scale.setScalar(0.5);
// bush1.scale.set(0.5, 0.5, 0.5); // same as above
bush1.position.set(0.8, 0.2, 2.2);
const bush2 = new THREE.Mesh(bushGeometry, bushMaterial);
bush2.scale.setScalar(0.25);
bush2.position.set(1.4, 0.1, 2.1);
const bush3 = new THREE.Mesh(bushGeometry, bushMaterial);
bush3.scale.setScalar(0.4);
bush3.position.set(-0.8, 0.1, 2.2);
const bush4 = new THREE.Mesh(bushGeometry, bushMaterial);
bush4.scale.setScalar(0.14);
bush4.position.set(-1, 0.05, 2.6);

house.add(bush1, bush2, bush3, bush4);

// Graves
const gravesGroup = new THREE.Group();
scene.add(gravesGroup);
const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
const graveMaterial = new THREE.MeshStandardMaterial({ color: "gray" });

for (let i = 0; i < 30; i++) {
  const graveMesh = new THREE.Mesh(graveGeometry, graveMaterial);
  gravesGroup.add(graveMesh);
  const angle = Math.random() * Math.PI * 2;
  // console.log(angle);
  // console.log(Math.cos(angle));

  const radius = 3 + Math.random() * 6;
  // const x = Math.sin(angle) * Math.random() * 10;
  const x = Math.sin(angle) * radius;
  // const z = Math.cos(angle) * Math.random() * 10;
  const z = Math.cos(angle) * radius;
  graveMesh.position.x = x;
  graveMesh.position.z = z;
  graveMesh.position.y = Math.random() * 0.4;
  graveMesh.rotation.x = Math.random() * 0.4 - 0.2;
  graveMesh.rotation.z = Math.random() * 0.4 - 0.2;
  gravesGroup.add(graveMesh);
}
/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight("#ffffff", 0.5);
scene.add(ambientLight);

// Directional light
const directionalLight = new THREE.DirectionalLight("#ffffff", 1.5);
directionalLight.position.set(3, 2, -8);
scene.add(directionalLight);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
// camera.position.x = 4;
camera.position.x = 10;
camera.position.y = 2;
// camera.position.y = 10;
// camera.position.z = 5;
camera.position.z = 10;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const timer = new Timer();

const tick = () => {
  // Timer
  timer.update();
  const elapsedTime = timer.getElapsed();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
