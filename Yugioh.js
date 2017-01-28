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
				card: {
					size: { x: 1, y: 1.3 },
					pos: { x: -0.05, y: 0.001, z: 1.35 },
					lookat: { x: -0.05,  y: 1,  z: 1.35 }
				},
				figure: {
					size: { x: 2, y: 2 },
					pos: { x: -0.05, y: 2, z: 1.35 },
					lookat: { x: -0.05,  y: 2,  z: 2.35 }
				}
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
				card: {
					size: { x: 1, y: 1.3 },
					pos: { x: 1.35, y: 0.001, z: -1.35 },
					lookat: { x: 1.35,  y: -1,  z: -1.35 }
				},
				figure: {
					size: { x: 2, y: 2 },
					pos: { x: 1.35, y: 2, z: -1.35 },
					lookat: { x: 1.35,  y: 2,  z: -2.35 }
				}
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

		yugioh.camera.position.set(1.2, 1.5, 3.6);

		// Append a canvas element to body
		document.body.appendChild( yugioh.renderer.domElement );	

		// controlls
		yugioh.controls = new THREE.TrackballControls( yugioh.camera, yugioh.renderer.domElement );
		yugioh.controls.target = new THREE.Vector3(-0.3, 1, -30);
		// axes
		yugioh.scene.add( new THREE.AxisHelper( 10 ) );
	};

	yugioh.card = function(name, cardPath, figurePath, config) {
		var self = this;
		self.name = name;

		self.mesh = function() {
			// instantiate a loader
			var loader = new THREE.TextureLoader();

			// load a resource
			loader.load(
				// resource URL
				cardPath,
				// Function when resource is loaded
				function ( texture ) {
					// do something with the texture
					var material = new THREE.MeshBasicMaterial( {
						map: texture
					 } );

					var card = new THREE.Mesh( new THREE.PlaneGeometry( config.card.size.x, config.card.size.y), material );				
					card.position.set(config.card.pos.x, config.card.pos.y, config.card.pos.z);
					card.lookAt(new THREE.Vector3(config.card.lookat.x, config.card.lookat.y, config.card.lookat.z));
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

			loader.load(
				// resource URL
				figurePath,
				// Function when resource is loaded
				function ( texture ) {
					// do something with the texture
					var material = new THREE.MeshBasicMaterial( {
						map: texture,
						transparent: true, 
						opacity: 1
					 } );

					var card = new THREE.Mesh( new THREE.PlaneGeometry( config.figure.size.x, config.figure.size.y ), material );				
					card.position.set(config.figure.pos.x, config.figure.pos.y, config.figure.pos.z);
					card.lookAt(new THREE.Vector3(config.figure.lookat.x, config.figure.lookat.y, config.figure.lookat.z));
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