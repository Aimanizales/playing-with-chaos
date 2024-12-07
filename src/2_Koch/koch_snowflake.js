window.onload = function () {
  let maxDepth = 0;

  const { sqrt, sin, cos, atan2, PI } = Math;

  init();

  function init() {
    chaos.init();

    draw();

    document.body.addEventListener('keyup', (event) => {
      switch (event.key) {
        case ' ':
          maxDepth += 1;
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
    let p0 = {
      x: chaos.width * 0.32,
      y: chaos.height * 0.28,
    };

    let p1 = {
      x: chaos.width * 0.68,
      y: chaos.height * 0.28,
    };

    let p2 = {
      x: p1.x + cos((PI * 2) / 3) * (p1.x - p0.x),
      y: p1.y + sin((PI * 2) / 3) * (p1.x - p0.x),
    };

    chaos.clear();
    chaos.context.lineWidth = 2;

    koch(p0, p1, maxDepth);
    koch(p1, p2, maxDepth);
    koch(p2, p0, maxDepth);
  }

  function koch(p0, p1, depth) {
    let dx = p1.x - p0.x,
      dy = p1.y - p0.y,
      dist = sqrt(dx * dx + dy * dy),
      unit = dist / 3,
      angle = atan2(dy, dx),
      pa,
      pb,
      pc;

    pa = {
      x: p0.x + cos(angle) * unit,
      y: p0.y + sin(angle) * unit,
    };
    pb = {
      x: pa.x + cos(angle - PI / 3) * unit,
      y: pa.y + sin(angle - PI / 3) * unit,
    };
    pc = {
      x: p0.x + cos(angle) * unit * 2,
      y: p0.y + sin(angle) * unit * 2,
    };

    if (depth === 0) {
      chaos.context.beginPath();
      chaos.context.moveTo(p0.x, p0.y);
      chaos.context.lineTo(pa.x, pa.y);
      chaos.context.lineTo(pb.x, pb.y);
      chaos.context.lineTo(pc.x, pc.y);
      chaos.context.lineTo(p1.x, p1.y);
      chaos.context.stroke();
    } else {
      let newDepth = depth - 1;

      koch(p0, pa, newDepth);
      koch(pa, pb, newDepth);
      koch(pb, pc, newDepth);
      koch(pc, p1, newDepth);
    }
  }
};
