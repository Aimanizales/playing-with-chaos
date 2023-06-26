const radians_to_degrees = radians => radians * (180 / Math.PI);

const printValues = (prefix = '', { angle, cosAngle, sinAngle }) => console.log(prefix, {
	//angle,
	angleInDegrees: radians_to_degrees(angle),
	//cos: cosAngle,
	cosAngleInDegrees: radians_to_degrees(cosAngle),
	//sin: sinAngle,
	sinAngleInDegrees: radians_to_degrees(sinAngle),
});

function init() {
	chaos.init();

	let size = chaos.height * 0.5;
	let maxDepth = 0;

	draw({ size, maxDepth });

	document.body.addEventListener('keyup', (event) => {
		switch(event.key) {
			case ' ':
				maxDepth += 1;
				draw({ size, maxDepth });
				break;

			case 'p':
				chaos.popImage();
				break;
			default: 
				break;
		}
	});
}

function draw({ size, maxDepth }) {
	console.log({ size, maxDepth });
	chaos.clear();
	chaos.context.save();
	chaos.context.translate(chaos.width * 0.5, chaos.height * 0.6);
	chaos.context.scale(400, 400);
	drawTriangle(maxDepth);
	chaos.context.restore();		
}

function drawTriangle(depth) {
	let angle = -Math.PI / 2;
	let cosAngle = Math.cos(angle);
	let sinAngle = Math.sin(angle);

	if (depth === 0) {
		chaos.context.beginPath();

		// move to top point of triangle
		chaos.context.moveTo(cosAngle, sinAngle);

		printValues('0', { angle, cosAngle, sinAngle });

		angle += Math.PI * 2 / 3;
		cosAngle = Math.cos(angle);
		sinAngle = Math.sin(angle);

		printValues('1', { angle, cosAngle, sinAngle });

		// draw line to lower right point
		chaos.context.lineTo(cosAngle, sinAngle);

		// draw line to final point
		angle += Math.PI * 2 / 3;
		cosAngle = Math.cos(angle);
		sinAngle = Math.sin(angle);
		chaos.context.lineTo(cosAngle, sinAngle);

		printValues('2', { angle, cosAngle, sinAngle });

		// fill will close the shape
		chaos.context.fill();
	}
	else {
		// draw the top triangle
		chaos.context.save();
		chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
		chaos.context.scale(0.5, 0.5);
		drawTriangle(depth - 1);
		chaos.context.restore();
		
		// draw the lower right triangle
		angle += Math.PI * 2 / 3;
		chaos.context.save();
		chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
		chaos.context.scale(0.5, 0.5);
		drawTriangle(depth - 1);
		chaos.context.restore();
		
		// draw the lower left triangle
		angle += Math.PI * 2 / 3;
		chaos.context.save();
		chaos.context.translate(Math.cos(angle) * 0.5, Math.sin(angle) * 0.5);
		chaos.context.scale(0.5, 0.5);
		drawTriangle(depth - 1);
		chaos.context.restore();
	}
}

window.onload = () => init();
