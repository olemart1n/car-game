import { globalVar } from "../../global-var";
export const sendShootData = () => {
  globalVar.conn.socket?.send(
    JSON.stringify({
      name: "shoot_data",
      payload: globalVar.shootData,
    }),
  );
};
