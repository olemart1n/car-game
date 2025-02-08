import { world } from "../../world";
import { globalVar } from "../../global-var";
// NOT ALL globalVar.carData VARIABLES ARE NOT SET IN THIS SPESIFIC FUNCTION

export const sendCarData = () => {
  world.thisCar.car.getWorldPosition(globalVar.carData.carPositionVector);
  world.thisCar.car.getWorldDirection(globalVar.carData.carDirectionVector);
  world.thisCar.gunAxle.getWorldDirection(
    globalVar.carData.gunAxleWorldDirectionVector,
  );
  globalVar.carData.gunAxleRotationQuaternion =
    world.thisCar.gunAxle.quaternion;
  globalVar.carData.wheelsPos.frontLeft =
    world.thisCar.wheels.frontLeft.position;
  globalVar.carData.wheelsPos.frontRight =
    world.thisCar.wheels.frontRight.position;
  globalVar.carData.wheelsPos.rearLeft = world.thisCar.wheels.rearLeft.position;
  globalVar.carData.wheelsPos.rearRight =
    world.thisCar.wheels.rearRight.position;

  globalVar.conn.socket?.send(
    JSON.stringify({
      name: "car_data",
      payload: globalVar.carData,
    }),
  );
};
