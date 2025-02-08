import { globalVar } from "~/game/global-var";
import type * as THREE from "three";

export const activePlayersAddPlayer = (
  car: THREE.Object3D,
  username: string,
  id: string,
) => {
  globalVar.activePlayers.push({
    car: car,
    username: username,
    hp: 100,
    id: id,
  });
};
