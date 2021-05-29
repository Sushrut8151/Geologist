class Iron
{
    constructor(x,y,width,height)
    {
       var iron_option = {
           restitution : 0.8,
           density : 30,
           friction : 3
       }
        this.body = Bodies.rectangle(x,y,width,height,iron_option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("black");
        rect(0,0,this.width,this.height);
        pop();
    }
}