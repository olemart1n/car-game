import * as THREE from "three";
import { world } from "../world";

export const scene = new THREE.Scene();

scene.add(world.landscape);
// scene.add(mesh.car); // FIX
scene.add(world.light);
scene.add(world.sky);
scene.add(world.stars);
scene.add(world.planet);

scene.fog = new THREE.Fog(0x000, 1, 200);
