import type { GameContextStore } from "~/game/game-context";
import { globalVar } from "~/game/global-var";
import type * as type from "~/game/global-var/type";
import { scene } from "~/game/scene";

export const spectatorLeaves = (
  c: GameContextStore,
  player: type.BroadcastedPlayer,
) => {
  c.notificationMesssage = "Hade " + player.username;
  c.isNotification.value = true;

  // Find the index of the player to remove
  const playerToRemove = globalVar.activePlayers.find(
    (p) => p.id === player.id,
  );

  console.log(playerToRemove);
  const playerToRemoveIndex = globalVar.activePlayers.findIndex(
    (p) => p.id === player.id,
  );
  if (playerToRemoveIndex !== -1) {
    globalVar.activePlayers.splice(playerToRemoveIndex, 1);
    scene.remove(playerToRemove!.car);
    console.log("playerToRemove!.car should have been removed");
  } else {
    console.error("Player not found in activePlayers array");
  }

  setTimeout(() => {
    c.isNotification.value = false;
  }, 2000);
};
