import GUI from "lil-gui";
import { floor } from "../objects/floor";

export const gui = new GUI();

gui
  .add(floor.material, "displacementScale")
  .min(0)
  .max(1)
  .step(0.001)
  .name("Floor displacement scale");
gui
  .add(floor.material, "displacementBias")
  .min(-1)
  .max(1)
  .step(0.001)
  .name("Floor displacement Bias");
