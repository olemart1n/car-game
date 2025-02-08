import { globalVar } from "~/game/global-var";
import type * as types from "~/game/global-var/type";
import { type GameContextStore } from "~/game/game-context";

export const hpDamageData = (
  data: types.HpDamageData,
  ctx: GameContextStore,
) => {
  if (data.victimId === globalVar.carData.id) {
    ctx.hpPercent -= data.damage;
  }

  const { victim, shooter } = getVictimAndShooter(
    data.victimId,
    data.shooterId,
  );

  if (!victim || !shooter) return;
  victim.hp -= data.damage;

  ctx.isNotification.value = true;
  ctx.notificationMesssage = `${victim.username} ble truffet av ${shooter.username}`;

  setTimeout(() => {
    ctx.isNotification.value = false;
  }, 2000);
};

const getVictimAndShooter = (victimId: string, shooterId: string) => {
  const shooter = globalVar.activePlayers.find((s) => s.id === shooterId);
  const victim = globalVar.activePlayers.find((s) => s.id === victimId);
  return { shooter, victim };
};
