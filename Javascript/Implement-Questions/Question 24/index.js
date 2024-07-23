//*  Implement a Turtle class that moves a turtle on a 2D plane.

class Turtle {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.angle = 0;
  }

  forward(distance) {
    const dx = Math.cos(this.angle) * distance;
    const dy = Math.sin(this.angle) * distance;
    this.x += dx;
    this.y += dy;
  }

  left(angle) {
    this.angle -= angle;
  }

  right(angle) {
    this.angle += angle;
  }

  getPosition() {
    return { x: this.x, y: this.y };
  }
}

const turtle = new Turtle();
console.log(turtle.getPosition());

turtle.forward(10);
console.log(turtle.getPosition());

turtle.left(Math.PI / 2);
turtle.forward(5);
console.log(turtle.getPosition());

turtle.right(Math.PI / 4);
turtle.forward(7);
console.log(turtle.getPosition());
