const RADIAN_INITIAL = -Math.PI * 0.5; // -90º
const RADIAN_INCREMENT = Math.PI * 2 / 3; // 120º
const CANVAS_SCALE = 300;
const MAX_DEPTH = 9;

let context2D;

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
	context2D.translate(chaos.width * 0.5, chaos.height * 0.5);	
	context2D.scale(CANVAS_SCALE, CANVAS_SCALE);
	
	drawTriangle(depth);
	drawAxis();

	context2D.restore();
}

const getPosition = (angle, scalar = 1) => ([
	Math.cos(angle),
	Math.sin(angle)
].map(pos => pos * scalar));

const relocateAndRedraw = (r, d) => {
	console.log('   Relocating and redrawing...', { r: `${radians_to_degrees(r)}º`, d: d })
	context2D.save();
	context2D.translate(...getPosition(r, 0.5));
	context2D.scale(0.5, 0.5);
	drawTriangle(d - 1);
	context2D.restore();
}

function drawTriangle(depth) {
	// debugger;
	let radian = RADIAN_INITIAL; // -90º

	if (depth === 0) {
		console.log('Drawing...', { r: `${radians_to_degrees(radian)}º`, depth })

		context2D.beginPath();
		context2D.moveTo(...getPosition(radian));

		radian += RADIAN_INCREMENT; // 30º
		context2D.lineTo(...getPosition(radian));

		radian += RADIAN_INCREMENT; // 150º
		context2D.lineTo(...getPosition(radian));

		context2D.fill();
	}
	else {
		relocateAndRedraw(radian, depth);

		radian += RADIAN_INCREMENT; // 30º
		relocateAndRedraw(radian, depth);

		radian += RADIAN_INCREMENT; // 150º
		relocateAndRedraw(radian, depth);
	}
}

window.onload = () => init();
