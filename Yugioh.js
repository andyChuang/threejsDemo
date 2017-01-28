var Yugioh = function() {
	var yugioh = this;

	yugioh.cardConfig = {
		me: {
			// monsters
			mon1: {
				size: { x: 1, y: 1.3 },
				pos: { x: -2.85, y: 0.001, z: 1.35 },
				lookat: { x: -2.85,  y: 1,  z: 1.35 }
			},
			mon2: {
				size: { x: 1, y: 1.3 },
				pos: { x: -1.45, y: 0.001, z: 1.35 },
				lookat: { x: -1.45,  y: 1,  z: 1.35 }
			},
			mon3: {
				size: { x: 1, y: 1.3 },
				pos: { x: -0.05, y: 0.001, z: 1.35 },
				lookat: { x: -0.05,  y: 1,  z: 1.35 }
			},
			mon4: {
				size: { x: 1, y: 1.3 },
				pos: { x: 1.35, y: 0.001, z: 1.35 },
				lookat: { x: 1.35,  y: 1,  z: 1.35 }
			},
			mon5: {
				size: { x: 1, y: 1.3 },
				pos: { x: 2.75, y: 0.001, z: 1.35 },
				lookat: { x: 2.75,  y: 1,  z: 1.35 }
			},
			// Magics & traps
			mts1: {
				size: { x: 1, y: 1.3 },
				pos: { x: -2.85, y: 0.001, z: 2.88 },
				lookat: { x: -2.85,  y: 1,  z: 2.88 }
			},
			mts2: {
				size: { x: 1, y: 1.3 },
				pos: { x: -1.45, y: 0.001, z: 2.88 },
				lookat: { x: -1.45,  y: 1,  z: 2.88 }
			},
			mts3: {
				size: { x: 1, y: 1.3 },
				pos: { x: -0.05, y: 0.001, z: 2.88 },
				lookat: { x: -0.05,  y: 1,  z: 2.88 }
			},
			mts4: {
				size: { x: 1, y: 1.3 },
				pos: { x: 1.35, y: 0.001, z: 2.88 },
				lookat: { x: 1.35,  y: 1,  z: 2.88 }
			},
			mts5: {
				size: { x: 1, y: 1.3 },
				pos: { x: 2.75, y: 0.001, z: 2.88 },
				lookat: { x: 2.75,  y: 1,  z: 2.88 }
			}
		},
		enemy: {
			// monsters
			mon1: {
				size: { x: 1, y: 1.3 },
				pos: { x: -2.85, y: 0.001, z: -1.35 },
				lookat: { x: -2.85,  y: -1,  z: -1.35 }
			},
			mon2: {
				size: { x: 1, y: 1.3 },
				pos: { x: -1.45, y: 0.001, z: -1.35 },
				lookat: { x: -1.45,  y: -1,  z: -1.35 }
			},
			mon3: {
				size: { x: 1, y: 1.3 },
				pos: { x: -0.05, y: 0.001, z: -1.35 },
				lookat: { x: -0.05,  y: -1,  z: -1.35 }
			},
			mon4: {
				size: { x: 1, y: 1.3 },
				pos: { x: 1.35, y: 0.001, z: -1.35 },
				lookat: { x: 1.35,  y: -1,  z: -1.35 }
			},
			mon5: {
				size: { x: 1, y: 1.3 },
				pos: { x: 2.75, y: 0.001, z: -1.35 },
				lookat: { x: 2.75,  y: -1,  z: -1.35 }
			},
			// Magics & traps
			mts1: {
				size: { x: 1, y: 1.3 },
				pos: { x: -2.85, y: 0.001, z: -2.88 },
				lookat: { x: -2.85,  y: -1,  z: -2.88 }
			},
			mts2: {
				size: { x: 1, y: 1.3 },
				pos: { x: -1.45, y: 0.001, z: -2.88 },
				lookat: { x: -1.45,  y: -1,  z: -2.88 }
			},
			mts3: {
				size: { x: 1, y: 1.3 },
				pos: { x: -0.05, y: 0.001, z: -2.88 },
				lookat: { x: -0.05,  y: -1,  z: -2.88 }
			},
			mts4: {
				size: { x: 1, y: 1.3 },
				pos: { x: 1.35, y: 0.001, z: -2.88 },
				lookat: { x: 1.35,  y: -1,  z: -2.88 }
			},
			mts5: {
				size: { x: 1, y: 1.3 },
				pos: { x: 2.75, y: 0.001, z: -2.88 },
				lookat: { x: 2.75,  y: -1,  z: -2.88 }
			}
		}
	};

	yugioh.init = function() {
		yugioh.scene = new THREE.Scene();

		// Four params:
		// field of view: 視野的遠度
		// aspect ratio: You almost always want to use the width of the element divided by the height, or you'll get the same result as when you play old movies on a widescreen TV - the image looks squished.
		// near, far: objects further away from the camera than the value of far or closer than near won't be rendered (perfomance concern)
		yugioh.camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

		// May have a fallback for old browsers not support webGL
		yugioh.renderer = new THREE.WebGLRenderer();
		yugioh.renderer.setSize( window.innerWidth, window.innerHeight);		

		yugioh.camera.position.set(0, 5, 2);
		yugioh.camera.lookAt(new THREE.Vector3(0, 0, 0));

		// Append a canvas element to body
		document.body.appendChild( yugioh.renderer.domElement );	

		// controlls
		yugioh.controls = new THREE.TrackballControls( yugioh.camera, yugioh.renderer.domElement );

		// axes
		yugioh.scene.add( new THREE.AxisHelper( 10 ) );
	};

	yugioh.card = function(name, path, config) {
		var self = this;
		self.name = name;

		self.mesh = function() {
			// instantiate a loader
			var loader = new THREE.TextureLoader();

			// load a resource
			loader.load(
				// resource URL
				path,
				// Function when resource is loaded
				function ( texture ) {
					// do something with the texture
					var material = new THREE.MeshBasicMaterial( {
						map: texture
					 } );
					console.log(yugioh.scene);
					var card = new THREE.Mesh( new THREE.PlaneGeometry( config.size.x, config.size.y), material );				
					card.position.set(config.pos.x, config.pos.y, config.pos.z);
					card.lookAt(new THREE.Vector3(config.lookat.x, config.lookat.y, config.lookat.z));
					card.material.side = THREE.DoubleSide;

					yugioh.scene.add( card );
				},
				// Function called when download progresses
				function ( xhr ) {
					console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
				},
				// Function called when download errors
				function ( xhr ) {
					console.log( 'An error happened' );
				}
			);
		}
	};

	yugioh.init();
}