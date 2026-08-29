import * as THREE from 'three';

// Global setup
const rand = Math.random();
const clock = new THREE.Clock();
const day = 14;
const month = 2;
const year = 2002;

// ---- HIGH RESOLUTION SETUP ----
// Supersampling scale: increase for even sharper output (e.g., 3, 4)
const RESOLUTION_SCALE = 2;
// -----------------------------

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x232323);

// Camera setup
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  3.0,
  1000
);
camera.position.set(0, -100, 40);
camera.lookAt(0, 25, -rand);

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// ---- HIGH RESOLUTION: set buffer size scaled, CSS size natural ----
const bufferWidth = window.innerWidth * RESOLUTION_SCALE;
const bufferHeight = window.innerHeight * RESOLUTION_SCALE;
renderer.setSize(bufferWidth, bufferHeight, false); // false = don't touch CSS
renderer.domElement.style.width = window.innerWidth + 'px';
renderer.domElement.style.height = window.innerHeight + 'px';
renderer.setPixelRatio(0.5); // we handle scaling manually
// ------------------------------------------------------------------

document.body.appendChild(renderer.domElement);

// Lighting
const dirLight = new THREE.DirectionalLight(0xffffff, 10);
dirLight.position.set(5, -10, 1);
scene.add(dirLight);

// Resize handler - now updates both buffer and CSS
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();

  // Update buffer size (scaled) and CSS size (natural)
  renderer.setSize(w * RESOLUTION_SCALE, h * RESOLUTION_SCALE, false);
  renderer.domElement.style.width = w + 'px';
  renderer.domElement.style.height = h + 'px';
}

// Custom Material (unchanged)
const BeatingMaterial = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uChromeSilver: { value: new THREE.Color(0xefefe4) },
    uIceCyan: { value: new THREE.Color(0x5ccce9) },
    uIcyGlow: { value: new THREE.Color(0xa8ddf9) },
    uDeepIce: { value: new THREE.Color(0x115660) },
    day: { value: day }  // NEW: controls blue intensity of icy glow
  },
  vertexShader: `
    uniform float uTime;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;
    
    void main() {
      vNormal = normalize(normalMatrix * normal);
      
      vec4 worldPos = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPos.xyz;
      vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
      
      // ---- BEATING REMOVED - no displacement ----
      vec3 displaced = position; // original position, static
      
      vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
      vViewPosition = -mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uChromeSilver;
    uniform vec3 uIceCyan;
    uniform vec3 uIcyGlow;
    uniform vec3 uDeepIce;
    uniform float day;  // NEW: user‑controlled blue value

    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldNormal;
    varying vec3 vWorldPosition;

    // 3D Noise for procedural crystal fractures
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                 i.z + vec4(0.0, i1.z, i2.z, 1.0))
               + i.y + vec4(0.0, i1.y, i2.y, 1.0))
               + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    // Synthetic Studio HDRI Environment Reflection
    vec3 getEnvironmentReflect(vec3 r) {
      float y = r.y * 0.5 + 0.5;
      vec3 sky = mix(vec3(0.05, 0.1, 0.2), vec3(0.9, 0.95, 1.0), pow(y, 2.0));
      vec3 ground = mix(vec3(0.01, 0.02, 0.05), vec3(0.3, 0.35, 0.4), pow(1.0 - y, 2.0));
      vec3 env = mix(ground, sky, step(0.0, r.y));
      
      // Sharp synthetic light studio panels
      float studioLight1 = smoothstep(0.85, 0.98, dot(r, normalize(vec3(0.5, 0.8, 0.6))));
      float studioLight2 = smoothstep(0.80, 0.95, dot(r, normalize(vec3(-0.8, 0.2, -0.4))));
      
      return env + vec3(studioLight1 * 2.0) + vec3(studioLight2 * 1.0);
    }

    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      vec3 worldNormal = normalize(vWorldNormal);
      vec3 worldViewDir = normalize(cameraPosition - vWorldPosition);

      // 1. Procedural Internal Ice Fractures
      float noiseVal = snoise(vWorldPosition * 0.35 + vec3(0.0, uTime * 0.05, 0.0));
      float crystalVeins = pow(abs(noiseVal), 0.25);
      float sharpVeins = smoothstep(0.4, 0.45, crystalVeins) * 0.6;

      // 2. Liquid Silver Reflection Vector
      vec3 reflectDir = reflect(-worldViewDir, worldNormal);
      vec3 chromeReflect = getEnvironmentReflect(reflectDir);

      // 3. Fresnel & Prismatic Chromatic Aberration
      float NdotV = max(dot(normal, viewDir), 0.0);
      float fresnel = pow(1.0 - NdotV, 0.5);

      // Dispersion (RGB Shift at grazing angles)
      vec3 dispersion;
      dispersion.r = getEnvironmentReflect(refract(-worldViewDir, worldNormal, 0.96)).r;
      dispersion.g = getEnvironmentReflect(refract(-worldViewDir, worldNormal, 0.98)).g;
      dispersion.b = getEnvironmentReflect(refract(-worldViewDir, worldNormal, 1.02)).b;

      // 4. Subsurface Ice Glow (Internal scattering)
      float sss = pow(NdotV, 2.0) * 0.8;
      vec3 internalGlow = mix(uDeepIce, uIceCyan, sss + sharpVeins);

      // 5. Dual Metallic Specular Highlights
      vec3 light1 = normalize(vec3(1.0, 1.5, 1.0));
      vec3 light2 = normalize(vec3(-1.5, -0.8, -0.5));
      float spec1 = pow(max(dot(normal, normalize(light1 + viewDir)), 0.0), 256.0);
      float spec2 = pow(max(dot(normal, normalize(light2 + viewDir)), 0.0), 128.0);
      
      // NEW: icy glow with user‑controlled blue channel
      vec3 icyGlow = vec3(uIcyGlow.r, uIcyGlow.g, day/17.0);
      
      vec3 specularGleam = (vec3(1.0) * spec1 * 1.0) + (icyGlow * spec2 * 0.6);

      // 6. Final Layer Compositing
      vec3 baseMaterial = mix(internalGlow, uChromeSilver * chromeReflect, 0.85 + sharpVeins * 0.2);
      vec3 finalColor = mix(baseMaterial, dispersion + icyGlow, fresnel * 0.2);
      
      finalColor += specularGleam + (sharpVeins * icyGlow * 0.5);

      // Optional: soft clamp to keep highlights from burning
      finalColor = clamp(finalColor, 0.0, 1.5);

      float alpha = clamp(0.85 + fresnel * 0.15, 0.0, 1.0);
      gl_FragColor = vec4(finalColor, alpha);
        }
  `,
  transparent: true,
  depthWrite: true,
  depthTest: true
});
const myColorAquarius = new THREE.Color(0.29, 0.2, day*0.02); //*****

