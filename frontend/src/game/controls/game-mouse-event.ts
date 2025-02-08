import { globalVar } from "../global-var";
export const gameMouseEvent = (e: MouseEvent) => {
  // Map mouse movement to theta (horizontal) and phi (vertical) angles
  globalVar.cameraData.theta -= e.movementX * 0.002; // Adjust sensitivity as needed
  globalVar.cameraData.phi -= e.movementY * 0.002;

  // Clamp phi to prevent the camera from flipping upside down
  globalVar.cameraData.phi = Math.max(
    0.1,
    Math.min(Math.PI - 0.1, globalVar.cameraData.phi),
  );
};
