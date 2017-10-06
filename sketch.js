// zombulator by Kayla McNeeley

var zombieX = 50;
var zombieY = 100;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255);
	fill(255, 0, 0);
	strokeWeight(4);
	stroke(0, 204, 204);
	ellipse(zombieX, 50, 80, 80);
	fill(150, 150, 200);
	ellipse(zombieY, 100, 80, 80)
	zombieX = zombieX + 1;
	zombieY = zombieY + 3;
	if (zombieX >= 800) {
		zombieX= 0;
	}
}

