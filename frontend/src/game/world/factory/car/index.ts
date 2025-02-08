import * as THREE from "three";
import { wheels } from "./wheels";
import { body } from "./body";

const car = () => {
  const car = new THREE.Object3D();

  // ADD WHEELS
  const w = wheels();
  for (const property in w) {
    // @ts-ignore
    car.add(w[property]);
  }
  // ADD BODY
  const carBody = body();
  car.add(carBody);

  return car;
};

export { car };
