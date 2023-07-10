const radians_to_degrees = radians => Math.ceil(radians * (180 / Math.PI));

const printValues = (prefix = '', { angle, xPos, yPos }) => console.log(
	prefix, {
		angle,
		angleInDegrees: radians_to_degrees(angle),
		xPos,
		yPos,
	});

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