import * as THREE from "three";
import { gunStative } from "./gun-stative";

export const body = () => {
  const bodyGeometry = new THREE.BoxGeometry(2, 0.7, 4);
  const material = new THREE.MeshStandardMaterial({
    color: 0xb27569,
    lightMapIntensity: 0.5,
  });

  const body = new THREE.Mesh(bodyGeometry, material);
  body.add(gunStative());

  return body;
};
