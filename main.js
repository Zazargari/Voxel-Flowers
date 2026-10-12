import * as THREE from 'three';

// Global setup
const rand = Math.random();
const clock = new THREE.Clock();
let day = 12;
let month = 10;
let year = 2002;

const AquariusColor = new THREE.Color(0.29, 0.15, day*0.02);
const PiscesColor = new THREE.Color(0.9, 0.1, day*0.005);
const AriesColor = new THREE.Color(1.0, 0.005, day*0.001);
const TaurusColor = new THREE.Color(0.1, 0.7, day*0.035);
const LibraColor = new THREE.Color(0.75, 0.9, day*0.033);
const SagittariusColor = new THREE.Color(0.85, 0.1, day*0.0005);
const LeoColor = new THREE.Color(1.0, 0.65, day*0.0);
const CancerColor = new THREE.Color(0.95, 0.3, day*0.0001);
const CapricornColor = new THREE.Color(0.1, 0.3, day*0.025);
const GeminiColor = new THREE.Color(0.85, 0.3, day*0.0005);
const ScorpioColor = new THREE.Color(1.0, 0.1, day*0.0);
const VirgoColor = new THREE.Color(0.85, 0.1, day*0.01);

const AquariusColor02 = new THREE.Color(0x1136e0);
const PiscesColor02 = new THREE.Color(0xf78bdc);
const AriesColor02 = new THREE.Color(0xff0000);
const TaurusColor02 = new THREE.Color(0x106186);
const LibraColor02 = new THREE.Color(0xf292b2);
const SagittariusColor02 = new THREE.Color(0xeb710e);
const LeoColor02 = new THREE.Color(0xffc800);
const CancerColor02 = new THREE.Color(0xc10000);
const CapricornColor02 = new THREE.Color(0x7381f7);
const GeminiColor02 = new THREE.Color(0xe36e1b);
const ScorpioColor02 = new THREE.Color(0xa2f2d4);
const VirgoColor02 = new THREE.Color(0xd695fc);

const AquariusColor03 = new THREE.Color(0x386df9);
const PiscesColor03 = new THREE.Color(0xf78bbc);
const AriesColor03 = new THREE.Color(0xff0000);
const TaurusColor03 = new THREE.Color(0x106136);
const LibraColor03 = new THREE.Color(0xf262b2);
const SagittariusColor03 = new THREE.Color(0xeb710e);
const LeoColor03 = new THREE.Color(0xffcc00);
const CancerColor03 = new THREE.Color(0xf10000);
const CapricornColor03 = new THREE.Color(0x59c0f9);
const GeminiColor03 = new THREE.Color(0xd33e1b);
const ScorpioColor03 = new THREE.Color(0x97000e);
const VirgoColor03 = new THREE.Color(0xb144b3);

