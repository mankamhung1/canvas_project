var isDrawing, points = [ ];
var dx, dy, d;
opacity = 0.3; // default value when opacity is not modified.

class DrawingSketch1 extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;
    }

    onMouseDown(coord,event){
        this.context.strokeStyle = line_color;
        this.context.lineJoin = "round";
        this.context.lineCap = "round";
        this.context.lineWidth = 1;
        this.context.beginPath();

        points = [ ];
        isDrawing = true;
        points.push({ x: event.clientX, y: event.clientY });

        this.context.closePath();
    }
    onDragging(coord,event){
        //this.draw(coord[0],coord[1]);
        if (!isDrawing) return;

        //this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        points.push({ x: event.clientX, y: event.clientY });

        this.context.beginPath();
        this.context.moveTo(points[points.length - 2].x, points[points.length - 2].y);
        this.context.lineTo(points[points.length - 1].x, points[points.length - 1].y);
        this.context.stroke();

        for (var i = 0, len = points.length; i < len; i++) {
          var dx = points[i].x - points[points.length-1].x;
          var dy = points[i].y - points[points.length-1].y;
          var d = dx * dx + dy * dy;

          if (d < 1000) {
            this.context.beginPath();
          //  this.context.strokeStyle = 'rgba(0,0,0,0.3)';
            this.context.globalAlpha = opacity;
            this.context.moveTo( points[points.length-1].x + (dx * 0.2), points[points.length-1].y + (dy * 0.2));
            this.context.lineTo( points[i].x - (dx * 0.2), points[i].y - (dy * 0.2));
            this.context.stroke();
          }
        }
    }

    onMouseMove(coord,event){

    }
    onMouseUp(){
      isDrawing = false;
      points.length = 0;
      this.context.globalAlpha = 1;
      drawImage();
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
