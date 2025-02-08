import { globalVar } from "../global-var";
export const carDirectionControls = (e: KeyboardEvent) => {
  if (e.type === "keydown") {
    switch (e.key) {
      case "a":
        globalVar.carConfig.direction.left = true;
        break;
      case "d":
        globalVar.carConfig.direction.right = true;
        break;
      case "w":
        globalVar.carConfig.direction.forward = true;

        break;
      case "s":
        globalVar.carConfig.direction.reverse = true;
        break;
    }
  }
  if (e.type === "keyup") {
    switch (e.key) {
      case "a":
        globalVar.carConfig.direction.left = false;
        break;
      case "d":
        globalVar.carConfig.direction.right = false;
        break;
      case "w":
        globalVar.carConfig.direction.forward = false;
        break;
      case "s":
        globalVar.carConfig.direction.reverse = false;
        break;
    }
  }
  document.oncontextmenu = (e) => e.preventDefault();
};
