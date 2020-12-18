class Box{
    constructor(x,y,width,height){
        var options = {
            'friction':1,
            'density' :10

        }
        this.width = 150;
        this.height = 200;

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");

    }
}