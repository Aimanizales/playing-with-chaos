const radians_to_degrees = radians => radians * (180 / Math.PI);

const printValues = (prefix = '', { angle, xPos, yPos }) => console.log(
	prefix, {
		angle,
		angleInDegrees: radians_to_degrees(angle),
		xPos,
		yPos,
	});

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
	context2D.scale(400, 400); 
	
	drawTriangle(depth);

	drawAxis();

	context2D.restore();
}

function drawTriangle(depth) {
	// debugger;
	let angle = -Math.PI / 2;  // -90º

	// Canvas y-axis is inverse (negatives are up).
	let xPos = Math.cos(angle);
	let yPos = Math.sin(angle);

	if (depth === 0) {
		context2D.beginPath();

		// move to top point of triangle
		context2D.moveTo(xPos, yPos);

		angle += Math.PI * 2 / 3;
		xPos = Math.cos(angle);	
		yPos = Math.sin(angle);

		// draw line to lower right point
		context2D.lineTo(xPos, yPos);

		// draw line to final point
		angle += Math.PI * 2 / 3;
		xPos = Math.cos(angle);
		yPos = Math.sin(angle);
		context2D.lineTo(xPos, yPos);

		// fill will close the shape
		context2D.fill();
	}
	else {
		// draw the top triangle
		
		// Saves the entire state of the canvas by 
		// pushing the current state onto a stack.
		context2D.save();

		xPos = Math.cos(angle) * 0.5;
		yPos = Math.sin(angle) * 0.5;

		context2D.translate(xPos, yPos);
		context2D.scale(0.5, 0.5);
		drawTriangle(depth - 1);

		// Restores the most recently saved canvas state by 
		// popping the top entry in the drawing state stack.
		// If there is no saved state, this method does nothing.
		context2D.restore(); 
		context2D.save();

		// draw the lower right triangle
		angle += Math.PI * 2 / 3;
		xPos = Math.cos(angle) * 0.5;
		yPos = Math.sin(angle) * 0.5;

		context2D.translate(xPos, yPos);
		context2D.scale(0.5, 0.5);

		drawTriangle(depth - 1);

		context2D.restore();
		context2D.save();
		
		// draw the lower left triangle
		angle += Math.PI * 2 / 3;
		xPos = Math.cos(angle) * 0.5;
		yPos = Math.sin(angle) * 0.5;
		context2D.translate(xPos, yPos);
		context2D.scale(0.5, 0.5);

		drawTriangle(depth - 1);

		context2D.restore();
	}
}

window.onload = () => console.log(chaos.context) || init();
