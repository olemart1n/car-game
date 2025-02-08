import {
  component$,
  useStore,
  useSignal,
  useContextProvider,
} from "@builder.io/qwik";
import gameContext from "../game/game-context";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  Menu,
  PreGameLoader,
  GunScope,
  ErrorMessage,
  NotificationMessage,
  HpBar,
} from "~/components";
import type { GameContextStore } from "../game/game-context";
export default component$(() => {
  const preLoader = useSignal<HTMLDivElement | undefined>();
  const username =
    import.meta.env.PUBLIC_ENV === "dev"
      ? "Ola" + Math.round(Math.random() * 100).toString()
      : "";
  const gameStore = useStore<GameContextStore>({
    connectedSpectators: [],
    username: useSignal(username),
    isError: false,
    errorMessage: "",
    isNotification: useSignal(false),
    notificationMesssage: "",
    isMenu: useSignal(true),
    isConnectedToSocket: false,
    mainEl: useSignal<HTMLElement | undefined>(),
    hpPercent: 100,
    messages: [],
    messageEndRefDiv: useSignal<HTMLDivElement | undefined>(),
    isInGame: false,
  });
  useContextProvider(gameContext, gameStore);
  return (
    <main ref={gameStore.mainEl} class="relative ">
      <Menu />
      <PreGameLoader preLoader={preLoader} />
      <GunScope />
      <ErrorMessage />
      <NotificationMessage />
      <HpBar hpPercent={gameStore.hpPercent} />
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
