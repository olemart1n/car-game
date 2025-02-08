import { component$, useContext } from "@builder.io/qwik";
import { Form } from "./form";
import type { Message } from "~/game/game-context";
import gameContext from "~/game/game-context";
import { globalVar } from "~/game/global-var";

export const Chat = component$(() => {
  const c = useContext(gameContext);
  return (
    <div class="outline-1.5 m-2 h-full rounded p-2 outline outline-black">
      <div class="no-scrollbar  h-5/6 overflow-y-scroll">
        <div ref={c.messageEndRefDiv}>
          {c.messages.map(
            ({ message, senderUsername, senderId }: Message, index: number) => {
              if (senderId === globalVar.carData.id) {
                return (
                  <div key={index}>
                    <p class=" text-sm">{senderUsername} x</p>
                    <div class="mb-2 w-fit rounded bg-yellow-600 bg-opacity-40 p-2 text-white">
                      {message}
                    </div>
                  </div>
                );
              } else
                return (
                  <div key={index}>
                    <p class="text-right text-sm">{senderUsername}</p>
                    <div class="mb-2 ml-auto w-fit rounded bg-yellow-300 p-2 text-slate-800">
                      {message}
                    </div>
                  </div>
                );
            },
          )}
        </div>
      </div>

      <Form />
    </div>
  );
});
