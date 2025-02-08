import * as THREE from "three";
import { globalVar } from "../global-var";
export const loadAudio = (listener: THREE.AudioListener) => {
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load("/audio/bg-music.mp3", (buffer) => {
    const audioInstance = new THREE.Audio(listener);
    audioInstance.setBuffer(buffer);
    audioInstance.play();
    globalVar.audio.set("bg-song", audioInstance);
  });
  audioLoader.load("/audio/gun_sound.mp3", (buffer) => {
    const audioInstance = new THREE.Audio(listener);
    audioInstance.setBuffer(buffer);
    globalVar.audio.set("shoot-sound", audioInstance);
  });
  audioLoader.load("/audio/explosion_sound.mp3", (buffer) => {
    const audioInstance = new THREE.Audio(listener);
    audioInstance.setBuffer(buffer);
    globalVar.audio.set("explosion-sound", audioInstance);
  });
};