const StemMaterialAquarius = new THREE.MeshPhysicalMaterial({ //*****
  color: myColorAquarius,         // Deep icy navy/teal
  emissive: 0x227799,      // Subtle internal blue glow
  emissiveIntensity: 0.5,
  roughness: 0.1,          // Shiny surface
  metalness: 0.3,          // Metallic silver undertone
  transmission: 0.8,       // Glass-like icy refraction
  thickness: 1.2,          // Depth of the refraction
  transparent: true,
  opacity: 0.25
});


// Points
const AquariusPoints = [
  { x: -2, y: 2, z: 0.25 }, { x: -7, y: 7, z: 0.25 }, { x: -8, y: 6, z: 0.75 },
  { x: -6, y: 8, z: 0.75 }, { x: -5, y: 5, z: 1.5 }, { x: -4, y: 4, z: 1.5 },
  { x: -6, y: 6, z: 0.75 }, { x: -3, y: 3, z: 0.75 }, { x: -4, y: 6, z: 1.75 },
  { x: -6, y: 4, z: 1.75 }, { x: -4, y: 5, z: 1.25 }, { x: -5, y: 4, z: 1.25 },
  { x: -3, y: 5, z: 1.75 }, { x: -5, y: 3, z: 1.75 }, { x: -6, y: 5, z: 1.0 },
  { x: -5, y: 6, z: 1.0 }, { x: -7, y: 5, z: 1.5 }, { x: -5, y: 7, z: 1.5 },
  { x: -7, y: 6, z: 1.0 }, { x: -6, y: 7, z: 1.0 }, { x: -3, y: 2, z: 1.0 },
  { x: -2, y: 3, z: 1.0 }, { x: -4, y: 2, z: 1.5 }, { x: -2, y: 4, z: 1.5 },
  { x: -4, y: 3, z: 1.0 }, { x: -3, y: 4, z: 1.0 }, { x: -8, y: 8, z: 0.25 },
  { x: -8, y: 9, z: 0.5 }, { x: -7, y: 8, z: 0.5 }, { x: -9, y: 8, z: 0.5 },
  { x: -8, y: 7, z: 0.5 }, { x: -9, y: 9, z: 0 }, { x: -1, y: 1, z: 0.25 },
  { x: -1, y: 2, z: 0.5 }, { x: -2, y: 1, z: 0.5 }, { x: 0, y: 0, z: 0 }
];

