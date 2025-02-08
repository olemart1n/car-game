import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import brighter from "./fonts/Brighter_Regular.json";

const loader = new FontLoader();
export const fontBrighter = loader.parse(brighter);
