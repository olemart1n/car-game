import * as THREE from "three";
import { pyramid } from "../pyramid";
import { createNoise2D } from "simplex-noise";
import alea from "alea";
const moonSurfaceGeometry = new THREE.PlaneGeometry(300, 300, 50, 50);
const material = new THREE.MeshStandardMaterial({
  metalness: 0,
  roughness: 0,
  emissive: 0x222222,
  emissiveIntensity: 0.2,
});

export const moonSurface = new THREE.Mesh(moonSurfaceGeometry, material);
moonSurface.name = "moonSurface";

// GROUP
export const landscape = new THREE.Group();

pyramid.position.set(40, 50, 0);

landscape.name = "group: landscape";
landscape.rotateX(Math.PI * -0.5);
landscape.add(moonSurface);

landscape.add(pyramid);

const { array } = moonSurface.geometry.attributes.position;
// create a new random function based on the seed
// USING SEED WILL MAKE THE SURFACE LOOK THE SAME ON ALL CLIENTS
const prng = alea("moonSurfaceSeed");
export const noise2D = createNoise2D(prng);
// iterate over each z vertice
for (let i = 2; i < array.length; i += 3) {
  // each z. [x, y, z...]
  const x = array[i];
  const y = array[i + 1];
  const zOffset = noise2D(x, y);
  array[i] = array[i] + (zOffset - 0.5);
}
