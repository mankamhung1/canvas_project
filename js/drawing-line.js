class DrawingLine extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;
    }

    onMouseDown(coord,event){
        this.context.globalAlpha =opacity;
        this.context.strokeStyle = line_color;
        this.context.lineCap = 'round';
        this.context.lineJoin = "round";
        this.context.lineWidth = line_width;
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
        this.context.globalAlpha =opacity;
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.stroke();
        this.context.closePath();
    }
}
