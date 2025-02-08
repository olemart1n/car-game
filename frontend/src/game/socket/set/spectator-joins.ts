import type * as type from "~/game/global-var/type";
import type { GameContextStore } from "~/game/game-context";
export const spectatorJoins = (player: type.Player, game: GameContextStore) => {
  game.notificationMesssage = "Hei, " + player.username;
  game.isNotification.value = true;
  setTimeout(() => {
    game.isNotification.value = false;
  }, 2000);
};
