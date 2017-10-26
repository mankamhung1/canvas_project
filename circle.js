class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord,event){
        this.contextReal.fillStyle = "#f44";
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.fillStyle = "#f44";
        let r=Math.sqrt(Math.pow((this.origX-coord[0]),2)+Math.pow((this.origY-coord[1]),2));
        this.contextDraft.arc(this.origX,this.origY,r,0,2*Math.PI);
    }

    onMouseMove(){}
    onMouseUp(coord){
        let r=Math.sqrt(Math.pow((this.origX-coord[0]),2)+Math.pow((this.origY-coord[1]),2));
        this.contextReal.beginPath();
        this.contextReal.arc(this.origX,this.origY,r,0,2*Math.PI);
        contextReal.stroke();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
