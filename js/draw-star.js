class DrawingStar extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.context = contextReal;
    }

    onMouseDown(coord,event){
        isDrawing = true;
        this.addRandomPoint(coord);
    }
    onDragging(coord,event){
        if (!isDrawing) return;
        
        this.addRandomPoint(coord);
        
        for (var i = 0; i < points.length; i++) {
          this.drawStar(points[i]);
        }
    }

    onMouseMove(coord,event){
    }
    onMouseUp(coord,event){
        isDrawing = false;
        points.length = 0;
    }
    onMouseLeave(){}
    onMouseEnter(){}

    addRandomPoint(coord) {
        points.push({ 
          x: coord[0], 
          y: coord[1], 
          angle: getRandomInt(0, 180),
          width: getRandomInt(1,5),
          opacity: Math.random(),
          scale: getRandomInt(1, 20) / 10,
          color: ('rgb('+getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(0,255)+')')
        });
    }
    drawStar(options) {
        let length = 15;
        this.context.save();
        this.context.translate(options.x, options.y);
        this.context.beginPath();
        this.context.globalAlpha = options.opacity;
        this.context.rotate(Math.PI / 180 * options.angle);
        this.context.scale(options.scale, options.scale);
        this.context.strokeStyle = options.color;
        this.context.lineWidth = options.width;
        for (var i = 5; i--;) {
          this.context.lineTo(0, length);
          this.context.translate(0, length);
          this.context.rotate((Math.PI * 2 / 10));
          this.context.lineTo(0, -length);
          this.context.translate(0, -length);
          this.context.rotate(-(Math.PI * 6 / 10));
        }
        this.context.lineTo(0, length);
        this.context.closePath();
        this.context.stroke();
        this.context.restore();
      }


}
