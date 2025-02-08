// import * as THREE from "three";
// import moonTexture from "./moon-texture.jpeg";
// import { world } from "../world";
// export const textureLoader = (): Promise<boolean> => {
//   console.log("somehting");
//   return new Promise((resolve, reject) => {
//     // Load and create audio
//     const loader = new THREE.TextureLoader();
//     console.log("loader");
//     loader.load(
//       moonTexture,
//       (texture1) => {
//         const texture1Ratio = 3840 / 5760;

//         world.moonSurface.material.map = texture1;
//         world.moonSurface.material.map.repeat.x = 1 / texture1Ratio;
//         world.moonSurface.material.map.offset.x =
//           -(1 - texture1Ratio) / (2 * 1);
//         world.moonSurface.material.map.needsUpdate = true;
//         console.log("Is resolved");
//         resolve(true); // Resolve the promise with the loaded texture
//       },
//       undefined,
//       (err) => {
//         reject(err); // Reject the promise if there's an error
//       },
//     );
//   });
// };