// Points
const AquariusPetals = 11;
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
const PiscesPetals = 4;
const PiscesPoints =[
  { x: 0, y: 0, z: 0 },
  { x: -4, y: 6, z: 4 },
  { x: -6, y: 4, z: 4 },
  { x: -6, y: 5, z: 4.5 },
  { x: -5, y: 6, z: 4.5 },
  { x: -8, y: 5, z: 5 },
  { x: -5, y: 8, z: 5 },
  { x: -6, y: 7, z: 4.5 },
  { x: -7, y: 6, z: 4.5 },
  { x: -5, y: 7, z: 4.5 },
  { x: -7, y: 5, z: 4.5 },
  { x: -8, y: 8, z: 4 },
  { x: -7, y: 8, z: 4.5 },
  { x: -8, y: 7, z: 4.5 },
  { x: -2, y: 1, z: 1 },
  { x: -1, y: 2, z: 1 },
  { x: -3, y: 1, z: 1.5 },
  { x: -1, y: 3, z: 1.5 },
  { x: -2, y: 5, z: 3 },
  { x: -2, y: 4, z: 3 },
  { x: -1, y: 4, z: 2.5 },
  { x: -1, y: 5, z: 2.5 },
  { x: -4, y: 1, z: 2.5 },
  { x: -5, y: 1, z: 2.5 },
  { x: -5, y: 2, z: 3 },
  { x: -4, y: 2, z: 3 },
  { x: -5, y: 3, z: 3.5 },
  { x: -6, y: 2, z: 3.5 },
  { x: -7, y: 2, z: 3.5 },
  { x: -6, y: 3, z: 4 },
  { x: -7, y: 4, z: 4 },
  { x: -6, y: 1, z: 3 },
  { x: -1, y: 6, z: 3 },
  { x: -3, y: 5, z: 3.5 },
  { x: -4, y: 5, z: 3.5 },
  { x: -5, y: 4, z: 3.5 },
  { x: -2, y: 6, z: 3.5 },
  { x: -2, y: 7, z: 3.5 },
  { x: -3, y: 6, z: 4 },
  { x: -4, y: 7, z: 4 },
  { x: -1, y: 1, z: 0 },
  { x: -2, y: 3, z: 2 },
  { x: -3, y: 2, z: 2 },
  { x: -3, y: 3, z: 2.5 },
  { x: -3, y: 4, z: 2.5 },
  { x: -4, y: 3, z: 2.5 },
  { x: -4, y: 4, z: 3 },
  { x: -2, y: 2, z: 1 },
  { x: -5, y: 5, z: 4 },
  { x: -7, y: 7, z: 4 },
  { x: -6, y: 6, z: 4 },
  { x: -3, y: 8, z: 4.5 },
  { x: -8, y: 3, z: 4.5 },
  { x: -9, y: 9, z: 3 }
];
const CancerPetals = 4;
const CancerPoints = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: -1, z: 0.5 },
  { x: -1, y: 0, z: 0.5 },
  { x: -1, y: -2, z: 1 },
  { x: -2, y: -1, z: 1 },
  { x: -2, y: 0, z: 1 },
  { x: -1, y: -1, z: 1 },
  { x: 0, y: -2, z: 1 },
  { x: -3, y: -1, z: 1.5 },
  { x: -3, y: 0, z: 1.5 },
  { x: -2, y: -2, z: 1.5 },
  { x: -1, y: -3, z: 1.5 },
  { x: -3, y: -2, z: 2.5 },
  { x: -4, y: -2, z: 2.5 },
  { x: -4, y: -1, z: 2.5 },
  { x: -4, y: 0, z: 2.5 },
  { x: -1, y: -4, z: 2.5 },
  { x: -2, y: -4, z: 2.5 },
  { x: -2, y: -3, z: 2.5 },
  { x: -3, y: -3, z: 2.5 },
  { x: -5, y: -2, z: 3.5 },
  { x: -5, y: -1, z: 3.5 },
  { x: -5, y: 0, z: 3.5 },
  { x: -1, y: -5, z: 3.5 },
  { x: -2, y: -5, z: 3.5 },
  { x: -3, y: -4, z: 3.5 },
  { x: -4, y: -3, z: 3.5 },
  { x: -4, y: -4, z: 4.5 },
  { x: -4, y: -5, z: 4.5 },
  { x: -3, y: -5, z: 4.5 },
  { x: -3, y: -6, z: 4.5 },
  { x: -2, y: -6, z: 4.5 },
  { x: -1, y: -6, z: 4.5 },
  { x: -6, y: 0, z: 4.5 },
  { x: -6, y: -1, z: 4.5 },
  { x: -6, y: -2, z: 4.5 },
  { x: -5, y: -4, z: 4.5 },
  { x: -5, y: -5, z: 4.5 },
  { x: -6, y: -4, z: 4.5 },
  { x: -6, y: -5, z: 5.5 },
  { x: -7, y: -4, z: 5.5 },
  { x: -5, y: -6, z: 5.5 },
  { x: -7, y: -2, z: 5.5 },
  { x: -7, y: -1, z: 5.5 },
  { x: -7, y: 0, z: 5.5 },
  { x: -1, y: -7, z: 5.5 },
  { x: -2, y: -7, z: 5.5 },
  { x: -3, y: -7, z: 5.5 },
  { x: -4, y: -6, z: 5.5 },
  { x: -8, y: -5, z: 6.5 },
  { x: -8, y: -4, z: 6.5 },
  { x: -7, y: -5, z: 6.5 },
  { x: -7, y: -6, z: 6.5 },
  { x: -6, y: -7, z: 6.5 },
  { x: -5, y: -8, z: 6.5 },
  { x: -6, y: -6, z: 6.5 },
  { x: -5, y: -7, z: 6.5 },
  { x: -8, y: -2, z: 6.5 },
  { x: -8, y: -1, z: 6.5 },
  { x: -8, y: 0, z: 6.5 },
  { x: 0, y: -8, z: 6.5 },
  { x: -1, y: -8, z: 6.5 },
  { x: -2, y: -8, z: 6.5 },
  { x: -3, y: -8, z: 6.5 },
  { x: -4, y: -8, z: 6.5 },
  { x: -4, y: -7, z: 6.5 },
  { x: 0, y: -7, z: 5.5 },
  { x: 0, y: -5, z: 3.5 },
  { x: 0, y: -3, z: 1.5 },
  { x: 0, y: -6, z: 4.5 },
  { x: 0, y: -4, z: 2.5 },
  { x: -2, y: -8, z: 7.5 },
  { x: -1, y: -8, z: 7.5 },
  { x: -8, y: 0, z: 7.5 },
  { x: -8, y: -1, z: 7.5 },
  { x: -8, y: -2, z: 7.5 },
  { x: -7, y: -6, z: 7.5 }
];
const AriesPetals = 5;
const AriesPoints = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 1, z: 1 },
  { x: -1, y: 1, z: 1 },
  { x: -1, y: 0, z: 1 },
  { x: -2, y: 2, z: 1.5 },
  { x: -1, y: 2, z: 1.5 },
  { x: -2, y: 1, z: 1.5 },
  { x: -1, y: 3, z: 2 },
  { x: -2, y: 3, z: 2 },
  { x: -3, y: 3, z: 2 },
  { x: -3, y: 2, z: 2 },
  { x: -3, y: 1, z: 2 },
  { x: -4, y: 1, z: 1.5 },
  { x: -1, y: 4, z: 1.5 },
  { x: -4, y: 2, z: 1 },
  { x: -4, y: 3, z: 1 },
  { x: -4, y: 4, z: 1 },
  { x: -3, y: 4, z: 1 },
  { x: -2, y: 4, z: 1 },
  { x: -3, y: 5, z: 0.5 },
  { x: -4, y: 5, z: 0.5 },
  { x: -5, y: 5, z: 0.5 },
  { x: -5, y: 4, z: 0.5 },
  { x: -5, y: 3, z: 0.5 },
  { x: -6, y: 5, z: 1 },
  { x: -6, y: 4, z: 1 },
  { x: -4, y: 6, z: 1 },
  { x: -5, y: 6, z: 1 },
  { x: -6, y: 6, z: 1.5 },
  { x: -7, y: 6, z: 1.5 },
  { x: -6, y: 7, z: 1.5 },
  { x: -7, y: 7, z: 2 },
  { x: -7, y: 8, z: 2.5 },
  { x: -8, y: 8, z: 2.5 },
  { x: -8, y: 7, z: 2.5 },
  { x: -9, y: 9, z: 3 }
];
const CapricornPetals = 4;
const CapricornPoints = [
  { x: -4, y: 2, z: 4 },
  { x: -4, y: 3, z: 4 },
  { x: -3, y: 4, z: 4 },
  { x: -2, y: 4, z: 4 },
  { x: -3, y: 2, z: 3 },
  { x: -2, y: 3, z: 3 },
  { x: -2, y: 2, z: 2.5 },
  { x: -3, y: 3, z: 3.5 },
  { x: -4, y: 4, z: 4.5 },
  { x: 0, y: 1, z: 0 },
  { x: 0, y: 2, z: 1 },
  { x: 0, y: 3, z: 2 },
  { x: 0, y: 4, z: 3 },
  { x: -1, y: 0, z: 0 },
  { x: -2, y: 0, z: 1 },
  { x: -3, y: 0, z: 2 },
  { x: -4, y: 0, z: 3 },
  { x: -1, y: 1, z: 0.5 },
  { x: -1, y: 2, z: 1.5 },
  { x: -2, y: 1, z: 1.5 },
  { x: -1, y: 3, z: 2.5 },
  { x: -3, y: 1, z: 2.5 },
  { x: -1, y: 4, z: 3.5 },
  { x: -4, y: 1, z: 3.5 },
  { x: 0, y: 0, z: 0 },
  { x: -1.5, y: -1.5, z: 8}
];
const GeminiPetals = 8;
const GeminiPoints = [
  { x: 2, y: -2, z: 1.5 },
  { x: 3, y: -3, z: 1.5 },
  { x: 2, y: -3, z: 1.5 },
  { x: 1, y: -3, z: 1.5 },
  { x: 4, y: -5, z: 1.5 },
  { x: 4, y: -2, z: 1.5 },
  { x: 6, y: -5, z: 1.5 },
  { x: 4, y: -3, z: 1.5 },
  { x: 0, y: -2, z: 0.5 },
  { x: 3, y: -1, z: 0.5 },
  { x: 2, y: -1, z: 0 },
  { x: 0, y: -1, z: 0 },
  { x: 0, y: 0, z: 0 },
  { x: 3, y: -2, z: 1 },
  { x: 1, y: -2, z: 1 },
  { x: 1, y: -1, z: 1 },
  { x: 5, y: -4, z: 2 },
  { x: 3, y: -4, z: 2 },
  { x: 4, y: -4, z: 2 },
  { x: 5, y: -5, z: 1.5 },
  { x: 5, y: -6, z: 1.5 },
  { x: 7, y: -6, z: 1.5 },
  { x: 8, y: -7, z: 1 },
  { x: 6, y: -7, z: 1 },
  { x: 6, y: -6, z: 1 },
  { x: 7, y: -7, z: 0.5 },
  { x: 8, y: -8, z: 0 },
  { x: 9, y: -9, z: -0.5 },
  { x: 2, y: -4, z: 2 },
  { x: 5, y: -3, z: 2 }
];

