var isDrawing, points = [ ];
//opacity = 0.3; // default value when opacity is not modified.

class DrawingSketch2 extends PaintFunction{
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
    }

    onMouseMove(coord,event){
      this.context.globalAlpha = opacity;
      if (!isDrawing) return;

      //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      points.push({ x: event.clientX, y: event.clientY });

      this.context.beginPath();
      this.context.moveTo(points[points.length - 2].x, points[points.length - 2].y);
      this.context.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      this.context.stroke();

      for (var i = 0, len = points.length; i < len; i++) {
        dx = points[i].x - points[points.length-1].x;
        dy = points[i].y - points[points.length-1].y;
        d = dx * dx + dy * dy;

        if (d < 2000 && Math.random() > d / 2000) {
          this.context.beginPath();
        //  this.context.strokeStyle = 'rgba(0,0,0,0.3)';
          this.context.moveTo( points[points.length-1].x + (dx * 0.5), points[points.length-1].y + (dy * 0.5));
          this.context.lineTo( points[points.length-1].x - (dx * 0.5), points[points.length-1].y - (dy * 0.5));
          this.context.stroke();
        }
      }
    }
    onMouseUp(){
      isDrawing = false;
      points.length = 0;
      this.context.globalAlpha = 1;
      this.context.closePath();
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
