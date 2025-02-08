import { globalVar } from "../../global-var";
import { world } from "../../world";
import { wheelRaycaster } from "./wheel-raycaster";
import { adjustBody } from "./body";
import { adjustPoles } from "./poles";
const wheels = world.thisCar.wheels;

let wheelRotation = 0;
const carConfig = globalVar.carConfig;
export function moveCar() {
  // FORWARD
  if (carConfig.direction.forward) {
    carConfig.speed += carConfig.acceleration;
    spinWheels(carConfig.speed);
  }
  // REVERSE
  if (carConfig.direction.reverse) {
    carConfig.speed -= carConfig.acceleration;
    spinWheels(carConfig.speed, false);
  }
  // SPEED IS GREATER THAN MAX SPEED, SET SPEED = MAXSPEED
  if (carConfig.speed > carConfig.maxSpeed) {
    carConfig.speed = carConfig.maxSpeed;
  }
  // IF SPEED IS LESS THAN -MAXSPEED/2 (DRIVING IN REVERSE) SET SPEED TO -MAXSPEED/2
  if (carConfig.speed < -carConfig.maxSpeed / 2) {
    carConfig.speed = -carConfig.maxSpeed / 2;
  }
  // IF SPEED IS GREATER THAN 0, ADD FRICTION TO SPEED
  if (carConfig.speed > 0) {
    carConfig.speed -= carConfig.friction;
  }
  // IF SPEED IS LESS THAN 0, ADD FRICTION TO SPEED
  if (carConfig.speed < 0) {
    carConfig.speed += carConfig.friction;
  }
  // IF SPEED IS LESS THAN FRICTION, SET SPEED TO 0
  if (Math.abs(carConfig.speed) < carConfig.friction) {
    carConfig.speed = 0;
  }

  if (carConfig.speed !== 0) {
    const flip = carConfig.speed > 0 ? 1 : -1;
    if (carConfig.direction.left) {
      carConfig.angle += 0.03 * flip;
      world.thisCar.car.rotateY(0.03 * flip);
    }
    if (carConfig.direction.right) {
      carConfig.angle -= 0.03 * flip;
      world.thisCar.car.rotateY(-0.03 * flip);
    }
  }

  if (carConfig.direction.left && wheelRotation < 1) {
    wheelRotation += 0.01;
    wheels.frontLeft.rotateX(0.02);

    wheels.frontRight.rotateX(0.02);
  }
  if (carConfig.direction.right && wheelRotation > -1) {
    wheelRotation -= 0.01;
    wheels.frontLeft.rotateX(-0.02);
    wheels.frontRight.rotateX(-0.02);
  }

  if (
    !carConfig.direction.right &&
    !carConfig.direction.left &&
    wheelRotation !== 0
  ) {
    wheels.frontLeft.rotation.set(0, 0, Math.PI / 2);
    wheels.frontRight.rotation.set(0, 0, Math.PI / 2);
    wheelRotation = 0;
  }

  world.thisCar.car.position.x -= Math.sin(carConfig.angle) * carConfig.speed;
  world.thisCar.car.position.z -= Math.cos(carConfig.angle) * carConfig.speed;

  adjustBody();
  wheelRaycaster(wheels.frontRight);
  wheelRaycaster(wheels.frontLeft);
  wheelRaycaster(wheels.rearRight);
  wheelRaycaster(wheels.rearLeft);
  adjustPoles();
}

const spinWheels = (speed: number, forward: boolean = true) => {
  wheels.frontRight.children[0].rotateY(forward ? speed : -0.1);
  wheels.frontLeft.children[0].rotateY(forward ? speed : -0.1);
  wheels.rearRight.children[0].rotateY(forward ? speed : -0.1);
  wheels.rearLeft.children[0].rotateY(forward ? speed : -0.1);
};
