// zombulator by Kayla McNeeley

var zombieX = 50;
var zombieY = 100;

function setup() {
	createCanvas(800, 800);
}

function draw() {
	background(255, 255, 255);
	fill(17, 4, 92);
	strokeWeight(9);
	stroke(247, 211, 9);
	ellipse(zombieX, 50, 80, 80);
	fill(158, 72, 6);
	ellipse(zombieY, 100, 80, 80)
	zombieX = zombieX + 1;
	zombieY = zombieY + 3;
	if (zombieX >= 800) {
		zombieX= 0;
	}
	if (zombieY >= 300) {
		zombieY= 0;
	}
}

