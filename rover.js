var myRover = {
  position: [0,0],
  direction: 'N'
};

var commandArray = "ff";
var instructions = commandArray.length;



function goForward(rover) {

  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      if (myRover.position[0] > 10) {
        myRover.position[0] = 0;
      }
      break;
    case 'E':
      rover.position[1]++
      if (myRover.position[1] > 10) {
        myRover.position[1] = 0;
      }
      break;
    case 'S':
      rover.position[0]--
      if (myRover.position[0] > 10) {
        myRover.position[0] = 0;
      }
      break;
    case 'W':
      rover.position[1]--
      if (myRover.position[1] > 10) {
        myRover.position[1] = 0;
      }
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")

}


function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction[0]--
      if (myRover.position[0] > 10) {
        myRover.position[0] = 0;
      }
      break;
    case 'E':
      rover.position[1]--
      if (myRover.position[1] > 10) {
        myRover.position[1] = 0;
      }
      break;
    case 'S':
      rover.position[0]++
      if (myRover.position[0] > 10) {
        myRover.position[0] = 0;
      }
      break;
    case 'W':
      rover.position[1]++
      if (myRover.position[1] > 10) {
        myRover.position[1] = 0;
      }
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")

}

function goRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "E"
      break;
    case 'E':
      rover.direction = "S"
      break;
    case 'S':
      rover.direction = "W"
      break;
    case 'W':
      rover.direction = "N"
      break;
  };

  console.log("New Rover Direction: [" + rover.direction + "]")

}

function goLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.direction = "W"
      break;
    case 'E':
      rover.direction = "N"
      break;
    case 'S':
      rover.direction = "E"
      break;
    case 'W':
      rover.direction = "S"
      break;
  };

  console.log("New Rover Direction: [" + rover.direction + "]")

}

for (var i = 0; i < instructions; i++) {
  if (commandArray[i].indexOf("f") >= 0) {
    goForward(myRover);
  } else if (commandArray[i].indexOf("b") >= 0) {
    goBackward(myRover);
  } else if (commandArray[i].indexOf("r") >= 0) {
    goRight(myRover);
  } else if (commandArray[i].indexOf("l") >= 0) {
    goLeft(myRover);
  }
  }



console.log(myRover.position);
