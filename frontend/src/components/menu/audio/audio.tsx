import { component$, useSignal } from "@builder.io/qwik";
import { LuVolume2, LuVolume } from "@qwikest/icons/lucide";

import { globalVar } from "~/game/global-var";
export const Audio = component$(() => {
  const isSound = useSignal(true);
  return (
    <div class="group relative w-fit">
      {isSound.value ? (
        <LuVolume2
          class="h-6 w-6  cursor-pointer"
          onClick$={() => {
            isSound.value = !isSound.value;
            const song = globalVar.audio.get("bg-song");
            song.stop();
          }}
        />
      ) : (
        <LuVolume
          class="h-6 w-6  cursor-pointer text-red-600"
          onClick$={() => {
            isSound.value = !isSound.value;
            const song = globalVar.audio.get("bg-song");
            song.play();
          }}
        />
      )}
    </div>
  );
});
