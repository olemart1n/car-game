import type * as type from "./type";

export const carConfig: type.CarConfig = {
  speed: 0,
  acceleration: 0.02,
  friction: 0.01,
  angle: 0,
  maxSpeed: 0.15,
  direction: {
    left: false,
    right: false,
    reverse: false,
    forward: false,
  },
};
