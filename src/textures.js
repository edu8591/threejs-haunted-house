import * as THREE from "three";

const loadingManager = new THREE.LoadingManager();
loadingManager.onError = (e) => {
  console.log(e);
  console.log("error");
};

const textureLoader = new THREE.TextureLoader(loadingManager);
//! floor
const floorPath = "./floor/brown_mud_leaves_01_1k";
export const floorTextures = {
  alpha: textureLoader.load("./floor/alpha.jpg"),
  ARM: textureLoader.load(`${floorPath}/brown_mud_leaves_01_arm_1k.webp`),
  color: textureLoader.load(`${floorPath}/brown_mud_leaves_01_diff_1k.webp`),
  displacement: textureLoader.load(
    `${floorPath}/brown_mud_leaves_01_disp_1k.webp`
  ),
  normal: textureLoader.load(`${floorPath}/brown_mud_leaves_01_nor_gl_1k.webp`),
};
textureModifier(floorTextures, 8, 8);

//! wall
const wallsPath = "./wall/rock_wall_09_1k";
export const wallsTextures = {
  color: textureLoader.load(`${wallsPath}/rock_wall_09_diff_1k.webp`),
  ARM: textureLoader.load(`${wallsPath}/rock_wall_09_arm_1k.webp`),
  normal: textureLoader.load(`${wallsPath}/rock_wall_09_nor_gl_1k.webp`),
};
textureModifier(wallsTextures, 3, 3);

//! roof
const roofPath = "./roof/roof_slates_02_1k";
export const roofTextures = {
  color: textureLoader.load(`${roofPath}/roof_slates_02_diff_1k.webp`),
  ARM: textureLoader.load(`${roofPath}/roof_slates_02_arm_1k.webp`),
  normal: textureLoader.load(`${roofPath}/roof_slates_02_nor_gl_1k.webp`),
};
textureModifier(roofTextures, 3, 1);

//! bush
const bushPath = "./bush/forest_leaves_03_1k";
export const bushTextures = {
  color: textureLoader.load(`${bushPath}/forest_leaves_03_diff_1k.webp`),
  ARM: textureLoader.load(`${bushPath}/forest_leaves_03_arm_1k.webp`),
  normal: textureLoader.load(`${bushPath}/forest_leaves_03_nor_gl_1k.webp`),
};
textureModifier(bushTextures, 2, 1);

//! grave
const gravePath = "./grave/seaside_rock_1k";
export const graveTextures = {
  color: textureLoader.load(`${gravePath}/seaside_rock_diff_1k.webp`),
  ARM: textureLoader.load(`${gravePath}/seaside_rock_arm_1k.webp`),
  normal: textureLoader.load(`${gravePath}/seaside_rock_nor_gl_1k.webp`),
};
textureModifier(graveTextures, 0.3, 0.4);

//! door
const doorPath = "./door";
export const doorTextures = {
  alpha: textureLoader.load(`${doorPath}/alpha.webp`),
  ambientOcclusion: textureLoader.load(`${doorPath}/ambientOcclusion.webp`),
  color: textureLoader.load(`${doorPath}/color.webp`),
  height: textureLoader.load(`${doorPath}/height.webp`),
  metalness: textureLoader.load(`${doorPath}/metalness.webp`),
  normal: textureLoader.load(`${doorPath}/normal.webp`),
  roughness: textureLoader.load(`${doorPath}/roughness.webp`),
};
doorTextures.color.colorSpace = THREE.SRGBColorSpace;

function textureModifier(textures, repeatS, repeatT) {
  Object.entries(textures).forEach(([key, texture]) => {
    if (key === "alpha") return;

    if (key === "color") {
      texture.colorSpace = THREE.SRGBColorSpace;
    }

    texture.repeat.set(repeatS, repeatT);
    if (repeatS > 1) texture.wrapS = THREE.RepeatWrapping;
    if (repeatT > 1) texture.wrapT = THREE.RepeatWrapping;
  });
}
