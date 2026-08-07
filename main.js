import * as THREE from 'three';

//1. SCENE
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222222);

//2. CAMERA
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(20, 20, 10);
camera.lookAt(0, 0, 0);

//3. RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

//4. BOX (Geometry + Material + Mesh)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
    color: 0x44aa88,
    roughness: 0.4,
    metalness: 0.1,
    emissive: new THREE.Color(0x112233),
});
const box = new THREE.Mesh(geometry, material);
//scene.add(box);

//5. LIGHTS
/*const ambientLight = new THREE.AmbientLight(0x404060);
scene.add(ambientLight);*/

const dirLight = new THREE.DirectionalLight(0xffffff, 1.7);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

/*const fillLight = new THREE.DirectionalLight(0xffaa88, 0.6);
fillLight.position.set(-5, 0, 5);
scene.add(fillLight);*/


/*const backLight = new THREE.DirectionalLight(0x88aaff, 0.4);
backLight.position.set(0, -2, -10);
scene.add(backLight);*/



//7. WINDOW RESIZE HANDLER
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function createFlowerFromCornerPoints(points, petalCount = 9, boxSize = 1) {
  const flowerGroup = new THREE.Group();

  // Material for all boxes – you can change this to any Three.js material
  const material = new THREE.MeshStandardMaterial({ color: 0xff69b4, roughness: 0.4 });
  const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);

  // Helper: builds one petal (the set of boxes) from the corner points
  function buildPetal() {
    const petalGroup = new THREE.Group();
    points.forEach(p => {
      const mesh = new THREE.Mesh(geometry, material);
      // The point is the minimum corner, so the cube center is at (p.x + boxSize/2, …)
      mesh.position.set(
        p.x + boxSize / 2,
        p.y + boxSize / 2,
        p.z + boxSize / 2
      );
      petalGroup.add(mesh);
    });
    return petalGroup;
  }


  // Helper: builds one petal (the set of boxes) from the corner points
  function buildPetal() {
    const petalGroup = new THREE.Group();
    points.forEach(p => {
      const mesh = new THREE.Mesh(geometry, material);
      // The point is the minimum corner, so the cube center is at (p.x + boxSize/2, …)
      mesh.position.set(
        p.x + boxSize / 2,
        p.y + boxSize / 2,
        p.z + boxSize / 2
      );
      petalGroup.add(mesh);
    });
    return petalGroup;
  }

  const angleStep = (2 * Math.PI) / petalCount;

  for (let i = 0; i < petalCount; i++) {
    const petal = buildPetal();
    petal.rotation.z = i * angleStep;
    flowerGroup.add(petal);
  }

return flowerGroup;
}


  const cornerPoints = [
  { x: -2, y: 2, z: 0.25 },
  { x: -7, y: 7, z: 0.25 },
  { x: -8, y: 6, z: 0.75 },
  { x: -6, y: 8, z: 0.75 },
  { x: -5, y: 5, z: 1.5 },
  { x: -4, y: 4, z: 1.5 },
  { x: -6, y: 6, z: 0.75 },
  { x: -3, y: 3, z: 0.75 },
  { x: -4, y: 6, z: 1.75 },
  { x: -6, y: 4, z: 1.75 },
  { x: -4, y: 5, z: 1.25 },
  { x: -5, y: 4, z: 1.25 },
  { x: -3, y: 5, z: 1.75 },
  { x: -5, y: 3, z: 1.75 },
  { x: -6, y: 5, z: 1.0 },
  { x: -5, y: 6, z: 1.0 },
  { x: -7, y: 5, z: 1.5 },
  { x: -5, y: 7, z: 1.5 },
  { x: -7, y: 6, z: 1.0 },
  { x: -6, y: 7, z: 1.0 },
  { x: -3, y: 2, z: 1.0 },
  { x: -2, y: 3, z: 1.0 },
  { x: -4, y: 2, z: 1.5 },
  { x: -2, y: 4, z: 1.5 },
  { x: -4, y: 3, z: 1.0 },
  { x: -3, y: 4, z: 1.0 },
  { x: -8, y: 8, z: 0.25 },
  { x: -8, y: 9, z: 0.5 },
  { x: -7, y: 8, z: 0.5 },
  { x: -9, y: 8, z: 0.5 },
  { x: -8, y: 7, z: 0.5 },
  { x: -9, y: 9, z: 0 },
  { x: -1, y: 1, z: 0.25 },
  { x: -1, y: 2, z: 0.5 },
  { x: -2, y: 1, z: 0.5 },
  { x: 0, y: 0, z: 0 }   // 0,0,0
];

//6. ANIMATION LOOP
function animate() {
    flower.rotation.x += 0;
    flower.rotation.y += 0.005;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

// Then call the function (9 petals, 40° apart)
const flower = createFlowerFromCornerPoints(cornerPoints, 9);
scene.add(flower);
animate();