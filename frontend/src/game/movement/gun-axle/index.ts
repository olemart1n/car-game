import * as THREE from "three";
import { scene } from "../../scene";
import { world } from "../../world";
export const setGunAxleAim = (
  camera: THREE.PerspectiveCamera,
  raycaster: THREE.Raycaster,
) => {
  const crosshairNDC = new THREE.Vector2(0, 0.5); // Expected crosshair NDC coordinates
  raycaster.setFromCamera(crosshairNDC, camera);
  const interects = raycaster.intersectObjects(scene.children);
  if (interects.length > 0) {
    world.thisCar.gunAxle.lookAt(interects[0].point);
  }
};
