import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

import { fontBrighter } from "./font-loader";

const createTextMesh = (text: string, x: number, y: number, z: number) => {
  const geometry = new TextGeometry(text, {
    font: fontBrighter,
    size: 7,
    depth: 1,
    curveSegments: 20,
    bevelSize: 1,
    bevelOffset: 0,
  });

  const material = new THREE.MeshBasicMaterial({
    color: 0x3fffff,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  mesh.position.set(x, y, z);
  return mesh;
};

export default createTextMesh;
