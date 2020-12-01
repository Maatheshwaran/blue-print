class Ground{
    constructor(x,y,width,height){
        var ground_option = {
            isStatic: true
        }
        this.ground  = Bodies.rectangle(x,y,width,height,ground_option);
        this.width = width;
        this.height = height;
        World.add(world,this.ground);
    }
    display(){
        var position = this.ground.position;
        rectMode(CENTER);
        fill(255);
        rect(position.x,position.y,this.width,this.height);
    }

}