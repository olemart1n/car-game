import * as THREE from "three";
import { gun } from "./gun";
const gunAxleGeometry = new THREE.SphereGeometry(0.2, 32, 32);

const gunAxleMaterial = new THREE.MeshBasicMaterial({ color: 0x9ff275 });

export const gunAxle = new THREE.Mesh(gunAxleGeometry, gunAxleMaterial);
gunAxle.name = "gun-axle";
gunAxle.position.set(0, 0.3, 0);

gunAxle.add(gun);
