var isDrawing, vertices = [ ];
var dx, dy, d;
class ChaosGame extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
        this.state = 'Start';
    }

    onMouseDown(coord,event){
        if(this.state==='Start'){
        this.contextReal.fillStyle = fill_color;
        this.contextDraft.fillStyle = fill_color;
        this.contextDraft.strokeStyle =line_color;
        this.contextReal.strokeStyle =line_color;
        this.contextDraft.lineCap = 'round';
        this.contextDraft.lineJoin = "round";
        this.contextReal.lineCap = 'round';
        this.contextReal.lineJoin = "round";
        this.contextDraft.lineWidth =line_width;
        this.contextReal.lineWidth =line_width;
        this.origX = coord[0];
        this.origY = coord[1];
        console.log(this.origX,this.origY);
        this.state = 'afterFirstClick';

        vertices.push({ x: event.clientX, y: event.clientY });
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        }else if((coord[0]-this.origX)*(coord[0]-this.origX)+(coord[1]-this.origY)*(coord[1]-this.origY)>1001){
  //          this.contextReal.beginPath();
  //          this.contextReal.moveTo(this.origX2,this.origY2);
            this.contextReal.lineTo(coord[0],coord[1]);
            this.contextReal.fill();
            this.contextReal.stroke();
            this.origX2=coord[0];
            this.origY2=coord[1];
            this.state ='intermediate';

            vertices.push({ x: event.clientX, y: event.clientY });
        }else if((coord[0]-this.origX)*(coord[0]-this.origX)+(coord[1]-this.origY)*(coord[1]-this.origY)<1000){
//            this.contextReal.beginPath();
//            this.contextReal.moveTo(this.origX2,this.origY2);
            this.contextReal.lineTo(coord[0],coord[1]);
            this.contextReal.fill();
            this.contextReal.stroke();
            this.contextReal.closePath();
            this.state = 'finishpolygon';
            console.log(vertices);
            drawChaosGame(coord[0],coord[1]); // this coord can be anywhere within the canvas.
        }
    }
    onDragging(coord,event){
    }

    onMouseMove(coord,event){
         if(this.state === 'afterFirstRelease'||this.state ==='intermediate'){
            console.log('step4');
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX2,this.origY2);
            this.contextDraft.lineTo(coord[0],coord[1]);
    //        this.contextReal.lineTo(coord[0],coord[1]);
            this.contextDraft.stroke();
         }
    }
    onMouseUp(coord,event){
        if(this.state ==='afterFirstClick'){
            console.log('step3');
//            this.contextReal.beginPath();
//            this.contextReal.moveTo(this.origX,this.origY);
            this.contextReal.lineTo(coord[0],coord[1]);
            this.contextReal.fill();
            this.contextReal.stroke();
            this.origX2=coord[0];
            this.origY2=coord[1];
            console.log(this.origX2,this.origY2);
            this.state = 'afterFirstRelease';
        }else if(this.state ==='intermediate'){
            console.log('hi');
        }
        else if(this.state ==='finishpolygon'){
            console.log('finish polygon');
            this.contextReal.lineCap = 'butt';
            this.contextReal.lineJoin = "butt";
            this.contextDraft.lineCap = 'butt';
            this.contextDraft.lineJoin = "butt";
            this.state ='Start';
            drawImage();
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}

}

function drawChaosGame(x,y) {

console.log("chaos");
  contextReal.globalAlpha = 0.7;

  contextReal.beginPath();
  for (i=0; i<60000; i++) {
    console.log("loop");
  var randomVertexDirection = getRandomInt(0,vertices.length);
  var dotX = x+(vertices[randomVertexDirection].x-x)*0.50;
  var dotY = y+(vertices[randomVertexDirection].y-y)*0.50;
  contextReal.fillStyle = "black";
  contextReal.fillRect(dotX,dotY,1,1);
  x=dotX;
  y=dotY;
  contextReal.closePath();
  }


}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}