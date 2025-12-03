if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var camera, scene, renderer;

//init();
var Loader = new THREE.STLLoader();
 
 
function init(file) {
	scene = new THREE.Scene();
	scene.add( new THREE.AmbientLight( 0x999999 ) );

	camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 500 );

	// Z is up for objects intended to be 3D printed.

	camera.up.set( 0, 0, 1 );
	camera.position.set( 0, -9, 6 );

	camera.add( new THREE.PointLight( 0xffffff, 0.8 ) );

	scene.add( camera );

	var grid = new THREE.GridHelper( 25, 50, 0xffffff, 0x555555 );
	grid.rotateOnAxis( new THREE.Vector3( 1, 0, 0 ), 90 * ( Math.PI/180 ) );
	scene.add( grid );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setClearColor( 0x999999 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	// Binary files
	var material = new THREE.MeshPhongMaterial( { color: 0x0e2045, specular: 0x111111, shininess: 200 } );
  
	Loader.load(file, function (geometry) {
		var mesh = new THREE.Mesh(geometry, material);

		mesh.position.set(0, 0, 0);
		mesh.rotation.set(0, 0, 0);
		mesh.scale.set(.02, .02, .02);

		mesh.castShadow = true;
		mesh.receiveShadow = true;

		scene.add(mesh);
		Render();
	});

	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.addEventListener('change', Render);
	controls.target.set(0, 1.2, 2);
	controls.update();
	window.addEventListener('resize', OnWindowResize, false);
}

function OnWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
  Render();
}

function Render() {
  renderer.render( scene, camera );
}


