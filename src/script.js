import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Timer } from "three/addons/misc/Timer.js";
import { floor } from "./objects/floor";
import { gui } from "./gui";
import { house } from "./objects/house";
import { graves } from "./objects/graves";
import {
  ambientLight,
  directionalLight,
  ghostLight1,
  ghostLight2,
  ghostLight3,
} from "./lights";

const loadingManager = new THREE.LoadingManager();
loadingManager.onError = (e) => {
  console.log(e);
  console.log("error");
};

const axesHelper = new THREE.AxesHelper(10);
axesHelper.position.y = 5;

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

scene.add(axesHelper);
scene.add(house);
scene.add(floor);
scene.add(graves);
scene.add(ambientLight);
scene.add(directionalLight);
scene.add(ghostLight1);
scene.add(ghostLight2);
scene.add(ghostLight3);

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

  // Ghosts
  const ghost1Angle = elapsedTime * 0.5;
  ghostLight1.position.x = Math.cos(ghost1Angle) * 4;
  ghostLight1.position.z = Math.sin(ghost1Angle) * 4;
  ghostLight1.position.y =
    Math.sin(ghost1Angle) *
    Math.sin(ghost1Angle * 2.34) *
    Math.sin(ghost1Angle * 3.45);

  const ghost2Angle = -elapsedTime * 0.3;
  ghostLight2.position.x = Math.cos(ghost2Angle) * 5;
  ghostLight2.position.z = Math.sin(ghost2Angle) * 5;
  ghostLight2.position.y =
    Math.sin(ghost2Angle) *
    Math.sin(ghost2Angle * 2.34) *
    Math.sin(ghost2Angle * 3.45);

  const ghost3Angle = elapsedTime * 0.23;
  ghostLight3.position.x = Math.cos(ghost3Angle) * 6;
  ghostLight3.position.z = Math.sin(ghost3Angle) * 6;
  ghostLight3.position.y =
    Math.sin(ghost3Angle) *
    Math.sin(ghost3Angle * 2.34) *
    Math.sin(ghost3Angle * 3.45);
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
