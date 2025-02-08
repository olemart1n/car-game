import { globalVar } from "~/game/global-var";
import type * as type from "~/game/global-var/type";
import * as THREE from "three";
import { world } from "~/game/world";
import { scene } from "~/game/scene";
import { explode } from "~/game/events/shoot/explode";
export const shootData = (payload: type.ShootData) => {
  const bullet = world.factory.bullet();
  const position = new THREE.Vector3(
    payload.bulletPosition.x,
    payload.bulletPosition.y,
    payload.bulletPosition.z,
  );
  bullet.position.copy(position);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    payload.bulletDirection,
  );
  bullet.applyQuaternion(quaternion);

  // Create a new Vector3 object from payload.bulletDirection
  const direction = new THREE.Vector3(
    payload.bulletDirection.x,
    payload.bulletDirection.y,
    payload.bulletDirection.z,
  );

  setTimeout(() => {
    const index = globalVar.firedBullets.findIndex((b) => b.bullet === bullet);
    if (index !== -1) {
      const bullet = globalVar.firedBullets[index];
      bullet.hasHitted = true;
      // Explode the bullet
      explode(bullet);
    }
  }, payload.timeUntilHit);

  globalVar.firedBullets.push({
    bullet,
    direction,
    hasHitted: false,
    shooterId: payload.shooter,
  });
  scene.add(bullet);

  // ADD SOUND TO BULLET
  const sound = globalVar.audio.get("explosion-sound");
  bullet.add(sound);
  sound.play();
};
