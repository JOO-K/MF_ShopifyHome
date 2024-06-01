//Variables for setup

let container;
let camera;
let renderer;
let scene;
let house;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('transparent');


  //Camera setup    
  const fov = 90;
  const aspect = container.clientWidth * 1.0/ container.clientHeight * 1.0;
  const near = 0.1;
  const far = 2000;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 250);

  
  //Light setup
  const ambient = new THREE.AmbientLight(0xffffff, 3);
  scene.add(ambient);

  const light = new THREE.PointLight(0xffffff, 3);
  light.position.set(100, 300, -50);
  scene.add(light);
    

    
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth * 1.0, container.clientHeight * 1.0);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);
        
    
  //Load Models
  let loader = new THREE.GLTFLoader();
    

    
  loader.load("obj/holidaylogo2.gltf", function(gltf) {
    scene.add(gltf.scene);
    logo = gltf.scene;
    animate();
  });
    
  loader.load("obj/holidaytext.gltf", function(gltf) {
    scene.add(gltf.scene);
    text = gltf.scene;
    animate();
  });
    
    
  
   
}


function animate() {
    
//  grid.position.y = -10;
//  
//  face.rotation.y += .005;
//  absform.rotation.z += .05;
//  absform.rotation.y += .05;
//  absform.rotation.x += .05;
//  absform.scale.x += .0;
//  tahoe.position.x += -40;
//  deathvalley.position.x += 40;

    
  logo.scale.x = 230;
  logo.scale.y = 230;
  logo.scale.z = 230;
  logo.position.y = -250;
  logo.position.z = 0;
  logo.rotation.y += -.006;
    
  text.scale.x = 380;
  text.scale.y = 380;
  text.scale.z = 380;
  text.position.y = 0;
  text.position.x = 0;
  text.position.z = -450;
  text.rotation.z += .003;
  
  

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
    
}



init();

function onWindowResize() {
  camera.aspect = container.clientWidth * 1.0/ container.clientHeight * 1.0;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth * 1.0, container.clientHeight * 1.0);
}

window.addEventListener("resize", onWindowResize);

//Orbit Controls
  controls = new THREE.OrbitControls( camera, renderer.domElement);
  controls.minDistance = 400;
  controls.maxDistance = 400;
  controls.enableZoom = true;
  controls.enablePan = false;


