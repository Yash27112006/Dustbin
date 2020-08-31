class Paper extends BaseClass {
  constructor(x,y){
    super(x,y,80,80);
    this.image = loadImage("sprites/paper.png");
  }

  display() {
   // this.body.position.x = mouseX;
   // this.body.position.y = mouseY;
    super.display();
  }
}
