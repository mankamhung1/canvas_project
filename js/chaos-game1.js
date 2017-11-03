var isDrawing, vertices = [ ];
var dx, dy, d;
class ChaosGame1 extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
        this.state = 'Start';
        this.points =[];
    }

    onMouseDown(coord,event){
        if(this.state==='Start'){
            this.contextDraft.globalAlpha = opacity;
            this.contextReal.globalAlpha =opacity;
            this.contextReal.fillStyle = fill_color;
            this.contextDraft.fillStyle = fill_color;
            this.contextDraft.strokeStyle =border_color;
            this.contextReal.strokeStyle =border_color;
            this.contextDraft.lineCap = 'round';
            this.contextDraft.lineJoin = "round";
            this.contextReal.lineCap = 'round';
            this.contextReal.lineJoin = "round";
            this.contextDraft.lineWidth =borderwidth;
            this.contextReal.lineWidth =borderwidth;
            this.points.push({x: coord[0],y: coord[1]});
            this.origX = coord[0];
            this.origY = coord[1];
            this.state = 'afterFirstClick';

            vertices.push({ x: event.clientX, y: event.clientY });            
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX,this.origY);
        }else if((coord[0]-this.origX)*(coord[0]-this.origX)+(coord[1]-this.origY)*(coord[1]-this.origY)>1001){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.points.push( {x: coord[0],y: coord[1]});
            vertices.push({ x: event.clientX, y: event.clientY });                        
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.points[0].x,this.points[0].y);
            for(let i=1;i<this.points.length;i++){
            this.contextDraft.lineTo(this.points[i].x,this.points[i].y);
            }
            this.contextDraft.lineTo(coord[0],coord[1]);
            //this.contextDraft.closePath();
            this.contextDraft.fill();
            this.contextDraft.stroke();
            this.state ='intermediate';
        }else if((coord[0]-this.origX)*(coord[0]-this.origX)+(coord[1]-this.origY)*(coord[1]-this.origY)<1000){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.points[0].x,this.points[0].y);
            for(let i=1;i<this.points.length;i++){
            this.contextReal.lineTo(this.points[i].x,this.points[i].y);
            }
            this.contextReal.lineTo(coord[0],coord[1]);
            this.contextReal.fill();
            this.contextReal.stroke();
            //this.contextReal.closePath();
            drawChaosGame(this.origX,this.origY); // this coord can be anywhere within the canvas.            
            this.state = 'finishpolygon';
<<<<<<< HEAD
            vertices =[ ];
=======
            console.log(vertices);
            drawChaosGame(this.origX,this.origY); // this coord can be anywhere within the canvas.
            vertices = [ ];
>>>>>>> 587e836ea78129195ae53d8ab168e675bff179d2
        }
    }
    onDragging(coord,event){
        if(this.state === 'afterFirstClick'){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX,this.origY);
            this.contextDraft.lineTo(coord[0],coord[1]);
            this.contextDraft.fill('nonzero');
            this.contextDraft.stroke();
            this.contextDraft.closePath();
        }

    }

    onMouseMove(coord,event){
         if(this.state === 'afterFirstRelease'||this.state ==='intermediate'){

            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.points[0].x,this.points[0].y);
            for(let i=1;i<this.points.length;i++){
            this.contextDraft.lineTo(this.points[i].x,this.points[i].y);
            }
            this.contextDraft.lineTo(coord[0],coord[1]);
            //this.contextDraft.closePath();
            this.contextDraft.fill();
            this.contextDraft.stroke();
        }
    }
    onMouseUp(coord,event){
        if(this.state ==='afterFirstClick'){
            this.contextReal.lineTo(coord[0],coord[1]);
            this.contextReal.stroke();
            this.origX2=coord[0];
            this.origY2=coord[1];
            this.state='afterFirstRelease';
            this.points.push({x: coord[0],y: coord[1]});
            vertices.push({ x: event.clientX, y: event.clientY });                        
        }else if(this.state ==='intermediate'){
        }
        else if(this.state ==='finishpolygon'){
            this.contextReal.lineCap = 'butt';
            this.contextReal.lineJoin = "butt";
            this.contextDraft.lineCap = 'butt';
            this.contextDraft.lineJoin = "butt";
            this.state ='Start';
            drawImage();
            this.points.length=0;
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}

}

function drawChaosGame(x,y) {
//  contextReal.globalAlpha = 0.7;
  contextReal.beginPath();
  for (i=0; i<60000; i++) {
    console.log("loop");
  var randomVertexDirection = getRandomInt2(0,vertices.length);
  var dotX = x+(vertices[randomVertexDirection].x-x)*0.50;
  var dotY = y+(vertices[randomVertexDirection].y-y)*0.50;
  contextReal.fillStyle = "rgba(0,0,0,0.7)";
  contextReal.fillRect(dotX,dotY,1,1);
  x=dotX;
  y=dotY;
  contextReal.closePath();
  }
}

function getRandomInt2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
