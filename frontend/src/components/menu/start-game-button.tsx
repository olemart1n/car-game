import { component$, useContext } from "@builder.io/qwik";
import gameContext from "~/game/game-context";
import { send } from "~/game/socket/send";
export const StartGameButton = component$(() => {
  const c = useContext(gameContext);
  return (
    <button
      class={
        "absolute right-5 top-1/2 block -translate-y-1/2  rounded-sm bg-gray-400 px-4 py-2 text-lg text-black " +
        (c.isConnectedToSocket
          ? "scale-110 cursor-pointer bg-yellow-400 outline outline-4"
          : "scale-100 cursor-not-allowed bg-gray-400")
      }
      disabled={!c.isConnectedToSocket}
      onClick$={() => {
        send.playerJoins(c);
      }}
    >
      Start
    </button>
  );
});
