window.onload = function() {
	init();

	function init() {
		chaos.init();

		document.body.addEventListener('keyup', (event) => {
			console.log(event);
			switch(event.key) {
				case ' ': // space
					draw();
					break;
				case 'p':
					chaos.popImage();
					break;
				default: 
					break;
			}
		});
	}

	function draw() {
		const x = Math.random() * (chaos.width - 100),
			y = Math.random() * (chaos.height - 100),
			w = 20 + Math.random() * 100,
			h = 20 + Math.random() * 100,
			r = Math.floor(Math.random() * 256),
			g = Math.floor(Math.random() * 256),
			b = Math.floor(Math.random() * 256);

		chaos.context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
		chaos.context.fillRect(x, y, w, h);
	}
}