const LeoPetals = 20;
const LeoPoints = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 1, z: 1 },
  { x: -1, y: 1, z: 2 },
  { x: 0, y: 2, z: 2 },
  { x: -1, y: 2, z: 2.5 },
  { x: -2, y: 2, z: 3 },
  { x: -2, y: 3, z: 3.5 },
  { x: -3, y: 3, z: 4 },
  { x: -4, y: 4, z: 4.5 },
  { x: -5, y: 5, z: 5 },
  { x: -6, y: 6, z: 5.5 },
  { x: -7, y: 7, z: 6 },
  { x: -8, y: 8, z: 6.5 },
  { x: -9, y: 9, z: 7 },
  { x: -1, y: 0, z: 1 },
  { x: -2, y: 0, z: 2 },
  { x: -2, y: 1, z: 2.5 },
  { x: -3, y: 2, z: 3.5 }
];

const LibraPetals = 4;
const LibraPoints = [
  { x: 0, y: 0, z: 0 },
  { x: -0.5, y: 1, z: 0.5 },
  { x: 0.5, y: 1, z: 0.5 },
  { x: -0.5, y: 2, z: 1.5 },
  { x: 0.5, y: 2, z: 1.5 },
  { x: -1.5, y: 3, z: 2 },
  { x: 1.5, y: 3, z: 2 },
  { x: 0.5, y: 3, z: 2 },
  { x: -0.5, y: 3, z: 2 },
  { x: -0.5, y: 4, z: 2.5 },
  { x: 0.5, y: 4, z: 2.5 },
  { x: 0.5, y: 5, z: 3 },
  { x: -1.5, y: 5, z: 3 },
  { x: -0.5, y: 5, z: 3 },
  { x: 1.5, y: 5, z: 3 },
  { x: -2.5, y: 4, z: 2 },
  { x: -1.5, y: 4, z: 2 },
  { x: 1.5, y: 4, z: 2 },
  { x: -4.5, y: 9, z: 4.5 },
  { x: -5.5, y: 9, z: 4.5 },
  { x: -4.5, y: 8, z: 4 },
  { x: -3.5, y: 8, z: 4 },
  { x: -4.5, y: 7, z: 3.5 },
  { x: -3.5, y: 7, z: 3.5 },
  { x: -4.5, y: 6, z: 3 },
  { x: -3.5, y: 6, z: 3 },
  { x: -2.5, y: 6, z: 3 },
  { x: -3.5, y: 5, z: 2.5 },
  { x: -2.5, y: 5, z: 2.5 },
  { x: -3.5, y: 9, z: 5 },
  { x: -2.5, y: 8, z: 4.5 },
  { x: 1.5, y: 7, z: 4 },
  { x: -1.5, y: 7, z: 4 },
  { x: 0.5, y: 6, z: 3.5 },
  { x: -0.5, y: 6, z: 3.5 },
  { x: 0.5, y: 7, z: 4.5 },
  { x: -0.5, y: 7, z: 4.5 },
  { x: 1.5, y: 8, z: 5 },
  { x: -0.5, y: 8, z: 5 },
  { x: -1.5, y: 8, z: 5 },
  { x: 0.5, y: 8, z: 5 },
  { x: -2.5, y: 9, z: 5.5 },
  { x: -1.5, y: 9, z: 5.5 },
  { x: 1.5, y: 9, z: 5.5 },
  { x: -0.5, y: 9, z: 6 },
  { x: 0.5, y: 9, z: 6 },
  { x: -6.5, y: 8, z: 5 },
  { x: -7.5, y: 9, z: 5.5 },
  { x: -5.5, y: 7, z: 4 },
  { x: -5.5, y: 8, z: 4.5 },
  { x: -6.5, y: 9, z: 5 },
  { x: -1.5, y: 6, z: 3.5 },
  { x: 1.5, y: 6, z: 3.5 },
  { x: -2.5, y: 7, z: 4 },
  { x: 2.5, y: 7, z: 4 },
  { x: 6.5, y: 9, z: 5 },
  { x: 5.5, y: 8, z: 4.5 },
  { x: 5.5, y: 7, z: 4 },
  { x: 7.5, y: 9, z: 5.5 },
  { x: 6.5, y: 8, z: 5 },
  { x: 2.5, y: 9, z: 5.5 },
  { x: 2.5, y: 8, z: 4.5 },
  { x: 3.5, y: 9, z: 5 },
  { x: 2.5, y: 5, z: 2.5 },
  { x: 3.5, y: 5, z: 2.5 },
  { x: 2.5, y: 6, z: 3 },
  { x: 3.5, y: 6, z: 3 },
  { x: 4.5, y: 6, z: 3 },
  { x: 3.5, y: 7, z: 3.5 },
  { x: 4.5, y: 7, z: 3.5 },
  { x: 3.5, y: 8, z: 4 },
  { x: 4.5, y: 8, z: 4 },
  { x: 5.5, y: 9, z: 4.5 },
  { x: 4.5, y: 9, z: 4.5 },
  { x: 2.5, y: 4, z: 2 }
];

