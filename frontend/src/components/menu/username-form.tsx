import { component$, $, useSignal, useOn, useContext } from "@builder.io/qwik";
import { connectToSocket } from "~/game/socket";
import gameContext from "~/game/game-context";
export const UsernameForm = component$(() => {
  const formRef = useSignal<HTMLFormElement>();
  const c = useContext(gameContext);
  useOn(
    "submit",
    $(() => {
      if (c.username.value.length < 3) return;
      connectToSocket(c.username.value, c);
      formRef.value?.remove();
    }),
  );

  return (
    <form class="m-auto   p-2" ref={formRef} preventdefault:submit>
      <h3 class="text-center text-xl text-yellow-500">Brukernavn</h3>
      <input
        type="text"
        name="username"
        id="username"
        bind:value={c.username}
        min={3}
        maxLength={12}
        class="mx-auto my-3 block rounded bg-black text-center text-lg text-white outline outline-yellow-400 placeholder:text-sm placeholder:text-white focus:outline-4 focus:outline-yellow-400"
        placeholder="minimum 3 tegn"
      />

      <button
        class={
          "mx-auto mt-5 block rounded px-4 py-1 font-semibold text-black " +
          (c.username.value.length < 3
            ? "scale-100 cursor-not-allowed bg-gray-400"
            : "scale-110 cursor-pointer bg-yellow-400 outline outline-4")
        }
      >
        OK
      </button>
    </form>
  );
});
