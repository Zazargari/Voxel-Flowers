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
camera.position.set(5, 5, 10);
camera.lookAt(0, 0, 0);

//3. RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

//4. BOX (Geometry + Material + Mesh)
const geometry = new THREE.BoxGeometry(8, 8, 8);
const material = new THREE.MeshStandardMaterial({
    color: 0x44aa88,
    roughness: 0.4,
    metalness: 0.1,
    emissive: new THREE.Color(0x112233),
});
const box = new THREE.Mesh(geometry, material);
scene.add(box);

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


//6. ANIMATION LOOP
function animate() {
    box.rotation.x += 0;
    box.rotation.y += 0.005;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
animate();

//7. WINDOW RESIZE HANDLER
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}