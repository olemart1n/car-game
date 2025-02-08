import * as THREE from "three";
import { world } from "./world";
import { scene } from "./scene";
import { animateFunction } from "./animate-function";
import type { GameContextStore } from "./game-context";
import { loadAudio } from "./audio";

const game = (gameStore: GameContextStore) => {
  const camera = new THREE.PerspectiveCamera( // - - - CAMERA
    75,
    gameStore.mainEl.value!.clientWidth / gameStore.mainEl.value!.clientHeight,
    0.1,
    1000,
  );
  const listener = new THREE.AudioListener();
  camera.add(listener);
  loadAudio(listener);
  const gunAxleRaycaster = new THREE.Raycaster();
  const renderer = new THREE.WebGLRenderer(); //  - - - - - - - - - - - - - RENDERER
  renderer.setSize(
    gameStore.mainEl.value!.clientWidth,
    gameStore.mainEl.value!.clientHeight,
  );
  renderer.setPixelRatio(devicePixelRatio);

  gameStore.mainEl.value?.appendChild(renderer.domElement); //  - - - - - APPEND RENDERER

  renderer.setAnimationLoop(() => {
    //  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ANIMATION LOOP
    animateFunction(camera, gunAxleRaycaster);
    renderer.render(scene, camera);
  });
};

export { world, game };
