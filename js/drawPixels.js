class DrawingRandomPixels extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;
    }

    onMouseDown(coord,event){
        isDrawing = true;
    }
    onDragging(coord,event){
        if (!isDrawing) return;
        for (let i = -10; i < 10; i+= 4) {
            for (let j = -10; j < 10; j+= 4) {
              if (Math.random() > 0.5) {
                this.context.fillStyle = ['red', 'orange', 'yellow', 'green', 
                'light-blue', 'blue', 'purple'][getRandomInt(0,6)];
                this.context.fillRect(coord[0]+i, coord[1]+j, 4, 4);
              }
            }
        }
      }
    onMouseMove(coord, event){

    }
    onMouseUp(){
        isDrawing = false;
        drawImage();
    }
    onMouseLeave(){}
    onMouseEnter(){}

    
}
