import { world } from "~/game/world";
import { globalVar } from "~/game/global-var";
import type * as types from "~/game/global-var/type";
import { scene } from "~/game/scene";

// PLAYERS ALREADY IN THE GAME (CHECK SERVER)
export const alreadyActivePlayers = (players: types.Player[]) => {
  players.forEach((player) => {
    if (player.id === globalVar.carData.id) return;
    const playerExists = globalVar.activePlayers.some(
      (activePlayer) => activePlayer.id === player.id,
    );
    if (playerExists) return;
    const car = world.factory.car();
    globalVar.activePlayers.push({
      car: car,
      username: player.username,
      hp: 100,
      id: player.id,
    });
    scene.add(car);
  });
};
