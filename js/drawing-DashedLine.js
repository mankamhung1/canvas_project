class DrawingDashedLine extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
    }

    onMouseDown(coord,event){
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
    }
    onDragging(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.setLineDash([14,15]);
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }

    onMouseMove(){}
    onMouseUp(coord,event){
        this.contextReal.beginPath();
        this.contextDraft.setLineDash([14,15]);
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
