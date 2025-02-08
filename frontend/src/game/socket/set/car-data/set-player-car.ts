import type * as types from "~/game/global-var/type";
import type * as THREE from "three";
export const setPlayerCar = (car: THREE.Object3D, payload: types.CarData) => {
  // SET CAR'S POSITION AND ROTATION
  car.position.copy(payload.carPositionVector);
  car.lookAt(car.position.clone().add(payload.carDirectionVector));
};
