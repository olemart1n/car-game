import * as THREE from "three";

import { gunAxle } from "./gun-axle";
// CAR
const focalPointGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.5, 12);
const material = new THREE.MeshBasicMaterial({ color: 0x000000 });

export const gunStative = new THREE.Mesh(focalPointGeometry, material);
gunStative.name = "gun-stative";
gunStative.position.set(0, 0.5, 1);
// gunStative.rotateY(Math.PI); // DOESNT REALY NEED THIS..

gunStative.add(gunAxle);
