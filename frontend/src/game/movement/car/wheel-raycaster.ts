import * as THREE from "three";
import { world } from "../../world";

export const wheelRaycaster = (wheel: THREE.Mesh) => {
  const raycaster = new THREE.Raycaster();
  const worldPosition = wheel.getWorldPosition(new THREE.Vector3());
  const downDirection = new THREE.Vector3(0, -1, 0);

  const rayOrigin = new THREE.Vector3(worldPosition.x, 5, worldPosition.z);
  raycaster.set(rayOrigin, downDirection);

  const intersects = raycaster.intersectObject(world.moonSurface);
  if (!intersects[0]) return;
  wheel.position.y = intersects[0].point.y + 0.3;
};
