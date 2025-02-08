import type * as THREE from "three";
export interface Player {
  car: THREE.Object3D;
  username: string;
  hp: number;
  id: string;
}
