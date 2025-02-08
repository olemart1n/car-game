import { type GameContextStore } from "../../game-context";
export const close = (e: CloseEvent, gameStore: GameContextStore) => {
  console.log(e);
  switch (e.code) {
    case 1006:
      gameStore.errorMessage = "TYPE: 'close'. -> Du ble koblet fra server";
      gameStore.isError = true;
      setTimeout(() => {
        gameStore.isError = false;
      }, 5000);
      gameStore.isConnectedToSocket = false;
      break;

    default:
      break;
  }
};