const SagittariusPetals = 5;
const SagittariusPoints = [
  { x: 8, y: 5, z: 3.5 },
  { x: 5, y: 8, z: 3.5 },
  { x: 7, y: 5, z: 3.5 },
  { x: 5, y: 7, z: 3.5 },
  { x: 7, y: 6, z: 3.5 },
  { x: 6, y: 7, z: 3.5 },
  { x: 6, y: 6, z: 3.5 },
  { x: 7, y: 4, z: 3 },
  { x: 4, y: 7, z: 3 },
  { x: 6, y: 4, z: 3 },
  { x: 4, y: 6, z: 3 },
  { x: 6, y: 5, z: 3 },
  { x: 5, y: 6, z: 3 },
  { x: 5, y: 5, z: 3 },
  { x: 5, y: 3, z: 2.5 },
  { x: 3, y: 5, z: 2.5 },
  { x: 5, y: 4, z: 2.5 },
  { x: 4, y: 5, z: 2.5 },
  { x: 4, y: 4, z: 2.5 },
  { x: 4, y: 3, z: 2 },
  { x: 3, y: 4, z: 2 },
  { x: 3, y: 3, z: 2 },
  { x: 7, y: 7, z: 3.5 },
  { x: 9, y: 5, z: 3.5 },
  { x: 5, y: 9, z: 3.5 },
  { x: 9, y: 6, z: 3.5 },
  { x: 6, y: 9, z: 3.5 },
  { x: 8, y: 6, z: 3.5 },
  { x: 6, y: 8, z: 3.5 },
  { x: 3, y: 2, z: 1.5 },
  { x: 2, y: 3, z: 1.5 },
  { x: 2, y: 2, z: 1.5 },
  { x: 1, y: 1, z: 0.5 },
  { x: 1, y: 2, z: 0.5 },
  { x: 2, y: 1, z: 0.5 },
  { x: 0, y: 0, z: 0 }
];

