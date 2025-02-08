import type { Message } from "~/game/game-context";
import type { GameContextStore } from "~/game/game-context";
export const chatMessage = (c: GameContextStore, message: Message) => {
  c.messages.push(message);
};
