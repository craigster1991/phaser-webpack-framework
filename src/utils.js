const centreGameObjects = objects => {
  objects.forEach(object => {
    object.anchor.setTo(0.5);
  });
};

export default centreGameObjects;
