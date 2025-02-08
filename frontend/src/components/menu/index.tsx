import { component$, useContext } from "@builder.io/qwik";
import { Audio } from "./audio/audio";
import { StartGameButton } from "./start-game-button";
import { UsernameForm } from "./username-form";
import { ConnectionDetails } from "./connection-details";
import { CloseMenuButton } from "./close-menu-button";
import gameContext from "~/game/game-context";
import { Chat } from "./chat";
import { Info } from "./info/info";
export const Menu = component$(() => {
  const gameStore = useContext(gameContext);

  return (
    <div class="absolute -left-1/4 h-full w-1/2 text-white">
      <div
        class={
          "translate-x flex h-full w-1/2 transform flex-col bg-slate-800/[.6] duration-300 ease-in-out " +
          (gameStore.isMenu.value ? "translate-x-full" : "translate-x-0")
        }
      >
        {/* - - - - - - - - - - - - - - - -  */}
        <button class="absolute left-full top-1 ml-1 h-8 w-8 cursor-pointer rounded-sm bg-yellow-400 bg-opacity-80 text-xs font-bold text-slate-800 ">
          esc
        </button>
        <div class="h-1/4 ">
          <h1 class="text-center text-xl">Bilspill</h1>
          <div class="text-center text-red-400">
            <p class="underline">under utvikling</p>
          </div>
          <div class="ml-5 flex w-full gap-2">
            <Info />
            <Audio />
          </div>
        </div>
        {/* <Controllers /> */}

        <UsernameForm />
        {gameStore.isConnectedToSocket && <Chat />}
        <div class="relative mt-auto bg-slate-100 p-2 text-slate-700">
          <ConnectionDetails />
          {gameStore.isInGame ? <CloseMenuButton /> : <StartGameButton />}
        </div>
      </div>
    </div>
  );
});
