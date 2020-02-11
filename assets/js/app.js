 
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );


// GEOMETRIES
   /* The PlaneBufferGeometry Parameters (width, height, widthSegments, heightSegments)
    * The BoxBufferGeometry Parameters (width, height, depth)
    * The ConeBufferGeometry Parameters (radius, height, segments)
    * The CylinderBufferGeometry (radiusTop, radiusBottom, height, radialSegments)
    */


 
const leftStoneWallBG = new THREE.BoxBufferGeometry(63,30,4);
const rightStoneWallBG = new THREE.BoxBufferGeometry(63,30,4);
const leftSideStoneWall = new THREE.BoxBufferGeometry(120, 30, 4);
const rightSideStoneWall = new THREE.BoxBufferGeometry(120, 30, 4);

   // LEFT castle roof block
const leftCastleRoofConeGeometry = new THREE.ConeBufferGeometry(8, 15, 9) 
const leftCastleBoxGeometry = new THREE.CylinderBufferGeometry(7, 7, 16, 8); 

const fullBuildingCenterBox = new THREE.BoxBufferGeometry(50, 18, 5);

const centerRoofBuildingTallBox = new THREE.ConeBufferGeometry(8, 15, 9);
const centerBuildingTallBox = new THREE.BoxBufferGeometry(25, 30, 10);

 // CENTER door
const doorBld = new THREE.PlaneBufferGeometry(9, 12, 2, 2);

const roadFloor = new THREE.PlaneBufferGeometry(9, 55, 4, 4);

let plane = new THREE.PlaneBufferGeometry(700,850, 2, 2);


   // RIGHT castle roof block
const rightCastleRoofConeGeometry = new THREE.ConeBufferGeometry(8, 15, 9) 
const rightCastleBoxGeometry = new THREE.CylinderBufferGeometry(7, 7, 25, 8); 

// TEXTURES
   // background sky
let skyTexture = new THREE.TextureLoader().load('assets/textures/sky.jpg'); 
let skyBlock =  new THREE.MeshBasicMaterial({map: skyTexture});
scene.background=(skyTexture);
   //stone wall at the back
let stoneWallTexture = new THREE.TextureLoader().load('assets/textures/castle_stonewall.jpg'); 
let stoneWallTextureBlock =  new THREE.MeshBasicMaterial({map: stoneWallTexture});

let castleTexture = new THREE.TextureLoader().load('assets/textures/castle.jpg');
let castleTextureBlock = new THREE.MeshBasicMaterial({ map: castleTexture});

let secondCastleTexture = new THREE.TextureLoader().load('assets/textures/castle2.jpg');
let secondCastleTextureBlock = new THREE.MeshBasicMaterial({ map: secondCastleTexture });

let castleroof_texture = new THREE.TextureLoader().load('assets/textures/castleroof.jpg')
let castleRoofBlock = new THREE.MeshBasicMaterial({map: castleroof_texture});

let doorTexture = new THREE.TextureLoader().load('assets/textures/door.png');
let doorBlock = new THREE.MeshBasicMaterial({map: doorTexture});


let roadTexture = new THREE.TextureLoader().load('assets/textures/stoneroad.png');
let roadPlain = new THREE.MeshBasicMaterial({map: roadTexture});

let grassTexture = new THREE.TextureLoader().load('assets/textures/grass.jpg');
let grass = new THREE.MeshBasicMaterial({ map: grassTexture});



let stoneWallBackground = new THREE.Mesh(leftStoneWallBG, stoneWallTextureBlock);
let stoneWallBackgroundSecond = new THREE.Mesh(rightStoneWallBG, stoneWallTextureBlock);
let leftSideStoneWallBg = new THREE.Mesh(leftSideStoneWall, stoneWallTextureBlock);
let rightSideStoneWallBg = new THREE.Mesh(rightSideStoneWall, stoneWallTextureBlock);
let doorTextureBlock = new THREE.Mesh(doorBld, doorBlock);
let roadTextureBlock = new THREE.Mesh(roadFloor, roadPlain);
let leftCastleCyl = new THREE.Mesh(leftCastleBoxGeometry, castleTextureBlock); //left castle
let leftCastleRoofCone = new THREE.Mesh(leftCastleRoofConeGeometry, castleRoofBlock) //left roof castle
let fullBuildingBox = new THREE.Mesh(fullBuildingCenterBox, castleTextureBlock); // call out Geometry, then Texture
let centerroofbuildingtall_box = new THREE.Mesh(centerRoofBuildingTallBox, castleRoofBlock);
let centerbuildingtall_box = new THREE.Mesh(centerBuildingTallBox, secondCastleTextureBlock); // call out Geometry, then Texture
let rightCastleCyl = new THREE.Mesh(rightCastleBoxGeometry, castleTextureBlock); //right castle
let rightCastleRoofCone = new THREE.Mesh(rightCastleRoofConeGeometry, castleRoofBlock) //right roof castle

 //grass texture in the bottom.
