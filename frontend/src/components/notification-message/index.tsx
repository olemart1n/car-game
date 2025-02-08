import { component$, useContext } from "@builder.io/qwik";
import gameContext from "~/game/game-context";
export const NotificationMessage = component$(() => {
  const c = useContext(gameContext);
  return (
    <div
      class={
        "absolute left-2/3 top-5 flex h-8 w-1/6 -translate-x-1/2 transform place-content-center place-items-center bg-yellow-400 text-center opacity-0 duration-300 ease-in-out " +
        (c.isNotification.value ? "opacity-100" : "opacity-0")
      }
    >
      <p class="font-bold">{c.notificationMesssage}</p>
    </div>
  );
});
