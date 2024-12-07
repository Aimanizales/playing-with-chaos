window.onload = function () {
  let triangles = [],
    offset = 100,
    context2D;

  init();

  function init() {
    let i,
      angle = -Math.PI * 0.5;

    chaos.init();

    document.body.addEventListener('keyup', (event) => {
      switch (event.key) {
        case ' ':
          subdivide();
          draw();
          break;

        case 'p':
          chaos.popImage();
          break;

        default:
          break;
      }
    });

    triangles[0] = [];

    for (i = 0; i < 3; i += 1) {
      triangles[0].push({
        x: chaos.width * 0.5 + Math.cos(angle) * chaos.height * 0.5,
        y: chaos.height * 0.65 + Math.sin(angle) * chaos.height * 0.5,
      });
      angle += (Math.PI * 2) / 3;
    }
    console.log(triangles);

    draw();
  }

  function draw() {
    let i;

    context2D = chaos.context;

    chaos.clear();

    context2D.fillStyle = 'rgba(255, 0, 0, 0.5)';
    context2D.strokeStyle = 'black';
    context2D.lineWidth = 0.5;
    context2D.beginPath();

    for (i = 0; i < triangles.length; i += 1) {
      drawTriangle(triangles[i]);
    }
    console.log(triangles);

    // context2D.fill();
    context2D.stroke();
  }

  function drawTriangle(triangle) {
    context2D.moveTo(triangle[0].x, triangle[0].y);
    context2D.lineTo(triangle[1].x, triangle[1].y);
    context2D.lineTo(triangle[2].x, triangle[2].y);
    context2D.lineTo(triangle[0].x, triangle[0].y);
  }

  function subdivide() {
    let i,
      triangle,
      p0,
      p1,
      p2,
      p3,
      p4,
      p5,
      xxx = offset * 2 - offset; // rename

    for (i = triangles.length - 1; i >= 0; i -= 1) {
      triangle = triangles[i];

      p0 = triangle[0];
      p1 = triangle[1];
      p2 = triangle[2];
      p3 = {
        x: (p0.x + p1.x) / 2 + Math.random() * xxx,
        y: (p0.y + p1.y) / 2 + Math.random() * xxx,
      };
      p4 = {
        x: (p1.x + p2.x) / 2 + Math.random() * xxx,
        y: (p1.y + p2.y) / 2 + Math.random() * xxx,
      };
      p5 = {
        x: (p2.x + p0.x) / 2 + Math.random() * xxx,
        y: (p2.y + p0.y) / 2 + Math.random() * xxx,
      };
      triangles.push([p0, p3, p5]);
      triangles.push([p3, p1, p4]);
      triangles.push([p5, p4, p2]);

      triangles.splice(i, 1);
    }
    offset *= 0.5;
  }
};
