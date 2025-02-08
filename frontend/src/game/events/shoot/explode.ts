import * as THREE from "three";
import { globalVar } from "~/game/global-var";
import type * as type from "~/game/global-var/type";
import { scene } from "~/game/scene";
export const explode = (data: type.FiredBullet) => {
  data.bullet.geometry = new THREE.SphereGeometry(1, 32, 32);
  let startOpacitity = 1;
  const startSize = data.bullet.scale.x;
  const endSize = startSize * 5;
  const duration = 60; // duration of the explosion effect in milliseconds
  const interval = 20; // interval between scale updates in milliseconds
  const scaleStep = startSize / (duration / interval);
  let currentSize = startSize;

  // ADD SOUND TO BULLET
  const sound = globalVar.audio.get("explosion-sound");
  data.bullet.add(sound);
  sound.play();

  const explosionInterval = setInterval(() => {
    startOpacitity -= 0.04;
    currentSize += scaleStep;
    data.bullet.scale.set(currentSize, currentSize, currentSize);
    const material = data.bullet.material as THREE.MeshStandardMaterial;
    material.opacity = startOpacitity;

    if (currentSize >= endSize) {
      globalVar.firedBullets.splice(globalVar.firedBullets.indexOf(data), 1);
      scene.remove(data.bullet);
      clearInterval(explosionInterval);
    }
  }, interval);
};
