//console.log("JS is running");
// console.log(THREE);

// canvas = document.createElement("canvas"); //creation of the canvas, which is the space where the browser renders all the elements for the game

// background = document.querySelector(".background"); // getting the div that is know as the "background"

// background.appendChild(canvas);

// canvas.width = 500;
// canvas.height = 500;
// canvas.style.background = "gray";

// ctx = canvas.getContext("2d");
// ctx.fillStyle = "white";
// ctx.fillRect(225, 225, 50, 50);


let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
    75, //this smeems to be for the field of view
    1,
    0.1,
    1000
);
camera.position.z = 5;

let renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 500);
renderer.setClearColor(0x134532)

let background = document.querySelector(".background");
background.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry(1, 1, 1);

let material = new THREE.MeshBasicMaterial({color: 0xfff0ff});

let cube = new THREE.Mesh(geometry, material);


scene.add(cube);


renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();
