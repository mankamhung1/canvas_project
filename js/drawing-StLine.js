class DrawingStLine extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextDraft = contextDraft;
        this.contextReal = contextReal;
    }

    onMouseDown(coord,event){
        this.contextDraft.globalAlpha = opacity;
        this.contextReal.globalAlpha =opacity;
        this.contextDraft.setLineDash([]);
        this.contextReal.setLineDash([]);
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
        this.contextDraft.moveTo(this.origX,this.origY);
        this.contextDraft.lineTo(coord[0],coord[1]);
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }

    onMouseMove(){}
    onMouseUp(coord,event){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX,this.origY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.stroke();
        this.contextReal.closePath();
        drawImage();
    }
    onMouseLeave(){}
    onMouseEnter(){}

}
