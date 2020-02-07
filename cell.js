class Cell{
    constructor(x, y){
        this.pos = vector(x, y) //position
        this.dye = 0 //Denisity of cell
        this.scale = 0
        this.vel = randomVector()//velocity
        this.force = vector()
    }
    change_vel(new_vel){
        this.vel = new_vel
    }
    show(){
        line(this.pos.x, this.pos.y, this.pos.x+this.vel.x, this.pos.y+this.vel.y)
    }
    add_force(x, y){
        
    }
    move(){
        // this.scale = Math.random()
        // let new_vel = vector(this.vel.x*this.scale, this.vel.y*this.scale)
        // this.change_vel(new_vel)
    }

}