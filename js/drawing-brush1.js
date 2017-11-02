class DrawingBrush1 extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;
    }

    onMouseDown(coord,event){
        console.log("here");
        this.context.strokeStyle = "rgba(0,0,0,0.01)";
        this.context.lineJoin = "round";
        this.context.lineWidth = 0.5;
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
        this.context.closePath();
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){
      drawImage();
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(1.1*x,1.1*y);
      //  this.context.closePath();
        this.context.stroke();
        this.context.closePath();
    }
}
