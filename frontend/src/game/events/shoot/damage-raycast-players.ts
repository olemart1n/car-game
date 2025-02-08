import { globalVar } from "~/game/global-var";
import * as THREE from "three";
import type * as type from "~/game/global-var/type";
import { send } from "~/game/socket/send";
export const damageRaycastPlayers = (data: type.FiredBullet) => {
  const raycaster = new THREE.Raycaster();

  globalVar.activePlayers.forEach((raySender) => {
    const car = raySender.car;
    const bodyPosition = new THREE.Vector3();
    car.getWorldPosition(bodyPosition);
    const direction = data.bullet.position
      .clone()
      .sub(bodyPosition)
      .normalize();
    raycaster.set(bodyPosition, direction);

    const intersects = raycaster.intersectObject(data.bullet);
    if (intersects.length === 0) return;
    globalVar.hpDamageData.victimId = raySender.id;
    globalVar.hpDamageData.shooterId = data.shooterId;
    if (intersects[0].distance < 2) {
      globalVar.hpDamageData.damage = 30;
      send.hpDamageData();
    } else if (intersects[0].distance < 5) {
      globalVar.hpDamageData.damage = 5;
      send.hpDamageData();
    }
  });
};