const TaurusPetals = 8;
const TaurusPoints = [
  { x: -3, y: 2, z: 1 },
  { x: -3, y: 4, z: 1 },
  { x: -4, y: 5, z: 1.5 },
  { x: -4, y: 3, z: 1.5 },
  { x: -4, y: 6, z: 2.5 },
  { x: -5, y: 3, z: 2.5 },
  { x: -5, y: 5, z: 2.5 },
  { x: -2, y: 3, z: 0 },
  { x: -2, y: 1, z: 0 },
  { x: -4, y: 4, z: 1.5 },
  { x: -8, y: 8, z: 5.5 },
  { x: -6, y: 6, z: 3 },
  { x: -7, y: 4, z: 4.5 },
  { x: -5, y: 8, z: 4.5 },
  { x: -7, y: 7, z: 4 },
  { x: -7, y: 8, z: 5 },
  { x: -8, y: 7, z: 5 },
  { x: -9, y: 5, z: 6 },
  { x: -6, y: 10, z: 6 },
  { x: -9, y: 7, z: 6 },
  { x: -7, y: 9, z: 6 },
  { x: -9, y: 8, z: 6 },
  { x: -8, y: 9, z: 6 },
  { x: -7, y: 10, z: 7 },
  { x: -10, y: 7, z: 7 },
  { x: -8, y: 5, z: 5 },
  { x: -6, y: 9, z: 5 },
  { x: -8, y: 6, z: 4.5 },
  { x: -6, y: 8, z: 4.5 },
  { x: -6, y: 4, z: 3.5 },
  { x: -5, y: 7, z: 3.5 },
  { x: -6, y: 7, z: 3.5 },
  { x: -7, y: 6, z: 3.5 },
  { x: -5, y: 6, z: 2.5 },
  { x: -6, y: 5, z: 2.5 },
  { x: -1, y: 1, z: 0.5 },
  { x: -3, y: 3, z: 1 },
  { x: 0, y: 0, z: 0 }
];

const VirgoPetals = 5;
const VirgoPoints = [
  { x: 0, y: 1, z: 1 },
  { x: -1, y: 0, z: 1 },
  { x: -4, y: 8, z: 4 },
  { x: -5, y: 8, z: 4 },
  { x: -6, y: 8, z: 4 },
  { x: -8, y: 4, z: 4 },
  { x: -8, y: 5, z: 4 },
  { x: -8, y: 6, z: 4 },
  { x: -7, y: 6, z: 4 },
  { x: -7, y: 7, z: 4 },
  { x: -6, y: 7, z: 4 },
  { x: -7, y: 5, z: 4.5 },
  { x: -7, y: 3, z: 4.5 },
  { x: -7, y: 4, z: 4.5 },
  { x: -6, y: 5, z: 4.5 },
  { x: -6, y: 6, z: 4.5 },
  { x: -5, y: 6, z: 4.5 },
  { x: -5, y: 7, z: 4.5 },
  { x: -4, y: 7, z: 4.5 },
  { x: -3, y: 7, z: 4.5 },
  { x: -6, y: 4, z: 4 },
  { x: -6, y: 3, z: 4 },
  { x: -6, y: 2, z: 4 },
  { x: -5, y: 5, z: 4 },
  { x: -5, y: 4, z: 4 },
  { x: -4, y: 5, z: 4 },
  { x: -4, y: 6, z: 4 },
  { x: -3, y: 6, z: 4 },
  { x: -2, y: 6, z: 4 },
  { x: -5, y: 1, z: 3.5 },
  { x: -5, y: 2, z: 3.5 },
  { x: -5, y: 3, z: 3.5 },
  { x: -4, y: 4, z: 3.5 },
  { x: -3, y: 5, z: 3.5 },
  { x: -2, y: 5, z: 3.5 },
  { x: -1, y: 5, z: 3.5 },
  { x: -4, y: 3, z: 3 },
  { x: -4, y: 2, z: 3 },
  { x: -4, y: 1, z: 3 },
  { x: -3, y: 4, z: 3 },
  { x: -2, y: 4, z: 3 },
  { x: -1, y: 4, z: 3 },
  { x: 0, y: 4, z: 2.5 },
  { x: -4, y: 0, z: 2.5 },
  { x: -3, y: 0, z: 2.5 },
  { x: -3, y: 1, z: 2.5 },
  { x: -3, y: 2, z: 2.5 },
  { x: -3, y: 3, z: 2.5 },
  { x: -2, y: 3, z: 2.5 },
  { x: -1, y: 3, z: 2.5 },
  { x: 0, y: 3, z: 2.5 },
  { x: -2, y: 2, z: 2 },
  { x: -2, y: 1, z: 2 },
  { x: -1, y: 1, z: 2 },
  { x: -1, y: 2, z: 2 },
  { x: -2, y: 0, z: 1.5 },
  { x: 0, y: 2, z: 1.5 },
  { x: -2, y: 7, z: 4 },
  { x: -7, y: 2, z: 4 },
  { x: -1, y: 6, z: 3.5 },
  { x: -6, y: 1, z: 3.5 },
  { x: -3, y: 8, z: 4 },
  { x: -8, y: 3, z: 4 },
  { x: 0, y: 0, z: 0 }
];

