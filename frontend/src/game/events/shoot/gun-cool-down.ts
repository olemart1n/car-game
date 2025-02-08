import { world } from "~/game/world";
import { globalVar } from "~/game/global-var";
export const gunCoolDown = () => {
  const gun = world.thisCar.gun;
  const gunAxle = world.thisCar.gunAxle;
  const startZ = gun.position.z;
  gunAxle.material.color.set(0xff0000);
  gun.position.z = gun.position.z - 0.05;
  const returnPoint = gun.position.z - 0.7;
  let isReturningToStartZ = false;
  globalVar.gunState.isCooling = true;
  setTimeout(() => {
    gunAxle.material.color.set(0x9ff275);
    globalVar.gunState.isCooling = false;
  }, 3000);

  const gunInterval = setInterval(() => {
    if (gun.position.z >= returnPoint && !isReturningToStartZ) {
      gun.position.z -= 0.1;
      if (gun.position.z <= returnPoint) {
        isReturningToStartZ = true;
      }
    } else {
      gun.position.z += 0.01;
    }

    if (gun.position.z >= startZ) {
      gun.position.z = startZ;
      clearInterval(gunInterval);
    }
  }, 15);
};
