import * as THREE from "three";

export const gun = () => {
  const gunGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 12);
  const gunMaterial = new THREE.MeshStandardMaterial({ color: 0xbababa });

  const gun = new THREE.Mesh(gunGeometry, gunMaterial);

  gun.name = "gun";
  gun.rotateX(Math.PI / 2);
  gun.position.set(0, 0, 0.6);

  return gun;
};
