import type * as THREE from "three";

export interface ShootData {
  bulletRotation: THREE.Quaternion;
  bulletPosition: THREE.Vector3;
  bulletDirection: THREE.Vector3;
  timeUntilHit: number;
  shooter: string;
}
