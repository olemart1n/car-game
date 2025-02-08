import { activePlayers } from "./active-players";
import { bulletSpeed } from "./bullet-speed";
import { cameraData } from "./camera-data";
import { carData } from "./car-data";
import { carConfig } from "./car-config";
import { chatMessage } from "./chat-message";
import { conn } from "./conn";
import { firedBullets } from "./fired-bullets";
import { gunState } from "./gun-state";
import { hpDamageData } from "./hp-damage-data";
import { shootData } from "./shoot-data";
import { upVector } from "./up-vector";
import { audio } from "./audio";
import * as types from "./type";
export const globalVar = {
  audio,
  carConfig,
  activePlayers,
  firedBullets,
  carData,
  upVector,
  cameraData,
  bulletSpeed,
  gunState,
  shootData,
  hpDamageData,
  chatMessage,
  conn,
  types,
};
