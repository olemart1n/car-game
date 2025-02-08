import { component$, useContext } from "@builder.io/qwik";
import gameContext from "~/game/game-context";
export const CloseMenuButton = component$(() => {
  const c = useContext(gameContext);
  return (
    <button
      class={
        "absolute right-5 top-1/2 block -translate-y-1/2  rounded-sm bg-gray-400 px-4 py-2 text-lg text-black "
      }
      onClick$={() => {
        c.mainEl.value?.requestPointerLock();
      }}
    >
      Lukk meny
    </button>
  );
});
