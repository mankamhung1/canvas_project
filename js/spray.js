function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}
class Spray extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.context = contextReal;
        this.timeout;
        this.density = 50;
        this.context.lineJoin=this.context.lineCap ='round';
        this.context.lineWidth=10;
    }

    onMouseDown(coord,event){
        this.context.beginPath();
        this.origX=coord[0];
        this.origY=coord[1];
        this.context.lineJoin=this.context.lineCap ='round';
        this.context.lineWidth=10;
        this.context.fillStyle = fill_color;
        isDrawing = true;
        this.context.moveTo(this.origX, this.origY);
        console.log('run');
        
    }
    onDragging(coord,event){
        console.log('running');
        if (isDrawing) {
            for (var i = this.density; i--; ) {console.log('running9');
              var radius = 20;
              var offsetX = getRandomInt(-radius, radius);
              var offsetY = getRandomInt(-radius, radius);
              this.context.fillRect(coord[0]-offsetX , coord[1]-offsetY , 1, 1);
            }
        }
    }

    onMouseMove(coord,event){
    }
    onMouseUp(coord,event){
        isDrawing=false;
    }
    onMouseLeave(){}
    onMouseEnter(){}



}
/*var el = document.getElementById('c');
var ctx = el.getContext('2d');
var clientX, clientY, timeout;
var density = 50;

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

el.onmousedown = function(e) {
  ctx.lineJoin = ctx.lineCap = 'round';
  clientX = e.clientX;
  clientY = e.clientY;
  
  timeout = setTimeout(function draw() {
    for (var i = density; i--; ) {
      var angle = getRandomFloat(0, Math.PI*2);
      var radius = getRandomFloat(0, 20);
      ctx.fillRect(
        clientX + radius * Math.cos(angle),
        clientY + radius * Math.sin(angle), 
        1, 1);
    }
    if (!timeout) return;
    timeout = setTimeout(draw, 50);
  }, 50);
};
el.onmousemove = function(e) {
  clientX = e.clientX;
  clientY = e.clientY;
};
el.onmouseup = function() {
  clearTimeout(timeout);
};*/