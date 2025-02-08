import { globalVar } from "../../global-var";

export const sendChatMessage = () =>
  globalVar.conn.socket?.send(
    JSON.stringify({
      name: "chat_message",
      payload: globalVar.chatMessage,
    }),
  );
