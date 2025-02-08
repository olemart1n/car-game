import * as THREE from "three";
import { wheels } from "./wheels";

const poleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2.6, 10);
const poleMaterial = new THREE.MeshStandardMaterial({ color: 0xbababa });
export const pole1 = new THREE.Mesh(poleGeometry, poleMaterial);
export const pole2 = pole1.clone();
pole1.name = "pole1";
pole2.name = "pole2";

const frontMidPoint = {
  x: (wheels.frontLeft.position.x + wheels.frontRight.position.x) / 2,
  y: (wheels.frontLeft.position.y + wheels.frontRight.position.y) / 2,
  z: (wheels.frontLeft.position.z + wheels.frontRight.position.z) / 2,
};
const rearMidPoint = {
  x: (wheels.rearLeft.position.x + wheels.rearRight.position.x) / 2,
  y: (wheels.rearLeft.position.y + wheels.rearRight.position.y) / 2,
  z: (wheels.rearLeft.position.z + wheels.rearRight.position.z) / 2,
};

pole1.position.set(frontMidPoint.x, frontMidPoint.y, frontMidPoint.z);
pole2.position.set(rearMidPoint.x, rearMidPoint.y, rearMidPoint.z);
