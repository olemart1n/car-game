import type * as types from "~/game/global-var/type";
import { type GameContextStore } from "~/game/game-context";

export const connectedSpectators = (
  data: types.BroadcastedPlayer[],
  c: GameContextStore,
) => {
  c.connectedSpectators = data;
};
