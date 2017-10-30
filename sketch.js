// http://tinyurl.com/cs160ex18
// Zombulator by Kayla McNeeley
// CS 160 Exercise 18: Member functions

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const NUMBER_OF_ZOMBIES = 100;
const NUMBER_OF_HUMANS = 100;

var zombies;

var humans;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(245, 255, 245);
  initializeZombies();
  initializeHumans();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawZombies();
  moveZombies();
  drawHumans();
  moveHumans();
}


// Zombies. Raaahh!

function initializeZombies() {
  zombies = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    zombies[i] = initializeZombie();
  }
}

function initializeZombie() {
  return {
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(100, 255), random(50, 150), random(50, 150), 150),
    move: function() {
      var direction = random(0, 100);
      if (direction < 20) {
        this.x += this.speed;
      } else if (direction < 40) {
        this.x -= this.speed;
      } else if (direction < 60) {
        this.y -= this.speed;
      } else {
        this.y += this.speed;
      }
    },
    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    }
  };
}

function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    zombies[i].draw();
  }
}

function moveZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    zombies[i].move();
  }
}

// Humans. Mmmm brains!

function initializeHumans() {
  humans = [];
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    humans[i] = initializeHuman();
  }
}

// TODO: Refactor according to usage in initializeHumans above.
//       Should _return_ a human object.
function initializeHuman(index) {
  humans[index] = {
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(50, 150), random(50, 150), random(150, 255), 150)
  };
}

function drawHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    humans[i].draw();
  }
}

// TODO: Extract into object member function, then delete this.
function drawHuman(human) {
  fill(human.color);
  ellipse(human.x, human.y, human.size, human.size);
}

function moveHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    humans[i].move();
  }
}

// TODO: Extract into object member function, then delete this.
function moveHuman(human) {
  var direction = random(0, 100);
  if (direction < 20) {
    human.x += human.speed;
  } else if (direction < 40) {
    human.x -= human.speed;
  } else if (direction < 60) {
    human.y += human.speed;
  } else {
    human.y -= human.speed;
  }
}