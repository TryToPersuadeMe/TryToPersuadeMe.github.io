import * as THREE from "https://threejs.org/build/three.module.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { ImprovedNoise } from "https://threejs.org/examples/jsm/math/ImprovedNoise.js";

const perlin = new ImprovedNoise();

let backColor = 0xff7fbb;
let scene = new THREE.Scene();
// scene.fog = new THREE.Fog(backColor, 1, 60);

let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 1000);
camera.position.set(0, 1, 60);
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.5, 0);
controls.update();
// controls.enabled = false;

let light = new THREE.DirectionalLight(0xcc3991, 0.4);
light.position.set(0, 30, -200);
scene.add(light, new THREE.AmbientLight(0xcc3991, 0.4));

let globalCounter = 1;
let chunks = [];

createChunk(0, 0x00007f);
createChunk(-225, 0x7f007f);

let clock = new THREE.Clock();

let scrollPos = 0;

window.addEventListener("scroll", () => (scrollPos = window.scrollY));

renderer.setAnimationLoop((_) => {
  let calcedPos = scrollPos * 0.01;
  so.scale.x = 1 + scrollPos * 0.0007;
  so.scale.y = 1 + scrollPos * 0.0007;
  //   let t = clock.getDelta() * 5;
  globalUniforms.time.value = clock.getElapsedTime();
  chunks.forEach((chunk) => {
    chunk.position.z = calcedPos;
    chunk.userData.totalTime = calcedPos;
    if (chunk.position.z > 225) {
      let p = chunk.userData.totalTime % 225;
      chunk.position.z = -225 + p;
      updateChunk(chunk);
    }
  });

  renderer.setClearColor(backColor);
  renderer.render(scene, camera);
});

// background
let bg = new THREE.SphereGeometry(400, 64, 32);
let bm = new THREE.MeshBasicMaterial({
  fog: false,
  side: THREE.BackSide,
  onBeforeCompile: (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      `vec4 diffuseColor = vec4( diffuse, opacity );`,
      `
        vec2 uv = vUv;
        vec3 c1 = vec3(1., 0.5, 0.5);
        vec3 c2 = vec3(0, 0, 0.5);
        float f = smoothstep(0.5, 0.575, uv.y);
        vec3 col = mix(c1, c2, f);
      vec4 diffuseColor = vec4( col, opacity );`
    );
  },
});
bm.defines = { USE_UV: "" };
let bo = new THREE.Mesh(bg, bm);
scene.add(bo);

function createChunk(posZ) {
  let chunk = new THREE.Group();

  let pg = new THREE.PlaneGeometry(50, 225, 50, 125);
  pg.rotateX(-Math.PI * 0.5);
  let pm = new THREE.MeshStandardMaterial({
    color: 0x000717,
    wireframe: false,
    roughness: 0.6,
    metalness: 0.5,
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
    color: 0x95f2f2,
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
let globalUniforms = {
  time: { value: 0 },
};
/* sun */

let sg = new THREE.CircleGeometry(20, 64);
let sm = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load("./resources/sun.png"),
  // uniforms: {
  //   color1: {
  //     value: new THREE.Color("#fc2cae"),
  //   },
  //   color2: {
  //     value: new THREE.Color("#ffee4b"),
  //   },
  // },
  // vertexShader: `
  //   varying vec2 vUv;

  //   void main() {
  //     vUv = uv;
  //     gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  //   }
  // `,
  // fragmentShader: `
  //   uniform vec3 color1;
  //   uniform vec3 color2;
  
  //   varying vec2 vUv;
    
  //   void main() {
      
  //     gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
  //   }
  // `,

  // color: 0xffeeff,
  fog: false,
  transparent: true,
  onBeforeCompile: (shader) => {
    shader.uniforms.time = globalUniforms.time;
    shader.fragmentShader = `
      uniform float time;
      ${shader.fragmentShader}`.replace(
      `vec4 diffuseColor = vec4( diffuse, opacity );`,
      `
        vec2 uv = vUv - 0.5;
        float f = smoothstep(0.5, 0.475, length(uv));

        // stripes
        vec2 sUv = uv;
        sUv.y *= 100.;
        float sf = (sin(sUv.y - (time * 2.)) * 0.5 + 0.5);
        float wave = (uv.y + 0.5) * 2.;
        float e = length(fwidth(sUv));
        sf = 1. - smoothstep(wave - e, wave, sf);
        //
        vec3 col = mix(diffuse * vec3(1, 0.75, 0.875), diffuse, clamp(vUv.y, 0., 1.));
        vec4 diffuseColor = vec4( col, pow(f, 3.) * sf );
      `
    );
  },
});
sm.defines = { USE_UV: "" };
sm.extensions = { derivatives: true };
let so = new THREE.Mesh(sg, sm);
so.position.copy(camera.position).setY(20).z -= 400;

scene.add(so);

/* stars */
let pts = [];
for (let i = 0; i < 400; i++) {
  pts.push(new THREE.Vector3().random().subScalar(0.5).multiplyScalar(620));
}
let g = new THREE.BufferGeometry().setFromPoints(pts);
let m = new THREE.PointsMaterial({ map: new THREE.TextureLoader().load(imgData), size: 2.25, alphaTest: 0.5 });
let p = new THREE.Points(g, m);
p.position.copy(so.position).setY(20).z -= 20;
// p.position.x = 100
// p.position.y = 10;
scene.add(p);

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
    pos.setY(i, Math.pow(y, 6) * 35 * s);
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

window.addEventListener("resize", () => onWindowResize());
function onWindowResize() {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}

const q = document.querySelector(".wrapper");

window.addEventListener("mouseeover", () => {
  console.log("asd");
});
