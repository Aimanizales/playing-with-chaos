const radians_to_degrees = radians => radians * (180 / Math.PI);

const printValues = (prefix = '', { angle, xPos, yPos }) => console.log(
	prefix, {
		angle,
		angleInDegrees: radians_to_degrees(angle),
		xPos,
		yPos,
	});

const CANVAS_SCALE = 300;
const MAX_DEPTH = 9;
let context2D;

function drawAxis() {
	// x-axis
	context2D.beginPath();
	context2D.lineWidth = 0.005;
	context2D.strokeStyle = "green";
	context2D.moveTo(-1, 0);
	context2D.lineTo(1, 0);
	context2D.stroke();

	// y-axis
	context2D.beginPath();
	context2D.lineWidth = 0.005;
	context2D.strokeStyle = "green";
	context2D.moveTo(0, -1);
	context2D.lineTo(0, 1);
	context2D.stroke();

	// circle:
	context2D.beginPath();
	context2D.ellipse(0, 0, 1, 1, 0, 0, 2 * Math.PI);
	context2D.stroke();
}

function init() {
	chaos.init();

	let depth = 0;

	draw({ depth });

	document.body.addEventListener('keyup', event => {
		switch(event.key) {
			case ' ':
				depth += 1;
				if (depth < MAX_DEPTH) {
					draw({ depth });
				}
				break;

			case 'p':
				chaos.popImage();
				break;
			default: 
				break;
		}
	});
}

function draw({ depth }) {
	chaos.clear();

	context2D = chaos.context;

	context2D.save();
	context2D.translate(chaos.width * 0.5, chaos.height * 0.6);
	
	// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale
	context2D.scale(CANVAS_SCALE, CANVAS_SCALE); 
	
	drawTriangle(depth);
	drawAxis();

	context2D.restore();
}

const getPosition = angle => ([
	Math.cos(angle),
	Math.sin(angle)
]);

function drawTriangle(depth) {
	// debugger;
	// Canvas y-axis is inverse (negatives are up).
	let radian = -Math.PI / 2;  // -90º

	if (depth === 0) {
		context2D.beginPath();

		// move to top point of triangle
		context2D.moveTo(...getPosition(radian));

		radian += Math.PI * 2 / 3;
		context2D.lineTo(...getPosition(radian));

		// draw line to final point
		radian += Math.PI * 2 / 3;
		context2D.lineTo(...getPosition(radian));

		context2D.fill();
	}
	else {
		// Saves the entire state of the canvas by 
		// pushing the current state onto a stack.
		context2D.save();
		
		// draw the top triangle
		context2D.translate(...getPosition(radian).map(n => n / 2));
		context2D.scale(0.5, 0.5);

		drawTriangle(depth - 1);

		// Restores the most recently saved canvas state by 
		// popping the top entry in the drawing state stack.
		// If there is no saved state, this method does nothing.
		context2D.restore(); 
		context2D.save();

		// draw the lower right triangle
		radian += Math.PI * 2 / 3;
		context2D.translate(...getPosition(radian).map(n => n / 2));
		context2D.scale(0.5, 0.5);

		drawTriangle(depth - 1);

		context2D.restore();
		context2D.save();
		
		// draw the lower left triangle
		radian += Math.PI * 2 / 3;
		context2D.translate(...getPosition(radian).map(n => n / 2));
		context2D.scale(0.5, 0.5);

		drawTriangle(depth - 1);

		context2D.restore();
	}
}

window.onload = () => init();
