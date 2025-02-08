import { createContextId } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";
import type * as type from "./global-var/type";
export interface GameContextStore {
  connectedSpectators: type.BroadcastedPlayer[];
  username: Signal<string>;
  isError: boolean;
  errorMessage: string;
  isNotification: Signal<boolean>;
  notificationMesssage: string;
  isMenu: Signal<boolean>;
  isConnectedToSocket: boolean;
  mainEl: Signal<HTMLElement | undefined>;
  hpPercent: number;
  messages: Message[];
  messageEndRefDiv: Signal<HTMLDivElement | undefined>;
  isInGame: boolean;
}

const gameContext = createContextId<GameContextStore>("gameContext");

export default gameContext;

export interface Message {
  senderUsername: string;
  message: string;
  senderId: string;
}
