import {
  $,
  component$,
  useContext,
  useOn,
  useSignal,
  type Signal,
} from "@builder.io/qwik";
import { globalVar } from "~/game/global-var";
import type { Message } from "~/game/game-context";
import gameContext from "~/game/game-context";
export const Form = component$(() => {
  const c = useContext(gameContext);
  const chatInput = useSignal<HTMLFormElement | undefined>();
  useOn(
    "submit",
    $(() => {
      const input = Object.fromEntries(new FormData(chatInput.value));

      if ((input.message as string).length < 2) return;
      const message: Message = {
        senderId: globalVar.carData.id,
        senderUsername: c.username.value,
        message: input.message as string,
      };

      globalVar.conn.socket?.send(
        JSON.stringify({
          name: "chat_message",
          payload: message,
        }),
      );

      c.messages.push(message);
      chatInput.value?.reset();
      scrollToBottom(c.messageEndRefDiv);
    }),
  );
  return (
    <form
      ref={chatInput}
      class="flex h-1/6 w-full items-center text-white"
      preventdefault:submit
    >
      <input
        type="text"
        name="message"
        class="focus:none mx-2 mb-2 mt-auto flex-grow rounded border-none bg-black  bg-opacity-50 p-2 placeholder:text-center focus:outline-none"
        placeholder="Send en melding .."
        autoComplete="off"
        autoCorrect="off"
        minLength={2}
        preventdefault:scroll
      />
    </form>
  );
});

function scrollToBottom(messageEndRef: Signal<HTMLDivElement | undefined>) {
  setTimeout(() => {
    messageEndRef.value?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, 10);
}
