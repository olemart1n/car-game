import { gameMouseEvent } from "./game-mouse-event";
import { events } from "../events";
import { carDirectionControls } from "./car-direction-controls";
import type { GameContextStore } from "../game-context";
import { sendCarData } from "../socket/send/car-data";
import { scene } from "../scene";
import { world } from "../world";
/**
 * JSDoc comment
 * Stops/Starts the interval that sends car data based on a condition
 */
export const addControls = (gameStore: GameContextStore) => {
  const shootEvent = (e: PointerEvent) => events.shoot(e);

  let intervalId: ReturnType<typeof setInterval> | null = null;
  scene.add(world.thisCar.car);
  const startInterval = () => {
    intervalId = setInterval(() => {
      sendCarData();
    }, 100);
  };

  const stopInterval = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };
  document.addEventListener("pointerlockchange", () => {
    if (document.pointerLockElement === gameStore.mainEl.value) {
      document.addEventListener("keydown", carDirectionControls);
      document.addEventListener("keyup", carDirectionControls);
      gameStore.mainEl.value.addEventListener("mousemove", gameMouseEvent);
      gameStore.mainEl.value.addEventListener("pointerdown", shootEvent);
      gameStore.isMenu.value = false;
      startInterval();
    } else {
      document.removeEventListener("keydown", carDirectionControls);
      document.removeEventListener("keyup", carDirectionControls);
      gameStore.mainEl.value?.removeEventListener("mousemove", gameMouseEvent);
      gameStore.mainEl.value?.removeEventListener("pointerdown", shootEvent);
      gameStore.isMenu.value = true;
      stopInterval();
      // REMOVE GAME CONTROLS (MENY IS NOW VISIBLE)
    }
  });
};
