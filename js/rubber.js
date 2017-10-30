class Rubber extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;
        this.context.rubWidth = 5;
    }

    onMouseDown(coord,event){
        this.context.strokeStyle = rub_color;
        this.context.lineJoin = "round";
        this.context.lineCap = 'round';
        this.context.lineWidth = rubwidth;
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){
        this.context.lineWidth = 5;
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
      //  this.context.closePath();
        this.context.stroke();
        this.context.closePath();
    }
}
