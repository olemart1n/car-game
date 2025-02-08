import { component$, useContext } from "@builder.io/qwik";
import gameContext from "~/game/game-context";
export const ErrorMessage = component$(() => {
  const c = useContext(gameContext);
  return (
    <div class="absolute -top-1/4 left-1/2 h-1/2 w-1/2 -translate-x-1/2 ">
      <div
        class={
          "translate-y flex h-1/2 w-full transform duration-300 ease-in-out " +
          (c.isError ? "translate-y-full" : "translate-y-0")
        }
      >
        <div class="bg- m-auto flex h-1/2 w-1/2 flex-col place-content-center rounded bg-orange-400/[.6] text-center text-lg ">
          <p>{c.errorMessage}</p>
          <p>Prøv igjen senere</p>
        </div>
      </div>
    </div>
  );
});