let grass_plainfloor = new THREE.Mesh(plane, grass)





scene.add(stoneWallBackground);
scene.add(stoneWallBackgroundSecond);
scene.add(leftSideStoneWallBg);
scene.add(rightSideStoneWallBg);
scene.add(leftCastleRoofCone);
scene.add(doorTextureBlock);
scene.add(roadTextureBlock);
scene.add(leftCastleCyl);
scene.add(fullBuildingBox);
scene.add(centerroofbuildingtall_box);
scene.add(centerbuildingtall_box);
scene.add(rightCastleRoofCone);
scene.add(rightCastleCyl);


scene.add(grass_plainfloor);


camera.position.x = 150;
camera.position.y = 40;
camera.position.z = 100;




function animate() {
   requestAnimationFrame( animate );

   stoneWallBackground.position.x = -60;
   stoneWallBackground.position.y = -25;
   stoneWallBackground.position.z = -10;
   stoneWallBackgroundSecond.position.x = 60;
   stoneWallBackgroundSecond.position.y = -25;
   stoneWallBackgroundSecond.position.z = -10;

   leftSideStoneWallBg.position.x=-84;
   leftSideStoneWallBg.position.y = -25;
   leftSideStoneWallBg.position.z = -66;
   leftSideStoneWallBg.rotation.y = 8;
   leftSideStoneWallBg.rotation.x = 3;
  
   rightSideStoneWallBg.position.x=102;
   rightSideStoneWallBg.position.y = -25;
   rightSideStoneWallBg.position.z = -66;
   rightSideStoneWallBg.rotation.y = 8;
   rightSideStoneWallBg.rotation.x = 3;

   leftCastleRoofCone.position.x = -28;
   leftCastleRoofCone.position.y = -10; //akyat baba
   
   leftCastleCyl.position.x = -28;
   leftCastleCyl.position.y = -26;

   fullBuildingBox.position.x = 0;
   fullBuildingBox.position.y = -27;
   fullBuildingBox.position.z = -5;

   doorTextureBlock.position.x= 5;
   doorTextureBlock.position.y = -27;
   doorTextureBlock.position.z = 9;

   roadTextureBlock.position.x= 5;
   roadTextureBlock.position.y = -30;
   roadTextureBlock.position.z = 15;
   roadTextureBlock.rotation.x = -8.1;

   centerroofbuildingtall_box.position.x = 5;
   centerroofbuildingtall_box.position.y = 3;
   centerroofbuildingtall_box.position.z = 3;

   centerbuildingtall_box.position.x = 5;
   centerbuildingtall_box.position.y = -18;
   centerbuildingtall_box.position.z = 3;

   rightCastleRoofCone.position.x = 28;
   rightCastleRoofCone.position.y = -2;
   
   rightCastleCyl.position.x = 28;
   rightCastleCyl.position.y = -21;

   grass_plainfloor.rotation.x = 17;
   grass_plainfloor.position.y = -35;

 
   

   function animate() {
      requestAnimationFrame(animate);
      render();
   }
   //Rotation function
   function render() {

      controls = new THREE.OrbitControls(camera);


      let speed = Date.now() * 0.00019;
      camera.position.x = Math.cos(speed) * 30;
      camera.position.z = Math.sin(speed) * 30;
      scene.position.x = 0;
      scene.position.y= -40;
      scene.position.z = -100;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);

      controls.update();
    }
   animate(); 
   
}
animate();