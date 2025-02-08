import type * as types from "~/game/global-var/type";
import * as THREE from "three";

export const setPlayerGunAxle = (
  car: THREE.Object3D,
  payload: types.CarData,
) => {
  // SET THE gunAxles ROTATION
  payload.gunAxleWorldDirectionVector.y *= -1;
  const gunAxle = car.getObjectByName("gun-axle");
  const directionQuaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 0, -1),
    payload.gunAxleWorldDirectionVector,
  );

  // Apply an additional 180-degree rotation around the X-axis
  const correctionQuaternion = new THREE.Quaternion();
  correctionQuaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI);

  // Multiply the two quaternions to apply both rotations
  directionQuaternion.multiply(correctionQuaternion);

  gunAxle?.setRotationFromQuaternion(directionQuaternion);
  gunAxle?.rotateX(Math.PI);
};
