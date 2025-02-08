import { component$ } from "@builder.io/qwik";

export const GunScope = component$(() => {
  return (
    <div class="absolute left-1/2 top-1/4 -translate-x-1/2">
      <div class="h-1 w-3 translate-y-1 rotate-90 bg-red-400"></div>
      <div class="h-1 w-3 bg-red-400"></div>
    </div>
  );
});
