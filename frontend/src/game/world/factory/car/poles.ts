import * as THREE from "three";
import { wheels } from "./wheels";

export const poles = () => {
  const poleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 2.6, 10);
  const poleMaterial = new THREE.MeshStandardMaterial({ color: 0xbababa });
  const pole1 = new THREE.Mesh(poleGeometry, poleMaterial);
  const pole2 = pole1.clone();
  pole1.name = "pole1";
  pole2.name = "pole2";
  const { frontLeft, frontRight, rearLeft, rearRight } = wheels();

  const frontMidPoint = {
    x: (frontLeft.position.x + frontRight.position.x) / 2,
    y: (frontLeft.position.y + frontRight.position.y) / 2,
    z: (frontLeft.position.z + frontRight.position.z) / 2,
  };
  const rearMidPoint = {
    x: (rearLeft.position.x + rearRight.position.x) / 2,
    y: (rearLeft.position.y + rearRight.position.y) / 2,
    z: (rearLeft.position.z + rearRight.position.z) / 2,
  };

  pole1.position.set(frontMidPoint.x, frontMidPoint.y, frontMidPoint.z);
  pole2.position.set(rearMidPoint.x, rearMidPoint.y, rearMidPoint.z);

  return { pole1, pole2 };
};
