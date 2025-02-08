import { globalVar } from "~/game/global-var";
import type * as type from "~/game/global-var/type";
import type { GameContextStore } from "~/game/game-context";
import { world } from "~/game/world";
import { scene } from "~/game/scene";
import { activePlayersAddPlayer } from "../utils";
import { send } from "../send";
/**
 *
 * @comment all players go into activePlayers array.
 */
export const playerJoins = (player: type.Player, game: GameContextStore) => {
  game.notificationMesssage = player.username + " ble med i spillet";
  game.isNotification.value = true;

  setTimeout(() => {
    game.isNotification.value = false;
  }, 2000);

  if (player.id === globalVar.carData.id) {
    // IF THE NEW PLAYER IS THIS CLIENT
    activePlayersAddPlayer(world.thisCar.car, player.username, player.id);
  } else {
    // IF THE PLAYER IS ANOTHER CLIENT
    const car = world.factory.car();
    activePlayersAddPlayer(car, player.username, player.id);
    scene.add(car);
    send.carData();
  }
};
