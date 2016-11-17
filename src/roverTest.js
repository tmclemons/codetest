function roverCommands (coordinates, direction, gridSpace, obstacles) {
  rover = this;

  var coordinates = !coordinates ? [0,0] : coordinates;
  var direction = !direction ? 'North' : direction;
  var directions = ['North', 'East', 'South', 'West'];
  var gridSpace = !gridSpace ? [100, 100] : gridSpace;


  rover.coordinates = coordinates;
  rover.direction = direction;
  rover.commandInput = commandInput;
  rover.directions = directions;
  rover.gridSpace = gridSpace;

  function commandInput (input){
    if (input) {
      for (let i = 0; i < input.length; i++) {

        if(input[i] === 'forward' || input[i] === 'backward') {
          moveRover(input[i]);
        } else if (input[i] === 'left' || input[i] === 'right'){
          turnRover(input[i]);
        }

      }
      this.resultArray = input;
    } else {
      return this.resultArray;
    }
  }

  function turnRover(input){
    var directionCalc;
      //iterates through list of directions for comparision for turn
    for (let index = 0; index < 4; index++) {
      if (rover.directions[index] === rover.direction) {
        directionCalc = index;
      }
    }

    if (input === 'right') {
      directionCalc = (directionCalc + 1) % 4;
    } else {
      directionCalc = (directionCalc + 4 - 1) % 4;
    }
      rover.direction = rover.directions[directionCalc];
  }

  function moveRover(input){
    var xMove = 0;
    var yMove = 0;
    switch (rover.direction) {
      case 'North':
        yMove = -1;
        break;
      case 'South':
        yMove = 1;
        break;
      case 'East':
        xMove = 1;
        break;
      case 'West':
        xMove = -1;
        break;
      default:
        xMove = 0;
        yMove = 0;
    }

    if (input === 'backward') {
        xMove *= -1;
        yMove *= -1;
    }

    var updatedCoordinates = [
      rover.coordinates[0] + xMove,
      rover.coordinates[1] + yMove
    ];

    rover.coordinates = updatedCoordinates;
  }

};
