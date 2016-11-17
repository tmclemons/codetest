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

  describe('Implement commands that move the rover forward/backward (f,b)', () => {
    // setup for directional input

    it('Y coordinate decreases while moving forward north', function() {

      var roverTest = new roverCommands([43, 12], 'North');

      roverTest.commandInput(['forward', 'forward', 'forward']);

      expect(roverTest.coordinates).toEqual([43, 9]);
    });

    it('Y coordinate increase while moving forward north', function() {

      var roverTest = new roverCommands([20, 12], 'South');

      roverTest.commandInput(['forward', 'forward', 'forward']);

      expect(roverTest.coordinates).toEqual([20, 15]);
    });

    it('X coordinate increase while movingforward  east', function() {

      var roverTest = new roverCommands([20, 12], 'East');

      roverTest.commandInput(['forward', 'forward']);

      expect(roverTest.coordinates).toEqual([22, 12]);
    });

    it('X coordinate decrease while moving forward west', function() {

      var roverTest = new roverCommands([20, 12], 'West');

      roverTest.commandInput(['forward', 'forward']);

      expect(roverTest.coordinates).toEqual([18, 12]);
    });


        it('Y coordinate increase while moving backward north', function() {

          var roverTest = new roverCommands([43, 12], 'North');

          roverTest.commandInput(['backward', 'backward', 'backward']);

          expect(roverTest.coordinates).toEqual([43, 15]);
        });

        it('Y coordinate decrease while moving backward north', function() {

          var roverTest = new roverCommands([20, 15], 'South');

          roverTest.commandInput(['backward', 'backward', 'backward']);

          expect(roverTest.coordinates).toEqual([20, 12]);
        });

        it('X coordinate decrease while moving backward  east', function() {

          var roverTest = new roverCommands([22, 12], 'East');

          roverTest.commandInput(['backward', 'backward']);

          expect(roverTest.coordinates).toEqual([20, 12]);
        });

        it('X coordinate increase while moving backward west', function() {

          var roverTest = new roverCommands([20, 12], 'West');

          roverTest.commandInput(['backward', 'backward']);

          expect(roverTest.coordinates).toEqual([22, 12]);
        });

  });

  // tests for turning
  describe('Implement commands that turn the rover left/right (l,r).', function() {

    it('directions should changes from east to south when turning right', function() {

      var roverTest = new roverCommands([0, 0], 'East');

      roverTest.commandInput(['right']);

      expect(roverTest.direction).toEqual('South');
    });


    it('directions should changes from west to south when turning left', function() {

      var roverTest = new roverCommands([0, 0], 'West');

      roverTest.commandInput(['left']);

      expect(roverTest.direction).toEqual('South');
    });

    it('directions should changes from north to west when turning left', function() {

      var roverTest = new roverCommands([0, 0], 'North');

      roverTest.commandInput(['left']);

      expect(roverTest.direction).toEqual('West');
    });


    it('directions should changes from north to east when turning right', function() {

      var roverTest = new roverCommands([0, 0], 'North');

      roverTest.commandInput(['right']);

      expect(roverTest.direction).toEqual('East');
    });


  });

  describe('Implement wrapping from one edge of the grid to another', () => {

    it('confirm grid size, by assigning new one', function() {

      var roverTest = new roverCommands([0, 0], 'North', [30, 30]);

      expect(roverTest.gridSpace).toEqual([30, 30]);
    });

    it('confirm grid size with no value', function() {

      var roverTest = new roverCommands([0, 0], 'North');

      expect(roverTest.gridSpace).toEqual([100, 100]);
    });

    it('since grid is a sphere location should reset after passing grid limits', function() {

      var roverTest = new roverCommands([3, 9], 'South', [10, 10]);

      roverTest.commandInput(['forward']);

      expect(roverTest.coordinates).toEqual([3, 0]);
    });

  });

});
