// https://circleci.com/blog/ci-cd-for-js-iifes/

const chaos = (function () {
  return {
    /**
     * 1. Initializes chaos by finding the canvas element.
     * 2. Resizes canvas.
     */
    init: function () {
      this.canvas = document.getElementById('canvas');
      this.context = this.canvas.getContext('2d');
      this.setSize(1024, 768);
      // this.setSize(window.innerWidth, window.innerHeight);
    },

    setSize: function (width, height) {
      this.width = this.canvas.width = width;
      this.height = this.canvas.height = height;
    },

    /**
     * Clears the canvas by filling it with the color specified,
     * or erasing all pixels if no color is specified.
     */
    clear: function (color) {
      if (color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
      } else {
        this.context.clearRect(0, 0, this.width, this.height);
      }
    },

    /**
     * Pops up a bitmap image representation of the canvas in a new window.
     */
    popImage: function () {
      const windowElement = window.open('', 'Canvas Image'),
        src = this.canvas.toDataURL('image/png');

      windowElement.document.write(
        "<img src='" +
          src +
          "' width='" +
          this.width +
          "' height='" +
          this.height +
          "'/>"
      );
    },
  };
})();
