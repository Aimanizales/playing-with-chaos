window.onload = function() {
	init();

	function init() {
		chaos.init();

		let size = chaos.height * 0.5;
		let maxDepth = 0;

		draw({ size, maxDepth });

		document.body.addEventListener('keyup', (event) => {
			console.log(event.key);
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
		chaos.clear();
		chaos.context.save();
		chaos.context.translate(chaos.width * 0.5, chaos.height * 0.6);
		chaos.context.scale(size, size);
		drawTriangle(maxDepth);
		chaos.context.restore();		
	}

	function drawTriangle(depth) {
		let angle = -Math.PI / 2;
		if (depth === 0) {
			chaos.context.beginPath();

			// move to top point of triangle
			chaos.context.moveTo(Math.cos(angle), Math.sin(angle));
			angle += Math.PI * 2 / 3;

			// draw line to lower right point
			chaos.context.lineTo(Math.cos(angle), Math.sin(angle));

			// draw line to final point
			angle += Math.PI * 2 / 3;
			chaos.context.lineTo(Math.cos(angle), Math.sin(angle));

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
}
