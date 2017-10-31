class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord,event){
        this.contextReal.fillStyle = fill_color;
        this.contextDraft.fillStyle = fill_color;
        this.contextDraft.strokeStyle = border_color;
        this.contextReal.strokeStyle = border_color;
        this.contextDraft.lineWidth = borderwidth;
        this.contextReal.lineWidth = borderwidth;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        let r=Math.sqrt(Math.pow((this.origX-coord[0]),2)+Math.pow((this.origY-coord[1]),2));
        this.contextDraft.arc(this.origX,this.origY,r,0,2*Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke();
    
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        let r=Math.sqrt(Math.pow((this.origX-coord[0]),2)+Math.pow((this.origY-coord[1]),2));
        this.contextReal.arc(this.origX,this.origY,r,0,2*Math.PI);
        this.contextReal.fill();
        this.contextReal.stroke();
        this.contextReal.closePath();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
