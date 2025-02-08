import * as THREE from "three";

// Create a geometry for the stars
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff, // Star color (white)
  size: 1, // Size of each star
  sizeAttenuation: true, // Makes the stars smaller when they are further away,
  fog: false,
});

const minDistance = 700;
const starVertices = [];
for (let i = 0; i < 1000; i++) {
  let x, y, z, distance;

  // Keep generating random coordinates until they are at least 300 units away
  do {
    x = THREE.MathUtils.randFloatSpread(2000); // Random x position
    y = THREE.MathUtils.randFloatSpread(2000); // Random y position
    z = THREE.MathUtils.randFloatSpread(2000); // Random z position
    distance = Math.sqrt(x * x + y * y + z * z); // Calculate distance from (0,0,0)
  } while (distance < minDistance);

  starVertices.push(x, y, z);
}

starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starVertices, 3),
);

// Create the Points (stars)
export const stars = new THREE.Points(starGeometry, starMaterial);