const ScorpioPetals = 8;
const ScorpioPoints = [
  { x: -1, y: -1, z: 0 },
  { x: -2, y: -1, z: 0 },
  { x: -1, y: -2, z: 0 },
  { x: -3, y: -3, z: 0.5 },
  { x: -4, y: -3, z: 1.5 },
  { x: -3, y: -4, z: 1.5 },
  { x: -2, y: -3, z: 0 },
  { x: -3, y: -2, z: 0 },
  { x: -2, y: -2, z: 0 },
  { x: -2, y: -2, z: 10 },
  { x: -3, y: -4, z: 2.5 },
  { x: -4, y: -3, z: 2.5 },
  { x: -4, y: -2, z: 3.5 },
  { x: -3, y: -3, z: 3.5 },
  { x: -2, y: -4, z: 3.5 },
  { x: -1, y: 0, z: 4.5 },
  { x: 0, y: -1, z: 4.5 },
  { x: -1, y: -1, z: 5 },
  { x: 0, y: -2, z: 5 },
  { x: -2, y: 0, z: 5 },
  { x: -2, y: -2, z: 5 },
  { x: -3, y: -1, z: 5 },
  { x: -1, y: -3, z: 5 },
  { x: -2, y: -3, z: 4.5 },
  { x: -3, y: -2, z: 4.5 },
  { x: -1, y: -2, z: 5.5 },
  { x: -2, y: -1, z: 5.5 }
];

// Map sign name -> points & petals
const ZODIAC_POINTS = {
  Aries:       AriesPoints,
  Taurus:      TaurusPoints,
  Gemini:      GeminiPoints,
  Cancer:      CancerPoints,
  Leo:         LeoPoints,
  Virgo:       VirgoPoints,
  Libra:       LibraPoints,
  Scorpio:     ScorpioPoints,
  Sagittarius: SagittariusPoints,
  Capricorn:   CapricornPoints,
  Aquarius:    AquariusPoints,
  Pisces:      PiscesPoints,
};

const ZODIAC_PETALS = {
  Aries:       AriesPetals,
  Taurus:      TaurusPetals,
  Gemini:      GeminiPetals,
  Cancer:      CancerPetals,
  Leo:         LeoPetals,
  Virgo:       VirgoPetals,
  Libra:       LibraPetals,
  Scorpio:     ScorpioPetals,
  Sagittarius: SagittariusPetals,
  Capricorn:   CapricornPetals,
  Aquarius:    AquariusPetals,
  Pisces:      PiscesPetals,
};

const ZODIAC_COLORS = {
  Aries:       AriesColor,
  Taurus:      TaurusColor,
  Gemini:      GeminiColor,
  Cancer:      CancerColor,
  Leo:         LeoColor,
  Virgo:       VirgoColor,
  Libra:       LibraColor,
  Scorpio:     ScorpioColor,
  Sagittarius: SagittariusColor,
  Capricorn:   CapricornColor,
  Aquarius:    AquariusColor,
  Pisces:      PiscesColor,
};

const ZODIAC_COLORS02 = {
  Aries:       AriesColor02,
  Taurus:      TaurusColor02,
  Gemini:      GeminiColor02,
  Cancer:      CancerColor02,
  Leo:         LeoColor02,
  Virgo:       VirgoColor02,
  Libra:       LibraColor02,
  Scorpio:     ScorpioColor02,
  Sagittarius: SagittariusColor02,
  Capricorn:   CapricornColor02,
  Aquarius:    AquariusColor02,
  Pisces:      PiscesColor02,
};

