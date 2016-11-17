// Develop an api that moves a rover around on a grid.
//   You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
//   The rover receives a character array of commands.
//   Implement commands that move the rover forward/backward (f,b).
//   Implement commands that turn the rover left/right (l,r).
//   Implement wrapping from one edge of the grid to another. (planets are spheres after all)
//   Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle.

describe('Mars Rover Test', () => {

  //initial test for location and direcition confirmation
  describe('You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.', () => {
    it('set the starting location', function() {

      var roverTest = new roverCommands([10, 30]);

      expect(roverTest.coordinates).toEqual([10, 30]);

    });

    it('starting location should be [x, y] = [0, 0] by default', function() {

      var roverTest = new roverCommands();

      expect(roverTest.coordinates).toEqual([0, 0]);
    });

    it('defualt direction should be North at start', function() {

      var roverTest = new roverCommands([10, 30], 'North');

      expect(roverTest.direction).toEqual('North');
    });

  });

  describe('The rover receives a character array of commands', function() {
    // passes in character array commands

    it('pass command array set', function() {

      var roverTest = new roverCommands([43, 12], 'North');

      roverTest.commandInput(['up', 'down', 'left', 'right']);

      expect(roverTest.commandInput()).toEqual(['up', 'down', 'left', 'right']);
    });

  });

});
