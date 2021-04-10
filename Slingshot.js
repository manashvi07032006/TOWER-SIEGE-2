class SlingShot{
    constructor(body, point){
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.02,
            length: 5
        }
		this.bodyA = body;
        this.pointB = point;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
		this.sling.bodyA=body;
	}
    fly(){
        this.sling.bodyA = null;
    }

    display(){
		if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //strokeWeight(10);
			line(pointA.x, pointA.y, pointB.x, pointB.y);
		}
    }
    
}