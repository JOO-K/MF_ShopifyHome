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
  const ambient = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambient);
    


  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(300, 400, -250);
  scene.add(light);

    
  const light2 = new THREE.PointLight(0xffffff, 2);
  light2.position.set(-400, -400, 250);
  scene.add(light2);

    
    
  

    
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth * 1.0, container.clientHeight * 1.0);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);
        
    
  //Load Models
  let loader = new THREE.GLTFLoader();
    

    
  loader.load("obj/blackcat.gltf", function(gltf) {
    scene.add(gltf.scene);
    logo = gltf.scene;
    animate();
  });

    
    loader.load("obj/blackring.gltf", function(gltf) {
    scene.add(gltf.scene);
    ring = gltf.scene;
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

    
  logo.scale.x = 10;
  logo.scale.y = 10;
  logo.scale.z = 10;
  logo.position.y = 0;
  logo.position.z = 0;
  logo.rotation.z = .2;
  logo.rotation.y += -.006;
    
  ring.scale.x = 25;
  ring.scale.y = 25;
  ring.scale.z = 25;
  ring.position.y = 0;
  ring.position.z = 0;
  ring.rotation.z += .002;
  ring.rotation.y += .021;
    
    

  
  

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
  controls.enableZoom = false;
  controls.enablePan = false;


