/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvas")
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, .1),
    new THREE.MeshBasicMaterial({ color: 0xFFD700 }),
)

const coin = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, .2, 36, 1, false),
    new THREE.MeshBasicMaterial({ color: 0xFFD700 })
)

// scene.add(cube)
scene.add(coin)
coin.rotation.x += .5 * Math.PI

camera.position.z = 5

const frame = () => {
    window.requestAnimationFrame(frame)

    coin.rotation.z += .05

    renderer.render(scene, camera)
}

window.requestAnimationFrame(frame)