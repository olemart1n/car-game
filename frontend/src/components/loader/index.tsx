import { component$ } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

export const PreGameLoader = component$(
  ({ preLoader }: { preLoader: Signal<HTMLDivElement | undefined> }) => {
    return (
      <div
        class="flex h-full flex-col items-center justify-center"
        ref={preLoader}
      >
        {" "}
        <div class="mx-auto flex w-fit flex-col gap-4">
          <div class="flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-blue-400 text-4xl text-blue-400">
            <div class="flex h-16 w-16 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-red-400 text-2xl text-red-400"></div>
          </div>
        </div>
        <div class="mx-auto w-fit translate-x-2 p-2.5 text-blue-400">
          <div>
            <span class="mr-2 ">Laster inn</span>
            <span class="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
            <span class="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
            <span class="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
          </div>
        </div>
      </div>
    );
  },
);
