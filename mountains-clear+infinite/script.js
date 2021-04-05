import * as THREE from "https://threejs.org/build/three.module.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { ImprovedNoise } from "https://threejs.org/examples/jsm/math/ImprovedNoise.js";

const perlin = new ImprovedNoise();

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 1000);
camera.position.set(0, 0.5, 1);
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.5, 0);
controls.update();

let light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(0, 0.0625, -1);
scene.add(light, new THREE.AmbientLight(0xffffff, 1.5));

//scene.add(new THREE.GridHelper(125, 10, 0x007f7f, 0x007f7f));

let globalCounter = 1;
let chunks = [];

createChunk(0, 0x00007f);
createChunk(-125, 0x7f007f);

let clock = new THREE.Clock();

let scrollPos = true;

window.addEventListener("scroll", () => (scrollPos = window.scrollY));

renderer.setAnimationLoop((_) => {
  let t = clock.getDelta() * 5;
  // let calcedPos = scrollPos * 0.007;

  chunks.forEach((chunk) => {
    chunk.position.z += t;
    chunk.userData.totalTime += t;

    // chunk.position.z = calcedPos;
    // chunk.userData.totalTime = calcedPos;

    if (chunk.position.z > 125) {
      let p = chunk.userData.totalTime % 125;
      chunk.position.z = -125 + p;
      updateChunk(chunk);
    }
  });

  renderer.render(scene, camera);
});

function createChunk(posZ, color) {
  let chunk = new THREE.Group();

  let pg = new THREE.PlaneGeometry(50, 125, 50, 125);
  pg.rotateX(-Math.PI * 0.5);
  let pm = new THREE.MeshStandardMaterial({
    color: color,
    roughness: 0.6,
    metalness: 0.5,
    wireframe: false,
    onBeforeCompile: (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace(
        `#include <fog_fragment>`,
        `
          // http://madebyevan.com/shaders/grid/
          vec2 coord = vUv * vec2(50., 125.);
          vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord) / 1.5;
          float line = min(grid.x, grid.y);
          line = min(line, 1.0);
          vec3 col = mix(vec3(0.5, 1, 1), gl_FragColor.rgb, line);
          gl_FragColor = vec4( col, opacity);
        `
      );
    },
  });
  pm.defines = { USE_UV: "" };
  let po = new THREE.Mesh(pg, pm);
  chunk.add(po);

  // dots
  let ig = new THREE.InstancedBufferGeometry().copy(new THREE.SphereGeometry(0.05, 8, 6));
  ig.instanceCount = Infinity;
  ig.setAttribute("instPos", new THREE.InstancedBufferAttribute(pg.attributes.position.array, 3));
  let im = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    onBeforeCompile: (shader) => {
      shader.vertexShader = `
        attribute vec3 instPos;
        ${shader.vertexShader}
      `.replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
          transformed += instPos;
        `
      );
      //console.log(shader.vertexShader);
    },
  });
  let io = new THREE.Mesh(ig, im);
  io.frustumCulled = false;
  chunk.add(io);

  chunk.position.z = posZ;
  chunk.userData = {
    totalTime: 0,
  };

  updateChunk(chunk);

  chunks.push(chunk);

  scene.add(chunk);
}

function updateChunk(chunk) {
  let g = chunk.children[0].geometry;
  //console.log(g);
  let pos = g.attributes.position;
  let uv = g.attributes.uv;
  let vUv = new THREE.Vector2();
  let uvScale = new THREE.Vector2(10, 25);
  for (let i = 0; i < pos.count; i++) {
    vUv.fromBufferAttribute(uv, i);
    let s = smoothstep(0.01, 0.125, Math.abs(vUv.x - 0.5));
    vUv.multiply(uvScale);
    vUv.y += uvScale.y * globalCounter;
    let y = perlin.noise(vUv.x, vUv.y, 1) * 0.5 + 0.5;
    pos.setY(i, Math.pow(y, 5) * 15 * s);
  }
  g.computeVertexNormals();
  pos.needsUpdate = true;

  chunk.children[1].geometry.attributes.instPos.needsUpdate = true;

  globalCounter++;
}

//https://github.com/gre/smoothstep/blob/master/index.js
function smoothstep(min, max, value) {
  var x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}
