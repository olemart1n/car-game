import { globalVar } from "~/game/global-var";
import type { GameContextStore } from "~/game/game-context";
import { activePlayersRemovePlayer } from "../utils";
import type * as type from "~/game/global-var/type";
import { world } from "~/game/world";
import { scene } from "~/game/scene";
export const playerDied = (
  player: type.BroadcastedPlayer,
  game: GameContextStore,
) => {
  if (player.id === globalVar.carData.id) {
    game.hpPercent = 0;
    game.isNotification.value = true;
    game.isInGame = false;
    game.notificationMesssage = `Du ble drept av ${player.id}`;
    scene.remove(world.thisCar.car);
    document.exitPointerLock();
    game.isMenu.value = true;
    setTimeout(() => {
      game.isNotification.value = false;
    }, 2000);
    return;
  }
  const deadPlayer = globalVar.activePlayers.find((p) => p.id === player.id);
  deadPlayer?.car && scene.remove(deadPlayer.car);
  game.notificationMesssage = player.username + " ble drept";
  game.isNotification.value = true;
  activePlayersRemovePlayer(player.id);
  setTimeout(() => {
    game.isNotification.value = false;
  }, 2000);
};
