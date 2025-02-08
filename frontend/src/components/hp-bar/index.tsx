import { component$ } from "@builder.io/qwik";

interface HpBarProps {
  hpPercent: number;
}
export const HpBar = component$<HpBarProps>(({ hpPercent }) => {
  return (
    <div class="absolute right-5 top-5 h-4 w-40 overflow-hidden rounded bg-slate-400 outline outline-1">
      <i class="absolute left-1/2 -translate-x-1/2 text-xs text-slate-800">
        {hpPercent}
      </i>
      <div
        class=" h-full "
        style={{
          width: `${hpPercent}%`,
          backgroundColor: `rgb(${Math.abs(255 - hpPercent * 2)}, ${hpPercent * 2}, 0)`,
        }}
      ></div>
    </div>
  );
});