const ZODIAC_COLORS03 = {
  Aries:       AriesColor03,
  Taurus:      TaurusColor03,
  Gemini:      GeminiColor03,
  Cancer:      CancerColor03,
  Leo:         LeoColor03,
  Virgo:       VirgoColor03,
  Libra:       LibraColor03,
  Scorpio:     ScorpioColor03,
  Sagittarius: SagittariusColor03,
  Capricorn:   CapricornColor03,
  Aquarius:    AquariusColor03,
  Pisces:      PiscesColor03,
};

//Sign boundaries (last day of each sign)
const ZODIAC_CUTOFFS = [
  { sign: 'Capricorn',   end: [1, 19]  }, // Jan 1  – Jan 19
  { sign: 'Aquarius',    end: [2, 18]  }, // Jan 20 – Feb 18
  { sign: 'Pisces',      end: [3, 20]  }, // Feb 19 – Mar 20
  { sign: 'Aries',       end: [4, 19]  }, // Mar 21 – Apr 19
  { sign: 'Taurus',      end: [5, 20]  }, // Apr 20 – May 20
  { sign: 'Gemini',      end: [6, 20]  }, // May 21 – Jun 20
  { sign: 'Cancer',      end: [7, 22]  }, // Jun 21 – Jul 22
  { sign: 'Leo',         end: [8, 22]  }, // Jul 23 – Aug 22
  { sign: 'Virgo',       end: [9, 22]  }, // Aug 23 – Sep 22
  { sign: 'Libra',       end: [10, 22] }, // Sep 23 – Oct 22
  { sign: 'Scorpio',     end: [11, 21] }, // Oct 23 – Nov 21
  { sign: 'Sagittarius', end: [12, 21] }, // Nov 22 – Dec 21
  { sign: 'Capricorn',   end: [12, 31] }, // Dec 22 – Dec 31
];

//Lookup function
function getZodiacSign(day, month, year) {
  if (!Number.isInteger(day) || !Number.isInteger(month) ||
      month < 1 || month > 12 || day < 1 || day > 31) {
    throw new RangeError(`Invalid date: ${day}/${month}/${year}`);
  }

  for (const { sign, end } of ZODIAC_CUTOFFS) {
    const [endMonth, endDay] = end;
    if (month < endMonth || (month === endMonth && day <= endDay)) {
      return sign; // first match wins
    }
  }
  return 'Capricorn'; // unreachable safety net
}

let ZodiacSign   = null;
let ZodiacPoints = null;
let ZodiacPetals = null;
let ZodiacColor = null;
let ZodiacColor02 = null;
let ZodiacColor03 = null;

function setZodiac(day, month, year) {
  ZodiacSign   = getZodiacSign(day, month, year);
  ZodiacPoints = ZODIAC_POINTS[ZodiacSign];
  ZodiacPetals = ZODIAC_PETALS[ZodiacSign];
  ZodiacColor = ZODIAC_COLORS[ZodiacSign];
  ZodiacColor02 = ZODIAC_COLORS02[ZodiacSign];
  ZodiacColor03 = ZODIAC_COLORS03[ZodiacSign];
  return ZodiacSign; // handy for logging / chaining
}

setZodiac(day, month, year);

// UI: date inputs + button
const ui = document.createElement('div');
ui.style.cssText = `
  position: fixed; top: 10px; left: 10px; z-index: 1000;
  display: flex; gap: 6px; align-items: center;
  font: 12px roboto, sans-serif; color: #eee;
  background: rgb(26, 26, 26); padding: 8px 10px; border-radius: 6px;
`;
ui.innerHTML = `
  <label>D <input id="in-day"   type="number" min="1" max="31" value="13" style="width:48px, font: 48px roboto, sans-serif"></label>
  <label>M <input id="in-month" type="number" min="1" max="12" value="9"  style="width:40px, font: 48px roboto, sans-serif"></label>
  <label>Y <input id="in-year"  type="number" min="1900" max="2100" value="2002" style="width:60px, font: 60px roboto, sans-serif"></label>
  <button id="rebuild" style="cursor:pointer">Rebuild</button>
`;
document.body.appendChild(ui);


