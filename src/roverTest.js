function roverCommands (coordinates, direction, gridSpace, obstacles) {
  rover = this;

  var coordinates = !coordinates ? [0,0] : coordinates;
  var direction = !direction ? 'North' : direction;

  rover.coordinates = coordinates;
  rover.direction = direction;

};
