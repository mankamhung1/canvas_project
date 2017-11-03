class Bgcolor extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(){
        this.contextDraft.globalAlpha = 1;
        this.contextReal.globalAlpha =1;
        this.contextReal.beginPath();
        this.contextReal.fillStyle = bgcolor;
        this.contextReal.strokeStyle = bgcolor;
        this.contextReal.strokeRect(0,0,canvasReal.width,canvasReal.height);
        this.contextReal.fillRect(0,0,canvasReal.width,canvasReal.height);
        this.contextReal.stroke();
        drawImage();
    }
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

}