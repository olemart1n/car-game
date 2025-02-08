import * as THREE from "three";

const planetGeometry = new THREE.SphereGeometry(40);
const material = new THREE.MeshStandardMaterial({
  color: 0x0fd1ff,
  //   side: THREE.DoubleSide,
  fog: false,
});

export const planet = new THREE.Mesh(planetGeometry, material);
planet.position.set(-400, 200, -600);
planet.name = "planet";
