import { globalVar } from "~/game/global-var";

export const activePlayersRemovePlayer = (playerToRemoveId: string) => {
  const index = globalVar.activePlayers.findIndex(
    (player) => player.id === playerToRemoveId,
  );
  globalVar.activePlayers.splice(index, 1);
};
