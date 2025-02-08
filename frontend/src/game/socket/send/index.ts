import { sendCarData as carData } from "./car-data";
import { sendHpDamageData as hpDamageData } from "./hp-damage-data";
import { playerJoins } from "./player-joins";
import { sendShootData as shootData } from "./shoot-data";
import { sendChatMessage as chatMessage } from "./chat-message";

export const send = {
  carData,
  hpDamageData,
  playerJoins,
  shootData,
  chatMessage,
};
