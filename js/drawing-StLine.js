class DrawingStLine extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
    }

    onMouseDown(coord,event){
        console.log('step1');
        this.contextDraft.strokeStyle =line_color;
        this.contextReal.strokeStyle =line_color;
        this.contextDraft.lineCap = 'round';
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth =line_width;
        this.contextReal.lineWidth =line_width;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        console.log('step2');
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }

    onMouseMove(){}
    onMouseUp(coord,event){
        console.log('step3');
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.stroke();
        
        this.contextDraft.closePath();
        this.contextReal.lineWidth=5;
        this.contextDraft.line_width=5;
        this.contextReal.closePath();
    }
    onMouseLeave(){}
    onMouseEnter(){}

}
