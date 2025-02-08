import { globalVar } from "../../global-var";

export function moveBullets() {
  globalVar.firedBullets.forEach((data) => {
    if (data.hasHitted) {
      return;
    }
    data.bullet.position.add(
      data.direction.clone().multiplyScalar(globalVar.bulletSpeed),
    );
  });
}
