function distanceBetween(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  }
function angleBetween(point1, point2) {
    return Math.atan2( point2.x - point1.x, point2.y - point1.y );
}  

class DrawingRedCircles extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;
        this.lastPoint;
    }

    onMouseDown(coord,event){
        this.context.strokeStyle = line_color;
        this.context.lineCap = 'round';
        this.context.lineJoin = "round";
        this.context.fillStyle = fill_color;
        this.context.lineWidth = '1';
        this.context.beginPath();
        this.context.globalAlpha =opacity;

        isDrawing = true;
        this.lastPoint = { x: coord[0], y: coord[1] };

        this.context.closePath();
    }
    onDragging(coord,event){
        if (!isDrawing) return;
        
        let currentPoint = { x: coord[0], y: coord[1] };
        let dist = distanceBetween(this.lastPoint, currentPoint);
        let angle = angleBetween(this.lastPoint, currentPoint);
        
        for (let i = 0; i < dist; i+=5) {
          let x = this.lastPoint.x + (Math.sin(angle) * i) - 25;
          let y = this.lastPoint.y + (Math.cos(angle) * i) - 25;
          this.context.beginPath();
          this.context.arc(x+10, y+10, 20, false, Math.PI * 2, false);
          this.context.closePath();
          this.context.fill();
          this.context.stroke();
        }
        
        this.lastPoint = currentPoint;
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