// Flower Head
function createFlowerFromCornerPoints(points, petalCount = 9, boxSize = 1) {
  const flowerGroup = new THREE.Group();
  const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);

  function buildPetal() {
    const petalGroup = new THREE.Group();
    points.forEach(p => {
      const mesh = new THREE.Mesh(geometry, BeatingMaterial);
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

// Organic Voxel Stem with subtle inward bias
function createVoxelStem(length = rand, boxSize = 1, startX = 0, startY = 0) {
  const stemGroup = new THREE.Group();
  const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);

  let currentX = startX;
  let currentY = startY;

  for (let z = 0; z < length; z++) {
    if (Math.random() < 0.45 && z !== 0) {
      let offsetX = Math.floor(Math.random() * 3) - 1;
      let offsetY = Math.floor(Math.random() * 3) - 1;

      // 60% chance to bias towards center if stem drifts too far out
      if (Math.abs(currentX) > 1 && Math.random() < 0.6) {
        offsetX = currentX > 0 ? 0.55 : -0.55;
      }
      if (Math.abs(currentY) > 1 && Math.random() < 0.6) {
        offsetY = currentY > 0 ? 0.55 : -0.55;
      }

      currentX -= offsetX * boxSize;
      currentY -= offsetY * boxSize;
    }

    const voxel = new THREE.Mesh(geometry, StemMaterialAquarius);
    voxel.position.set(currentX, currentY, -z);
    stemGroup.add(voxel);
  }

  return stemGroup;
}

// Complete Flower
function createCompleteFlower(points, petalCount = 11, boxSize = 1, stemLength = 30, headOffsetX = 0, headOffsetY = 0) {
  const completeFlower = new THREE.Group();

  const head = createFlowerFromCornerPoints(points, petalCount, boxSize);
  head.rotation.x = Math.random() * 0.8 - 0.4;
  head.rotation.y = Math.random() * 0.8 - 0.4;
  head.position.x = headOffsetX;
  head.position.y = headOffsetY;

  const stem = createVoxelStem(stemLength, boxSize, headOffsetX, headOffsetY);

  completeFlower.add(head);
  completeFlower.add(stem);

  return completeFlower;
}

// Life Path Logic
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

// Bouquet Generator
function generateBouquetFromBirthdate(day, month, year) {
  const bouquetGroup = new THREE.Group();
  const count = calculateLifePathNumber(day, month, year);
  
  // ---- NEW PART: assign different number based on count ----
  let specialNumber = 1; // default fallback
  if (count === 33) {
    specialNumber = 0.35;   // distinct value for 33
  } else if (count === 22) {
    specialNumber = 0.35;   // distinct value for 22
  } else if (count === 11) {
    specialNumber = 0.3;   // distinct value for 11
  } else if (count < 11) {
    specialNumber = 0.3;  // distinct value for smaller than 11
  }


  let specialNumber2 = 1; // default fallback
  if (count === 33) {
    specialNumber2 = 0.8;   // distinct value for 33
  } else if (count === 22) {
    specialNumber2 = 1;   // distinct value for 22
  } else if (count === 11) {
    specialNumber2 = 1.2;   // distinct value for 11
  } else if (count < 11) {
    specialNumber2 = 1.5;  // distinct value for smaller than 11
  }
  // ---------------------------------------------------------

  // Original life calculation – you could also replace or combine it with specialNumber
  //const life = 1 - (count / 60);

  for (let i = 0; i < count; i++) {
    let offsetX = 0;
    let offsetY = 0;

    if (count > 10) {
      // Now the offset is scaled by specialNumber as well, giving each case a different spread
      offsetX = (Math.random() * (day*2/specialNumber2 + 1) - day/specialNumber2) * specialNumber2;
      offsetY = (Math.random() * (day*2/specialNumber2 + 1) - day/specialNumber2) * specialNumber2;
    }
    if (6 < count < 11) {
      // Now the offset is scaled by specialNumber as well, giving each case a different spread
      offsetX = Math.random() * 25 -9;
      offsetY = Math.random() * 25 -9;
    }
    if (0 < count < 7) {
      // Now the offset is scaled by specialNumber as well, giving each case a different spread
      offsetX = Math.random() * 25 -9;
      offsetY = Math.random() * 25 -9;
    }

    const flower = createCompleteFlower(AquariusPoints, 11, 1, 200, offsetX, offsetY);

    if (count > 1) {
      // Z-position also scales with specialNumber for extra distinction
      flower.position.z = (Math.random() * specialNumber*10)*10;
    }

    bouquetGroup.add(flower);
  }

  return bouquetGroup;
}

// Initialize
const bouquet = generateBouquetFromBirthdate(day,month,year);
scene.add(bouquet);

function savePicture(renderer, filename = 'screenshot.png') {
    // Capture the canvas as a data URL
    const link = document.createElement('a');
    link.download = filename;
    link.href = renderer.domElement.toDataURL('image/png');
    link.click();
}

// Render loop
function animate() {
  requestAnimationFrame(animate);

  bouquet.rotation.z += 0.01;
  BeatingMaterial.uniforms.uTime.value = clock.getElapsedTime();

  renderer.render(scene, camera);
}

animate();
//savePicture(renderer, 'my-scene.png');