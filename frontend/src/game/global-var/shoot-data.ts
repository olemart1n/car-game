import * as THREE from "three";
import type * as types from "./type";

export const shootData: types.ShootData = {
  bulletRotation: new THREE.Quaternion(),
  bulletPosition: new THREE.Vector3(),
  bulletDirection: new THREE.Vector3(),
  timeUntilHit: 0,
  shooter: "",
};
