function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


class DrawingRandomCircles extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;
    }

    onMouseDown(coord,event){
        this.context.strokeStyle = line_color;
        this.context.lineCap = 'round';
        this.context.lineJoin = "round";
        this.context.fillStyle = fill_color;
        this.context.lineWidth = line_width;
        this.context.beginPath();

        isDrawing = true;
        points.push({ 
          x: coord[0], 
          y: coord[1],
          radius: getRandomInt(10, 30),
          opacity: Math.random()
        });

        this.context.closePath();
    }
    onDragging(coord,event){
        if (!isDrawing) return;
        points.push({ 
          x: coord[0], 
          y: coord[1],
          radius: getRandomInt(5, 20),
          opacity: Math.random()
        });
        for (var i = 0; i < points.length; i++) {
          this.context.beginPath();
          this.context.globalAlpha = (points[i].opacity);
          console.log('opacity ='+points[i].opacity);
          this.context.arc(
            points[i].x, points[i].y, points[i].radius, 
            false, Math.PI * 2, false);
            console.log('radius'+points[i].radius);
          this.context.fill();
        }
      }
    onMouseMove(coord, event){

    }
    onMouseUp(){
        isDrawing = false;
        points.length = 0;
        this.context.globalAlpha ='1';
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
/*function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var el = document.getElementById('c');
  var ctx = el.getContext('2d');
  
  ctx.lineJoin = ctx.lineCap = 'round';
  ctx.fillStyle = 'red';
  
  var isDrawing, points = [ ], radius = 15;
  
  el.onmousedown = function(e) {
    isDrawing = true;
    points.push({ 
      x: e.clientX, 
      y: e.clientY,
      radius: getRandomInt(10, 30),
      opacity: Math.random()
    });
  };
  el.onmousemove = function(e) {
    if (!isDrawing) return;
    
    points.push({ 
      x: e.clientX, 
      y: e.clientY,
      radius: getRandomInt(5, 20),
      opacity: Math.random()
    });
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (var i = 0; i < points.length; i++) {
      ctx.beginPath();
      ctx.globalAlpha = points[i].opacity;
      ctx.arc(
        points[i].x, points[i].y, points[i].radius, 
        false, Math.PI * 2, false);
      ctx.fill();
    }
  };
  el.onmouseup = function() {
    isDrawing = false;
    points.length = 0;
  };*/
