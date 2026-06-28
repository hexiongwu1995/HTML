// gradient-visualization.js
const container = document.querySelector(".mathbox-container");

const mathbox = MathBox.mathBox({
    element: container,
    plugins: ["core", "controls", "cursor"],
    controls: {
        klass: THREE.OrbitControls,
    },
    camera: {
        fov: 60,
    },
    pixelRatio: 1,        // ← 添加此行，强制使用 1x 像素比
});

three = mathbox.three;
three.camera.position.set(4, 2, 2);

const controls = three.controls;
controls.enablePan = true;
controls.enableZoom = true;
controls.enableRotate = true;
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.target.set(0, 0, 0);
controls.update();

three.renderer.setClearColor(new THREE.Color(0xffffff), 1.0);

colors = {
    axis: new THREE.Color(0.3, 0.3, 0.3),
    grid: new THREE.Color(0.9, 0.9, 0.9),
    frame: new THREE.Color(0.9, 0.9, 0.9),
    labels: new THREE.Color(0.6, 0.6, 0.6),
    surface: new THREE.Color(0.95, 0.95, 0.95),
    blue: new THREE.Color(0.0, 0.5, 1.0),
    orange: new THREE.Color(1.0, 0.5, 0.0),
};

var rangeX = 1;
var rangeY = 2;
var rangeZ = 1;

view = mathbox
    .set({
        scale: 500,
        focus: 5,
    })
    .clock({ speed: 1 / 2 })
    .cartesian({
        range: [
            [-rangeX, rangeX],
            [0, rangeY],
            [-rangeZ, rangeZ],
        ],
        scale: [1, 1, 1],
    });

view
    .transform({
        position: [0, 0, 0],
    })
    .grid({
        axes: [1, 3],
        width: 1,
        color: "rgb(218, 218, 218)",
        depth: 0.5,
    })
    .end()

