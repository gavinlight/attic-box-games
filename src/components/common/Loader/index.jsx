import React from 'react';
import * as p5 from 'p5';

import cube from 'models/cube.obj';

const Loader = () => {
  const easeInOutQuad = (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

  const s = (sk) => {
    let model;

    sk.preload = () => {
      model = sk.loadModel(cube);
    }

    sk.setup = () => {
      sk.createCanvas(window.innerWidth, window.innerHeight, sk.WEBGL);
    }

    sk.draw = () => {
      sk.background(242);
      sk.fill(120);
      sk.lights();

      sk.rotateY(easeInOutQuad(3 + sk.sin(sk.frameCount * 0.01)));
      sk.rotateX(sk.radians(55));
      sk.rotateY(sk.radians(45));
      sk.rotateZ(sk.radians(0));

      sk.scale(0.8);
      sk.model(model);
      sk.normalMaterial();
    }
  }

  React.useEffect(() => {
    const P5 = new p5(s);
    console.log('init');
    return () => {
      console.log('cleanup', P5);
      P5.remove();
    }
  }, []);

  return null;
};

export default Loader;
