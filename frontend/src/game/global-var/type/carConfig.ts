export type CarConfig = {
  speed: number;
  acceleration: number;
  friction: number;
  angle: number;
  direction: Direction;
  maxSpeed: number;
};

interface Direction {
  left: boolean;
  right: boolean;
  reverse: boolean;
  forward: boolean;
}
