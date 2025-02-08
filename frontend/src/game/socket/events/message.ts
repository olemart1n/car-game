import type { GameContextStore } from "../../game-context";
import { globalVar } from "../../global-var";
import type * as type from "~/game/global-var/type";
import { set } from "../set";

export const message = (e: MessageEvent, game: GameContextStore) => {
  interface Message {
    name: string;
    payload: any;
  }
  const data: Message = JSON.parse(e.data);
  switch (data.name) {
    //________________
    // SENT TO THE RELEVANT CLIENT
    case "id":
      globalVar.carData.id = data.payload;
      break;
    case "connected_spectators":
      set.connectedSpectators(data.payload, game);
      break;

    case "already_active_players":
      const players: type.Player[] = data.payload;
      set.alreadyActivePlayers(players);
      break;

    //__________________
    // BROADCASTED TO ALL EXCEPT SENDER
    case "chat_message":
      set.chatMessage(game, data.payload);
      break;
    case "spectator_joins":
      set.spectatorJoins(data.payload, game);
      break;
    case "car_data":
      const payload: type.CarData = data.payload;
      const player = globalVar.activePlayers.find(
        (player) => player.id === data.payload.id,
      );
      set.carData.setPlayerCar(player!.car, payload);
      set.carData.setPlayerWheels(player!.car, payload);
      set.carData.setPlayerCarBody(player!.car, payload);
      set.carData.setPlayerGunAxle(player!.car, payload);
      break;
    case "shoot_data":
      const shootData: type.ShootData = data.payload;
      set.shootData(shootData);
      break;

    //___________________
    // BROADCASTED TO ALL
    case "player_joins":
      const newPlayer: type.Player = data.payload;
      set.playerJoins(newPlayer, game);
      break;
    case "spectator_leaves":
      set.spectatorLeaves(game, data.payload);
      break;
    case "player_died":
      set.playerDied(data.payload, game);
      break;

    case "hp_damage":
      const damageData: type.HpDamageData = data.payload;
      set.hpDamageData(damageData, game);
      break;

    default:
      // Handle any other cases or log an error if needed
      console.error("Unknown data name:", data.name);
      break;
  }
};
