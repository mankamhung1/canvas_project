class DrawingCurve extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
        
    }

    onMouseDown(coord,event){
        if(state==='beforeClick'){
        this.contextDraft.strokeStyle =line_color;
        this.contextReal.strokeStyle =line_color;
        this.contextDraft.lineCap = 'round';
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth =line_width;
        this.contextReal.lineWidth =line_width;
        this.origX = coord[0];
        this.origY = coord[1];
        console.log(this.origX,this.origY);
        state = 'afterFirstClick';
        }else if(state === 'afterFirstRelease'){
            console.log('step5');
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX,this.origY);
            this.contextReal.quadraticCurveTo(coord[0],coord[1],this.origX2,this.origY2);
            this.contextReal.stroke();
            this.contextDraft.closePath();
            this.contextReal.lineWidth=5;
            this.contextDraft.lineWidth=5;
            this.contextReal.closePath();
            state = 'finishcurve';
        }
    }
    onDragging(coord,event){
        if(state === 'afterFirstClick'){
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
         if(state === 'afterFirstRelease'){
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
        if(state ==='afterFirstClick'){
            console.log('step3');
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX,this.origY);
            this.contextDraft.lineTo(coord[0],coord[1]);
            this.contextDraft.stroke();
            this.contextDraft.closePath();
            this.origX2=coord[0];
            this.origY2=coord[1];
            console.log(this.origX2,this.origY2);
            state = 'afterFirstRelease';
        }else if(state ==='finishcurve'){
            console.log('finish curve');
            state ='beforeClick';
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}

}
