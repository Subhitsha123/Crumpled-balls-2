class Paper1{
    constructor(x,y,radius){
        var paper_options={
            'restitution':0.3,
            'density':1.2,
            'friction':0.5,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,paper_options);
        this.radius = radius;
        World.add(world,this.body);

        this.image = loadImage('paper.png');
    };

    display(){
        var pos = this.body.position;

        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
        pop();
    };
};