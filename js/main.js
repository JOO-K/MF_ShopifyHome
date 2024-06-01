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

  // CUBE
		// Skybox texture website http://www.custommapmakers.org/skyboxes.php
		var geometry = new THREE.CubeGeometry( 1400, 1400, 1400 );
		var cubeMaterials =
		[
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Beachposx.PNG' ), side: THREE.DoubleSide } ), // Right side
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Beachnegx.PNG' ), side: THREE.DoubleSide } ), // Left side
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Beachposy.PNG' ), side: THREE.DoubleSide } ), // Top side
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Beachnegy.PNG' ), side: THREE.DoubleSide } ), // Bottom side
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Beachposz.PNG' ), side: THREE.DoubleSide } ), // Front side
			new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader( ).load( 'images/Beachnegz.PNG   ' ), side: THREE.DoubleSide } ) // Back side
		];    
    // Create a MeshFaceMaterial, which allows the cube to have different materials on each face
		var cubeMaterial = new THREE.MeshFaceMaterial( cubeMaterials );
		var cube = new THREE.Mesh( geometry, cubeMaterial );
    cube.rotation.x += .05;
		scene.add( cube );
        
        
    
    
//    //Get your video element:
//        const video1 = document.getElementById('video1');
//        video1.autoplay = true;
//
//
//    //Create your video texture:
//        const videoTexture1 = new THREE.VideoTexture(video1);
//        const videoMaterial1a =  new THREE.MeshBasicMaterial( {map: videoTexture1, side: THREE.BackSide, toneMapped: false} );
//        const videoMaterial1b =  new THREE.MeshBasicMaterial( {map: videoTexture1, side: THREE.FrontSide, toneMapped: false} );
//    
//    
//    //Create screen
//        const screen1 = new THREE.CircleGeometry(270, 20);
//        const screen2 = new THREE.CircleGeometry(270, 20);
//        const videoScreen1 = new THREE.Mesh(screen1, videoMaterial1b,);
//        const videoScreen2 = new THREE.Mesh(screen2, videoMaterial1a,);
//        scene.add(videoScreen1);
//        videoScreen1.position.z = -450;
//        
//        videoScreen1.rotation.z = 0;
//        scene.add(videoScreen2);
//        videoScreen2.position.z = -450;
//        
//        videoScreen2.rotation.z = 0;
    
        
    
  //Load Models
  let loader = new THREE.GLTFLoader();
    
    
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
  controls.minDistance = 250;
  controls.maxDistance = 250;
  controls.enableZoom = true;
  controls.enablePan = false;


