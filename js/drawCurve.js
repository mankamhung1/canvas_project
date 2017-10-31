class DrawingCurve extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
        this.state = 'beforeClick';
    }

    onMouseDown(coord,event){
        if(this.state==='beforeClick'){
        this.contextDraft.strokeStyle =line_color;
        this.contextReal.strokeStyle =line_color;
        this.contextReal.lineCap = 'round';
        this.contextReal.lineJoin = "round";
        this.contextDraft.lineCap = 'round';
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth =line_width;
        this.contextReal.lineWidth =line_width;
        this.origX = coord[0];
        this.origY = coord[1];
        console.log(this.origX,this.origY);
        this.state = 'afterFirstClick';
        }else if(this.state === 'afterFirstRelease'){
            console.log('step5');
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX,this.origY);
            this.contextReal.quadraticCurveTo(coord[0],coord[1],this.origX2,this.origY2);
            this.contextReal.stroke();
            this.contextDraft.closePath();
            this.contextReal.lineWidth=5;
            this.contextDraft.lineWidth=5;
            this.contextReal.closePath();
            this.state = 'finishcurve';
        }
    }
    onDragging(coord,event){
        if(this.state === 'afterFirstClick'){
            console.log('step2');
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX,this.origY);
            this.contextDraft.lineTo(coord[0],coord[1]);
            this.contextDraft.stroke();
            this.contextDraft.closePath();
        }
    }

    onMouseMove(coord,event){
         if(this.state === 'afterFirstRelease'){
            console.log('step4');
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX,this.origY);
            this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.origX2,this.origY2);
            console.log(this.origX,this.origY,this.origX2,this.origY2);
            this.contextDraft.stroke();
            this.contextDraft.closePath();
         }
    }
    onMouseUp(coord,event){
        if(this.state ==='afterFirstClick'){
            console.log('step3');
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX,this.origY);
            this.contextDraft.lineTo(coord[0],coord[1]);
            this.contextDraft.stroke();
            this.contextDraft.closePath();
            this.origX2=coord[0];
            this.origY2=coord[1];
            console.log(this.origX2,this.origY2);
            this.state = 'afterFirstRelease';
        }else if(this.state ==='finishcurve'){
            console.log('finish curve');
            this.state ='beforeClick';
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}

}
