﻿
// configuration of the model

// URL parameter: ...html?a=[5..30]

// sizes of the frame

export const FRAME_SIZE 	= 60;	// inner size, must be = A+B
export const FRAME_WIDTH	= 4;	// width of edge, outside the frame size
export const FRAME_HEIGHT 	= 4;	// outer height of the frame
export const FRAME_RADIUS 	= 2;	// outer corner radius of the frame
export const FRAME_DENT 	= 2;	// inset in the frame for tiles

export const INNER_RADIUS 	= 6;	// internal corner radius of the frame

export const GROOVE_DENT = 1/3;
export const GROOVE_RADIUS = 2;

export const TILE_HEIGHT = 1;
export const TILE_RADIUS = 1;


var urlParams = new URLSearchParams( window.location.search ),
	minA = FRAME_SIZE/12,
	maxA = FRAME_SIZE/2,
	defA = FRAME_SIZE/3; // default A

// sides of the triangle tiles
export const A = Math.floor(Math.max(minA,Math.min(maxA,parseInt(urlParams.get('a'))||defA)));
export const B = FRAME_SIZE-A;
export const C = Math.sqrt(A*A+B*B);

export const ANGLE = Math.atan2(A,B);
export const MATRIX = new THREE.Matrix4().makeRotationY( -ANGLE );

console.assert( A <= 0.50*FRAME_SIZE );
