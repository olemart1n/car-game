import * as THREE from "three";
import { world } from "~/game/world";
import { globalVar } from "~/game/global-var";

export const adjustBody = () => {
  globalVar.carData.frontMidPoint = {
    x:
      (world.thisCar.wheels.frontLeft.position.x +
        world.thisCar.wheels.frontRight.position.x) /
      2,
    y:
      (world.thisCar.wheels.frontLeft.position.y +
        world.thisCar.wheels.frontRight.position.y) /
      2,
    z:
      (world.thisCar.wheels.frontLeft.position.z +
        world.thisCar.wheels.frontRight.position.z) /
      2,
  };

  globalVar.carData.rearMidPoint = {
    x:
      (world.thisCar.wheels.rearLeft.position.x +
        world.thisCar.wheels.rearRight.position.x) /
      2,
    y:
      (world.thisCar.wheels.rearLeft.position.y +
        world.thisCar.wheels.rearRight.position.y) /
      2,
    z:
      (world.thisCar.wheels.rearLeft.position.z +
        world.thisCar.wheels.rearRight.position.z) /
      2,
  };

  // Step 2: Calculate direction vector and align the mesh
  const direction = new THREE.Vector3(
    globalVar.carData.frontMidPoint.x - globalVar.carData.rearMidPoint.x,
    globalVar.carData.frontMidPoint.y - globalVar.carData.rearMidPoint.y,
    globalVar.carData.frontMidPoint.z - globalVar.carData.rearMidPoint.z,
  ).normalize();

  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    globalVar.upVector,
    direction,
  );
  world.thisCar.body.setRotationFromQuaternion(quaternion);
  world.thisCar.body.position.y =
    (globalVar.carData.frontMidPoint.y + globalVar.carData.rearMidPoint.y) / 2;
};
