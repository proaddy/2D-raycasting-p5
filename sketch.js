let walls=[];
let ray;
let particle;
let xoff = 0;
let yoff = 1000;

function setup(){
    createCanvas(600, 600);
    for (let i = 0; i< 5; i++){
        const x1 = random(width);
        const x2 = random(width);
        const y1 = random(height);
        const y2 = random(height);
        walls[i]= new Boundary(x1, y1, x2, y2); // a1, b1, a2, b2
    }
    particle = new Particle();
    walls.push(new Boundary(0, 0, width, 0))
    walls.push(new Boundary(0, 0, 0, height))
    walls.push(new Boundary(width, 0, width, height))
    walls.push(new Boundary(0, height, width, height))
}

function draw(){
    background(0);
    for (let wall of walls){
        wall.show();
    }
    // ray.show();
    particle.look(walls);
    // ray.lookAt(mouseX, mouseY);

    // let pt = ray.cast(wall); // return an vector with x and y
    // if(pt) {
    //     fill(255);
    //     ellipse(pt.x, pt.y, 8, 8); // making an ellipse where at the intersection point
    // }
    particle.show();
    particle.update(noise(xoff)*width, noise(yoff)*height);
    xoff += 0.01;
    yoff += 0.01;
}