// Resolution set-up
// Supersampling scale: increase for even sharper output (e.g., 3, 4)
const RESOLUTION_SCALE = 1;
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
camera.position.set(0, -250, 80);
camera.lookAt(0, -15, -rand);
camera.zoom = 3.9;
camera.updateProjectionMatrix();

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//renderer.setClearColor(0x000000, 0);
// Resolution
const bufferWidth = window.innerWidth * RESOLUTION_SCALE;
const bufferHeight = window.innerHeight * RESOLUTION_SCALE;
renderer.setSize(bufferWidth, bufferHeight, false); // false = don't touch CSS
renderer.domElement.style.width = window.innerWidth + 'px';
renderer.domElement.style.height = window.innerHeight + 'px';
renderer.setPixelRatio(1); // we handle scaling manually
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
  //transparent: true, // Often required for blending to work as expected
  //blending: THREE.MultiplyBlending,
  uniforms: {
    uTime: { value: 0 },
    uChromeSilver: { value: new THREE.Color(0xefefe4) },
    uIceCyan: { value: new THREE.Color(0x5ccce9) },
    uGlow: { value: ZodiacColor03 },
    uMainColor: { value: ZodiacColor02 },
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
    uniform vec3 uGlow;
    uniform vec3 uMainColor;
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
      vec3 internalGlow = mix(uMainColor, uGlow, sss + sharpVeins);

      //***

      // 5. Dual Metallic Specular Highlights
      vec3 light1 = normalize(vec3(1.0, 1.5, 1.0));
      vec3 light2 = normalize(vec3(-1.5, -0.8, -0.5));
      float spec1 = pow(max(dot(normal, normalize(light1 + viewDir)), 0.0), 256.0);
      float spec2 = pow(max(dot(normal, normalize(light2 + viewDir)), 0.0), 128.0);
      
      // NEW: icy glow with user‑controlled blue channel
      vec3 Glow = vec3(uGlow.r, uGlow.g, day*0.01);
      //vec3 Glow = vec3(day/17.0, 0.05, uGlow.b*0.30);
      vec3 specularGleam = (vec3(1.0) * spec1 * 0.7) + (Glow * spec2 * 0.3);

      // 6. Final Layer Compositing
      vec3 baseMaterial = mix(internalGlow, uChromeSilver * chromeReflect, 0.85 + sharpVeins * 0.2);
      vec3 finalColor = mix(baseMaterial, dispersion + Glow, fresnel * 0.2);
      
      finalColor += specularGleam + (sharpVeins * Glow * 0.5);

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

const StemMaterialAquarius = new THREE.MeshPhysicalMaterial({ //*****
  //transparent: true,
  //blending: THREE.AdditiveBlending,
  color: ZodiacColor,         // Deep icy navy/teal
  emissive: 0x227799,      // Subtle internal blue glow
  emissiveIntensity: 0.5,
  roughness: 0.1,          // Shiny surface
  metalness: 0.3,          // Metallic silver undertone
  transmission: 0.8,       // Glass-like icy refraction
  thickness: 1.2,          // Depth of the refraction
  transparent: true,
  opacity: 0.35
});


// Flower Head
function createFlowerFromCornerPoints(points, petalCount = 4, boxSize = 1) {
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

      // 70% chance to bias towards center if stem drifts too far out
      if (Math.abs(currentX) > 1 && Math.random() < 0.8) {
        offsetX = currentX > 0 ? 0.8 : -0.8;
      }
      if (Math.abs(currentY) > 1 && Math.random() < 0.8) {
        offsetY = currentY > 0 ? 0.8 : -0.8;
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
  head.rotation.x = Math.random() * 0.6 - 0.4;
  head.rotation.y = Math.random() * 0.6 - 0.4;
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
    if (day === 15 && month === 10 && year === 2001) {
      num = 14;
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
  } else if (count === 14) {
    specialNumber = 0.35;   // distinct value for 11
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
  } else if (count === 14) {
    specialNumber2 = 1.5;  // distinct value for smaller than 11
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
    //.............................................................................../////////////////////////////////////////////////////////////////////////////////////////////////
    const flower = createCompleteFlower(ZodiacPoints,ZodiacPetals, 1, 100, offsetX, offsetY);

    if (count > 1) {
      // Z-position also scales with specialNumber for extra distinction
      flower.position.z = (Math.random() * specialNumber*10)*13;
    }

    bouquetGroup.add(flower);
  }

  return bouquetGroup;
}

let bouquet = null;

function rebuildBouquet() {
  // remove old bouquet from the scene (and free its geometries)
  if (bouquet) {
    scene.remove(bouquet);
    bouquet.traverse(o => { if (o.isMesh) o.geometry?.dispose?.(); });
  }

  // recompute sign + points from the current day/month/year
  setZodiac(day, month, year);
  //console.log('Sign:', ZodiacSign); // sanity check
  StemMaterialAquarius.color.copy(ZodiacColor);            // fine — private Color
  BeatingMaterial.uniforms.uMainColor.value = ZodiacColor02; // reassign, don't copy
  BeatingMaterial.uniforms.uGlow.value     = ZodiacColor03;  // reassign, don't copy

  // update the shader uniform (blue channel of icy glow depends on day)
  BeatingMaterial.uniforms.day.value = day;

  // rebuild
  bouquet = generateBouquetFromBirthdate(day, month, year);
  scene.add(bouquet);
}

rebuildBouquet();

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

  if (bouquet) bouquet.rotation.z += 0.01;
  BeatingMaterial.uniforms.uTime.value = clock.getElapsedTime();

  renderer.render(scene, camera);
}

document.getElementById('rebuild').addEventListener('click', () => {
  const d = parseInt(document.getElementById('in-day').value,   10);
  const m = parseInt(document.getElementById('in-month').value, 10);
  const y = parseInt(document.getElementById('in-year').value,  10);

  if (!Number.isInteger(d) || !Number.isInteger(m) || !Number.isInteger(y)) return;

  day = d;
  month = m;
  year = y;
  rebuildBouquet();
});

animate();
//savePicture(renderer, 'my-scene.png');