import type * as THREE from "three";

export interface CarData {
  carPositionVector: THREE.Vector3;
  carDirectionVector: THREE.Vector3;
  poleFrontQuaternion: THREE.Quaternion;
  poleBackQuaternion: THREE.Quaternion;
  username: string;
  wheelsPos: WheelPosition;
  frontMidPoint: threeD;
  rearMidPoint: threeD;
  gunAxleWorldDirectionVector: THREE.Vector3;
  gunAxleRotationQuaternion: THREE.Quaternion;
  id: string;
}

interface threeD {
  x: number;
  y: number;
  z: number;
}

export interface WheelPosition {
  frontLeft: THREE.Vector3;
  frontRight: THREE.Vector3;
  rearLeft: THREE.Vector3;
  rearRight: THREE.Vector3;
}
