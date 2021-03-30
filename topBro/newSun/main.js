console.clear();
import * as THREE from "https://threejs.org/build/three.module.js";
import { OrbitControls } from "https://threejs.org/examples/jsm/controls/OrbitControls.js";
import { ImprovedNoise } from "https://threejs.org/examples/jsm/math/ImprovedNoise.js";

const perlin = new ImprovedNoise();

let backColor = 0x000022;
let scene = new THREE.Scene();
scene.fog = new THREE.Fog(backColor, 109.5, 110);
let camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
camera.position.set(0, 5, 100);
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(backColor);
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

let controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 5, 0);
controls.maxDistance = 200;
controls.minPolarAngle = Math.PI * 0.5;
controls.maxPolarAngle = Math.PI * 0.5;
controls.minAzimuthAngle = 0;
controls.maxAzimuthAngle = 0;
controls.enablePan = false;

controls.zoomSpeed = -1;
controls.update();

let light = new THREE.DirectionalLight(0xff99ff, 0.5);
light.position.set(0, 35, -250);
scene.add(light, new THREE.AmbientLight(0xffffff, 1.5));

let g = new THREE.PlaneGeometry(200, 500, 50, 125);
g.rotateX(Math.PI * -0.5);
let sc = new THREE.Vector2(10, 25);

let pos = g.attributes.position;
let uv = g.attributes.uv;
let vUv = new THREE.Vector2();
for (let i = 0; i < pos.count; i++) {
  vUv.fromBufferAttribute(uv, i);
  let s = smoothstep(0, 0.1, Math.abs(vUv.x - 0.5));
  vUv.multiply(sc);
  let y = perlin.noise(vUv.x, vUv.y + 1, 0.005) * 0.5 + 0.5;
  pos.setY(i, Math.pow(y, 5) * 75 * s);
}
g.computeVertexNormals();

let m = new THREE.MeshStandardMaterial({
  color: 0x00007f,
  wireframe: false,
  roughness: 0.5,
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
        
        #include <fog_fragment>
      `
    );
    //console.log(shader.fragmentShader);
  },
});
m.defines = { USE_UV: "" };
let o = new THREE.Mesh(g, m);
scene.add(o);

//sun
let sg = new THREE.CircleGeometry(35, 64);
let sm = new THREE.MeshBasicMaterial({
  color: 0xffeeff,
  fog: false,
  transparent: true,
  onBeforeCompile: (shader) => {
    shader.fragmentShader = shader.fragmentShader.replace(
      `vec4 diffuseColor = vec4( diffuse, opacity );`,
      `
        vec2 uv = vUv - 0.5;
        float f = smoothstep(0.5, 0.45, length(uv));
        vec4 diffuseColor = vec4( diffuse, pow(f, 3.) );
      `
    );
    //console.log(shader.fragmentShader);
  },
});
sm.defines = { USE_UV: "" };
let so = new THREE.Mesh(sg, sm);
so.position.set(0, 20, -250);
scene.add(so);

// dots
let ig = new THREE.InstancedBufferGeometry().copy(new THREE.SphereGeometry(0.2, 8, 6));
ig.instanceCount = Infinity;
ig.setAttribute("instPos", new THREE.InstancedBufferAttribute(g.attributes.position.array, 3));
let im = new THREE.MeshBasicMaterial({
  color: 0x93f1f1,
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
    console.log(shader.vertexShader);
  },
});
let io = new THREE.Mesh(ig, im);
io.frustumCulled = false;
scene.add(io);

let clock = new THREE.Clock();
renderer.setAnimationLoop((_) => {
  let t = clock.getElapsedTime();
  renderer.render(scene, camera);
});

//https://github.com/gre/smoothstep/blob/master/index.js
function smoothstep(min, max, value) {
  var x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}
