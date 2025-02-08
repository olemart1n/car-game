import type { GameContextStore } from "../../game-context";

export const open = (e: Event, gameStore: GameContextStore) => {
  gameStore.isConnectedToSocket = true;
};
