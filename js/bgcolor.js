class Bgcolor extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(){
        console.log('running');
        this.contextReal.beginPath();
        this.contextReal.fillStyle = bgcolor;
        this.contextReal.strokeStyle = bgcolor;
        this.contextReal.strokeRect(0,0,800,600);
        this.contextReal.fillRect(0,0,800,600);
        this.contextReal.stroke();
    }
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

}