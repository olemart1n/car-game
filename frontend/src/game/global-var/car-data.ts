import * as THREE from "three";
import type * as types from "./type";
const carPositionVector = new THREE.Vector3();
const carDirectionVector = new THREE.Vector3();

const poleFrontQuaternion = new THREE.Quaternion();
const poleBackQuaternion = new THREE.Quaternion();
const gunAxleWorldDirectionVector = new THREE.Vector3();
const gunAxleRotationQuaternion = new THREE.Quaternion();
const wheelFrontLeftPosition = new THREE.Vector3();
const wheelFrontRightPosition = new THREE.Vector3();
const wheelRearLeftPosition = new THREE.Vector3();
const wheelRearRightPosition = new THREE.Vector3();
export const carData: types.CarData = {
  carPositionVector,
  carDirectionVector,
  gunAxleRotationQuaternion,
  poleFrontQuaternion,
  poleBackQuaternion,
  username: "",
  wheelsPos: {
    frontLeft: wheelFrontLeftPosition,
    frontRight: wheelFrontRightPosition,
    rearLeft: wheelRearLeftPosition,
    rearRight: wheelRearRightPosition,
  },
  frontMidPoint: { x: 0, y: 0, z: 0 },
  rearMidPoint: { x: 0, y: 0, z: 0 },
  gunAxleWorldDirectionVector,
  id: "",
};
