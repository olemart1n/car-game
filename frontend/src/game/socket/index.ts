import { globalVar } from "../global-var";
import { open } from "./events/open";
import { message } from "./events/message";
import { close } from "./events/close";
import { error } from "./events/error";
import type { GameContextStore } from "../game-context";

export const connectToSocket = (username: string, game: GameContextStore) => {
  const serverSocketURL =
    import.meta.env.PUBLIC_ENV === "production"
      ? "wss://api.olems.no/car-game"
      : "ws://localhost:8080/car-game";
  globalVar.conn.socket = new WebSocket(
    `${serverSocketURL}?username=${username}`,
  );
  globalVar.carData.username = username!;
  globalVar.conn.socket.addEventListener("error", (e) => {
    error(e);
  });

  globalVar.conn.socket.addEventListener("close", (e) => {
    close(e, game);
  });

  globalVar.conn.socket.addEventListener("message", (e) => {
    message(e, game);
  });
  globalVar.conn.socket.addEventListener("open", (e) => {
    open(e, game);
  });
};
