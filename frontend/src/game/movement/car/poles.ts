import * as THREE from "three";
import { world } from "~/game/world";
import { globalVar } from "~/game/global-var";

export const adjustPoles = () => {
  world.thisCar.pole1.position.set(
    globalVar.carData.frontMidPoint.x,
    globalVar.carData.frontMidPoint.y,
    globalVar.carData.frontMidPoint.z,
  );
  world.thisCar.pole2.position.set(
    globalVar.carData.rearMidPoint.x,
    globalVar.carData.rearMidPoint.y,
    globalVar.carData.rearMidPoint.z,
  );

  const rearPoleDirection = new THREE.Vector3();
  rearPoleDirection
    .subVectors(
      world.thisCar.wheels.rearLeft.position,
      world.thisCar.wheels.rearRight.position,
    )
    .normalize();

  const frontPoleDirection = new THREE.Vector3();
  frontPoleDirection
    .subVectors(
      world.thisCar.wheels.frontLeft.position,
      world.thisCar.wheels.frontRight.position,
    )
    .normalize();

  // Create an up vector for the pole (assuming the pole's original direction is along y-axis)
  const up = new THREE.Vector3(0, 1, 0); // y-axis as up

  globalVar.carData.poleFrontQuaternion.setFromUnitVectors(
    up,
    frontPoleDirection,
  );
  globalVar.carData.poleBackQuaternion.setFromUnitVectors(
    up,
    rearPoleDirection,
  );

  // Apply the quaternion rotation to the pole
  world.thisCar.pole1.setRotationFromQuaternion(
    globalVar.carData.poleFrontQuaternion,
  );
  world.thisCar.pole2.setRotationFromQuaternion(
    globalVar.carData.poleBackQuaternion,
  );
};
