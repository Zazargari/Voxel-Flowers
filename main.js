import * as THREE from 'three';

//scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x232323);

//camera
const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);
camera.position.set(0, -25, 15);
camera.lookAt(0, 0, 0);

//renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

//temp-light.
const dirLight = new THREE.DirectionalLight(0xffffff, 10);
dirLight.position.set(5, -10, 1);
scene.add(dirLight);

//resize-handler
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

//temp-material.
const AquariusMaterial = new THREE.MeshStandardMaterial({ color: 0xffd0dd, roughness: 1, metalness: 0.9 });
const StemMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xaaffaa, 
    roughness: 0.9, 
    metalness: 0.1 
});

//points
const AquariusPoints = [
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
  { x: 0, y: 0, z: 0 }
];

//flower-from-point**
function createFlowerFromCornerPoints(points, petalCount = 9, boxSize = 1) {
  const flowerGroup = new THREE.Group();
  const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);

  //petal-builder**
  function buildPetal() {
    const petalGroup = new THREE.Group();
    points.forEach(p => {
      const mesh = new THREE.Mesh(geometry, AquariusMaterial);
      mesh.position.set(
        p.x + boxSize / 2,
        p.y + boxSize / 2,
        p.z + boxSize / 2
      );
      petalGroup.add(mesh);
    });
    return petalGroup;
  }

  //petal-rotator**
  const angleStep = (2 * Math.PI) / petalCount;
  for (let i = 0; i < petalCount; i++) {
    const petal = buildPetal();
    petal.rotation.z = i * angleStep;
    flowerGroup.add(petal);
  }

return flowerGroup;
}

//stem-builder**
function createVoxelStem(length = 25, boxSize = 1) {
  const stemGroup = new THREE.Group();
  const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);

  let currentX = 0;
  let currentY = 0;

  for (let z = 0; z > -length; z--) {
    //jitter
    if (Math.random() < 0.35 && z !== 0) {
      const offsetX = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
      const offsetY = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1

      currentX += offsetX * boxSize;
      currentY += offsetY * boxSize;
    }

    const voxel = new THREE.Mesh(geometry, StemMaterial);
    voxel.position.set(currentX, currentY, z * boxSize);
    stemGroup.add(voxel);
  }

  return stemGroup;
}

//head+stem-builder**
function createCompleteFlower(points, petalCount = 8, boxSize = 1, stemLength = 30) {
  const completeFlower = new THREE.Group();

  const head = createFlowerFromCornerPoints(points, petalCount, boxSize);
  const stem = createVoxelStem(stemLength, boxSize);

  completeFlower.add(head);
  completeFlower.add(stem);

  return completeFlower;
}

//life-path-number**
function calculateLifePathNumber(day, month, year) {
  const reduceToSingleDigit = (num) => {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num.toString().split('').reduce((sum, d) => sum + parseInt(d, 10), 0);
    }
    return num;
  };

  const reducedDay = reduceToSingleDigit(day);
  const reducedMonth = reduceToSingleDigit(month);
  const reducedYear = reduceToSingleDigit(year);

  return reduceToSingleDigit(reducedDay + reducedMonth + reducedYear);
}

//bouquet**
function generateBouquetFromBirthdate(day, month, year) {
  const bouquetGroup = new THREE.Group();
  const count = calculateLifePathNumber(day, month, year);

  console.log(`Life Path Number: ${count}`);

  const radius = count === 1 ? 0 : count * 3.5; // Radius scales with count

  for (let i = 0; i < count; i++) {
    const flower = createCompleteFlower(AquariusPoints, 8, 1, 30);

    if (count > 1) {
      const angle = (i / count) * Math.PI * 2;
      flower.position.x = Math.cos(angle) * radius;
      flower.position.y = Math.sin(angle) * radius;

      //tilt
      flower.rotation.x = (Math.random() - 0.5) * 0.2;
      flower.rotation.y = (Math.random() - 0.5) * 0.2;
    }

    bouquetGroup.add(flower);
  }

  return bouquetGroup;
}

const bouquet = generateBouquetFromBirthdate(14, 2, 2002);
scene.add(bouquet);

//animate
function animate() {
  bouquet.rotation.z += 0.003;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();