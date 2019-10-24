import cube from 'models/attic-cube.obj';

export default (p5) => {
  let model;
  const { innerWidth, innerHeight } = window;

  p5.preload = () => {
    model = p5.loadModel(cube);
  };

  p5.setup = () => {
    p5.createCanvas(innerWidth, innerHeight, p5.WEBGL);
  };

  p5.draw = () => {
    p5.background(242);
    p5.fill(120);
    p5.lights();

    const newX = p5.radians(70 + -(p5.mouseY * .01));
    const newY = p5.radians(0 + (p5.mouseX * .01));

    p5.rotateX(newX);
    p5.rotateY(newY);
    p5.rotateZ(p5.radians(20));

    p5.scale(2.5);
    p5.model(model);
    p5.normalMaterial();
  };
};
