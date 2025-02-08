import * as THREE from "three";

const skyGeometry = new THREE.SphereGeometry(300);
const material = new THREE.MeshStandardMaterial({
  opacity: 0,
  side: THREE.DoubleSide,
});
material.transparent = true;

export const sky = new THREE.Mesh(skyGeometry, material);
sky.name = "sky";
