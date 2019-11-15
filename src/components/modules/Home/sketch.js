import cube from 'models/attic-cube.obj';

export default (p5) => {
  let x = 0;
  let y = 0;
  let model;
  const { innerWidth, innerHeight } = window;

  p5.preload = () => {
    model = p5.loadModel(cube);
  };

  p5.setup = () => {
    p5.createCanvas(innerWidth * .75, innerHeight * 0.75, p5.WEBGL);
  };

  p5.draw = () => {
    p5.background(255);
    p5.fill(100);
    p5.lights();

    x = p5.lerp(x, p5.mouseX, 0.05);
    y = p5.lerp(y, p5.mouseY, 0.05);

    const newX = p5.radians(0 + (x * .02));
    const newY = p5.radians(70 + -(y * .02));

    p5.rotateX(newY);
    p5.rotateY(newX);
    p5.rotateZ(p5.radians(20));

    p5.scale(3);
    p5.model(model);
    p5.normalMaterial();
  };
};
