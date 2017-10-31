class Bgcolor extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(){
        this.contextDraft.beginPath();
        this.contextDraft.fillStyle = bgcolor;
        this.contextDraft.strokeStyle = bgcolor;
        this.contextDraft.strokeRect(0,0,canvasReal.width,canvasReal.height);
        this.contextDraft.fillRect(0,0,canvasReal.width,canvasReal.height);
        this.contextDraft.stroke();
    }
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

}
