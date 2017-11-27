//tinyurl.com/cs160ex20
// Zombulator by YOUR NAME
// CS 160 Exercise 20: Collisions

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const POPULATION_SIZE = 300;

var population = [];

var zombieCount = 0;
var humanCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(255, 0, 0);
  initializePopulation();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawPopulation();
  movePopulation();
  drawPopulationCounts();
  handleCollisions();
}

function handleCollisions() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    var attacker = population[i];
    for (var j = i + 1; j < POPULATION_SIZE; ++j) {
      var target = population[j];
      if (attacker.isTouching(target)) {
        print("FIGHT!");
      }
    }
  }
}

function initializePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    var humanoid_type = random(0, 100);
    if (humanoid_type <= 50) {
      population[i] = initializeZombie();
      ++zombieCount;
    } else {
      population[i] = initializeHuman();
     ++humanCount;
    }
  }
}

function drawPopulationCounts() {
  stroke(0);
  textSize(72);
  textAlign(LEFT);
  text("Dead: " + zombieCount, width / 2, 100);
  textAlign(RIGHT);
  text("Living: " + humanCount, width / 2, height - 100);
}

function drawPopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].draw();
  }
}

function movePopulation() {
  for (var i = 0; i < POPULATION_SIZE; ++i) {
    population[i].move();
  }
}

function initializeZombie() {
  return {
    humanoidType: "zombie",
    x: random(0, windowWidth),
    y: random(0, 200),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(50, 60), random(50, 137), random(50, 137), 266),
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
      rect(this.x, this.y, this.size, this.size);
    },

    isTouching: function (target) {
      if (this.humanoidType == target.humanoidType) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.sixe/2 + target.size/2); 
    }
  };
}

function initializeHuman() {
  return {
    humanoidType: "human",
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    speed: random(0.25, 3),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(50, 60), random(100, 165), random(100, 165), 266),
    move: function() {
        var direction = random(0, 100);
        if (direction < 20) {
          this.x += this.speed;
        } else if (direction < 40) {
          this.x -= this.speed;
        } else if (direction < 60) {
          this.y += this.speed;
        } else {
          this.y -= this.speed;
        }
      },
    draw: function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    },

    isTouching: function (target) {
      if (this.humanoidType == target.humanoidType) return false;
      var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.sixe/2 + target.size/2); 
    }
  };
}


