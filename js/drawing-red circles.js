var isDrawing, points = [ ];
radius = 15;

class DrawingRedCircles extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;
    }

    onMouseDown(coord,event){
        this.context.strokeStyle = line_color;
        this.context.lineCap = 'round';
        this.context.lineJoin = "round";
        this.context.fillStyle = 'red';
        this.context.lineWidth = line_width;
        this.context.beginPath();

        points = [ ];
        isDrawing = true;
        points.push({ x: event.clientX, y: event.clientY });

        this.context.closePath();
    }
    onDragging(coord,event){
       // this.draw(coord[0],coord[1]);
       if (!isDrawing) return;
       
       points.push({ x: event.clientX, y: event.clientY });
      // this.clearRect(0, 0, this.context.width, this.context.height);
       for (var i = 0; i < points.length; i++) {
         this.context.beginPath();
         this.arc(points[i].x, points[i].y, radius, false, Math.PI * 2, false);
         this.context.fill();
         this.context.stroke();
    }
    }
    onMouseMove(coord, event){

    }
    onMouseUp(){
        isDrawing = false;
        points.length = 0;
    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.stroke();
        this.context.closePath();
    }
}
