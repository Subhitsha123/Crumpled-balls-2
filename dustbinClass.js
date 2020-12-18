class Dustbin{
    constructor(x,y,width,height){
        var options = {
            'friction':1,
            'density' :10

        }
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

        this.image = loadImage('bin.png');
        
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.image,pos.x,550,150,200);
        pop();
    }
}