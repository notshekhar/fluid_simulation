class Fluid {
    constructor(diff, visc, w, h, cw, ch) {
        this.diff = diff //diffusion rate of fluid
        this.visc = visc //viscocity of fluid
        this.cell_width = cw
        this.cell_height = ch
        this.grid = []
        for (let i = 0; i < w/this.cell_width; i++) {
            this.grid[i] = []
            for (let j = 0; j < h/this.cell_height; j++) {
                this.grid[i][j] = new Cell(
                    i * this.cell_height,
                    j * this.cell_height
                )
            }
        }
    }
    show() {
        for (let i = 0; i < w/this.cell_width; i++) {
            for (let j = 0; j < h/this.cell_height; j++) {
                this.grid[i][j].show()
            }
        }
    }
    addForces(f){
        
    }
    diffuse(){

    }
    move(){
        for (let i = 0; i < w / this.cell_width; i++) {
            for (let j = 0; j < h / this.cell_height; j++) {
                this.grid[i][j].move()
            }
        }
    }
}
