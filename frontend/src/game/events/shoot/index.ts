import * as THREE from "three";
import { scene } from "~/game/scene";
import { world } from "~/game/world";
import { globalVar } from "../../global-var";
import { explode } from "./explode";
import { gunCoolDown } from "./gun-cool-down";
import { send } from "~/game/socket/send";
import { damageRaycastPlayers } from "./damage-raycast-players";

export const shoot = (e: PointerEvent) => {
  e.preventDefault();
  if (globalVar.gunState.isCooling) return;

  const bullet = world.factory.bullet();
  world.thisCar.gunAxle.getWorldPosition(globalVar.shootData.bulletPosition);
  bullet.position.copy(globalVar.shootData.bulletPosition);
  world.thisCar.gunAxle.getWorldDirection(globalVar.shootData.bulletDirection);
  globalVar.shootData.shooter = globalVar.carData.username;
  // RAY
  const raycaster = new THREE.Raycaster(
    globalVar.shootData.bulletPosition,
    globalVar.shootData.bulletDirection,
  );
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    const distance = intersects[0].distance;
    globalVar.shootData.timeUntilHit = calculateBulletHitTime(distance) * 600;
    setTimeout(
      () => {
        const index = globalVar.firedBullets.findIndex(
          (b) => b.bullet === bullet,
        );
        if (index !== -1) {
          const bullet = globalVar.firedBullets[index];
          bullet.hasHitted = true;
          // Explode the bullet
          explode(bullet);
          damageRaycastPlayers(bullet);
        }
      },
      calculateBulletHitTime(distance) * 600,
    );
  }
  // Calculate the rotation quaternion based on the direction vector
  globalVar.shootData.bulletRotation =
    new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      globalVar.shootData.bulletDirection,
    );
  bullet.applyQuaternion(globalVar.shootData.bulletRotation);
  // Send shoot data to the server
  send.shootData();
  gunCoolDown();
  globalVar.firedBullets.push({
    bullet,
    direction: globalVar.shootData.bulletDirection,
    hasHitted: false,
    shooterId: globalVar.carData.id,
  });
  scene.add(bullet);
  // PLAY SHOOT SOUND
  const sound: THREE.Audio = globalVar.audio.get("shoot-sound");
  if (sound.isPlaying) return;

  sound.play();
};

function calculateBulletHitTime(distanceToObject: number) {
  const time = distanceToObject / globalVar.bulletSpeed;
  const timeInSeconds = time * (1 / 60);
  return timeInSeconds;
}
