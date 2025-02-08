import * as THREE from "three";
import { moveBullets } from "../movement/bullets";
import { globalVar } from "../global-var";
import { setGunAxleAim } from "../movement/gun-axle";
import { moveCar } from "../movement/car";
import { world } from "../world";
const cameraData = globalVar.cameraData;
export const animateFunction = (
  camera: THREE.PerspectiveCamera,
  gunAxleRayCaster: THREE.Raycaster
) => {
  moveCar();
  moveBullets();
  setGunAxleAim(camera, gunAxleRayCaster);

  // Calculate the camera's new position in spherical coordinates
  const x =
    cameraData.radius * Math.sin(cameraData.phi) * Math.cos(cameraData.theta);
  const y = cameraData.radius * Math.cos(cameraData.phi);
  const z =
    cameraData.radius * Math.sin(cameraData.phi) * Math.sin(cameraData.theta);
  const carPosOffset = new THREE.Vector3(-x, y, z);
  // -----NOT IN USE----- const carPosOffset = new THREE.Vector3(0, 3.5, 9);

  const cameraOffset = carPosOffset.applyMatrix4(world.thisCar.car.matrixWorld);
  camera.position.copy(cameraOffset);
  camera.lookAt(world.thisCar.car.position);
};
