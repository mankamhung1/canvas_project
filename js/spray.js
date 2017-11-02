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
