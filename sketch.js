//tinyurl.com/cs160ex20
// Zombulator by YOUR NAME
// CS 160 Exercise 20: Collisions

var backgroundColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const POPULATION_SIZE = 100;

var population = [];

var zombieCount = 0;
var humanCount = 0;

var grass;
var kittycat;

function preload() {
  grass = loadImage ("https://i.imgur.com/BtEnsR9.jpg");
  //kittycat = loadImage ("https://i.pinimg.com/236x/91/15/85/911585f9cd0da326bc386879144aa3f3.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(255, 0, 0);
  initializePopulation();
}

function draw() {
  background(grass);
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
        fight(attacker, target);
      }
    }
  }
}

function fight(a,t) {
  if (a.size >= t.size) {
    if (a.humanoidType == "zombie")
     {print ("Winner: Attacking Zombie");
      t.isDead();
    } else { 
      print ("Winner: Attacking Human");
    }
  } else {
    if (t.humanoidType == "human") {
      print ("Winner: Tageted Zombie");
    } else {
      print ("Winner:Targeted Zombie");
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
  textAlign(CENTER);
  fill(255);
  text("Dead: " + zombieCount, 200, 100);
  text("Living: " + humanCount, width - 200, height - 100);
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
    //if (this.health ! = 0);
      fill(this.color);
      rect(this.x, this.y, this.size, this.size);
    },

    isTouching: function (target) {
      if (this.humanoidType == target.humanoidType) {
        return false;
      } else {var distance = dist(this.x, this.y, target.x, target.y);
      return distance <= (this.sixe/2 + target.size/2);}  
    },
    isDead: function (){
      this.color = color(0, 0);
    }
  }
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
    },
    isDead: function (){
      this.color = color(0, 0);
    }
  }
}


