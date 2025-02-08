import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { body } from "../../this-car/body";
import { fontBrighter } from "../font-loader";
import { globalVar } from "~/game/global-var";
export const addUsernameToCar = () => {
  const geometry = new TextGeometry(globalVar.carData.username, {
    font: fontBrighter,
    size: 2.5 / globalVar.carData.username.length,
    depth: 0.05,
    // curveSegments: 2,
  });
  const textMaterial = new THREE.MeshStandardMaterial({
    color: 0xfb3f0f,
  });
  const usernameText = new THREE.Mesh(geometry, textMaterial);
  usernameText.position.set(-0.6, -0.2, 2);
  body.add(usernameText);
};
