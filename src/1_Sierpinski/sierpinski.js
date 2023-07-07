const radians_to_degrees = radians => radians * (180 / Math.PI);

const printValues = (prefix = '', { angle, xPos, yPos }) => console.log(
	prefix, {
		angle,
		angleInDegrees: radians_to_degrees(angle),
		xPos,
		yPos,
	});

const MAX_DEPTH = 9;

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
	chaos.context.save();
	chaos.context.translate(chaos.width * 0.5, chaos.height * 0.6);
	
	// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale
	chaos.context.scale(400, 400); 
	
	drawTriangle(depth);
	chaos.context.restore();
}

function drawTriangle(depth) {
	let angle = -Math.PI / 2;  // -90º

	// Canvas y-axis is inverse (negatives are up).
	let xPos = Math.cos(angle);
	let yPos = Math.sin(angle);

	if (depth === 0) {
		chaos.context.beginPath();

		// move to top point of triangle
		chaos.context.moveTo(xPos, yPos);

		angle += Math.PI * 2 / 3;
		xPos = Math.cos(angle);	
		yPos = Math.sin(angle);

		// draw line to lower right point
		chaos.context.lineTo(xPos, yPos);

		// draw line to final point
		angle += Math.PI * 2 / 3;
		xPos = Math.cos(angle);
		yPos = Math.sin(angle);
		chaos.context.lineTo(xPos, yPos);

		// fill will close the shape
		chaos.context.fill();
	}
	else {
		// draw the top triangle
		
		// Saves the entire state of the canvas by 
		// pushing the current state onto a stack.
		chaos.context.save();

		xPos = Math.cos(angle) * 0.5;
		yPos = Math.sin(angle) * 0.5;

		chaos.context.translate(xPos, yPos);
		chaos.context.scale(0.5, 0.5);
		drawTriangle(depth - 1);

		// Restores the most recently saved canvas state by 
		// popping the top entry in the drawing state stack.
		// If there is no saved state, this method does nothing.
		chaos.context.restore(); 
		chaos.context.save();

		// draw the lower right triangle
		angle += Math.PI * 2 / 3;
		xPos = Math.cos(angle) * 0.5;
		yPos = Math.sin(angle) * 0.5;

		chaos.context.translate(xPos, yPos);
		chaos.context.scale(0.5, 0.5);

		drawTriangle(depth - 1);

		chaos.context.restore();
		chaos.context.save();
		
		// draw the lower left triangle
		angle += Math.PI * 2 / 3;
		xPos = Math.cos(angle) * 0.5;
		yPos = Math.sin(angle) * 0.5;
		chaos.context.translate(xPos, yPos);
		chaos.context.scale(0.5, 0.5);

		drawTriangle(depth - 1);

		chaos.context.restore();
	}
}

window.onload = () => init();
