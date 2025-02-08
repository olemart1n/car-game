import type * as types from "~/game/global-var/type";
import { globalVar } from "~/game/global-var";
import * as THREE from "three";
export const setPlayerCarBody = (
  car: THREE.Object3D,
  payload: types.CarData,
) => {
  // SET THE BODY'S ROTATION AND HEIGHT
  const body = car.children[4];
  body.position.y = (payload.frontMidPoint.y + payload.rearMidPoint.y) / 2;
  const direction = new THREE.Vector3(
    payload.frontMidPoint.x - payload.rearMidPoint.x,
    payload.frontMidPoint.y - payload.rearMidPoint.y,
    payload.frontMidPoint.z - payload.rearMidPoint.z,
  ).normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    globalVar.upVector,
    direction,
  );
  body.setRotationFromQuaternion(quaternion);
};
