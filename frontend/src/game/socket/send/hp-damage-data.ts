import { globalVar } from "../../global-var";
export const sendHpDamageData = () => {
  globalVar.conn.socket?.send(
    JSON.stringify({
      name: "hp_damage",
      payload: globalVar.hpDamageData,
    }),
  );
};
