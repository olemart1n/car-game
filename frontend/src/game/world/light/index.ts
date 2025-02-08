import * as THREE from "three";

export const light = new THREE.DirectionalLight(0xffffff, 1);

light.castShadow = true;
light.position.set(50, 50, 100); // Move it higher and at an angle
