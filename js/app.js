(function(){

	var scene, camera, renderer;

    init();
    animate();

    //Use this for initialization
    function init() {
        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;


        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( renderer.domElement );
    }

    //This is called each frame
    function animate() {

        requestAnimationFrame( animate );

        //your code here...

		THREEx.WindowResize(renderer, camera);
        renderer.render( scene, camera );
    }

})();