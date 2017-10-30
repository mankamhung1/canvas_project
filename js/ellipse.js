class DrawingEllipse extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord,event){
        console.log('running');
        this.contextReal.fillStyle = fill_color;
        this.contextDraft.fillStyle = fill_color;
        this.contextDraft.strokeStyle = boarder_color;
        this.contextReal.strokeStyle = boarder_color;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.beginPath();
        let r=Math.sqrt(Math.pow((this.origX-coord[0]),2)+Math.pow((this.origY-coord[1]),2));
        this.contextDraft.ellipse(this.origX, this.origY, Math.abs(this.origX-coord[0]),Math.abs(this.origY-coord[1]), 0, 0, 2 * Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.beginPath();
        
        this.contextReal.lineWidth = 1;
        let r=Math.sqrt(Math.pow((this.origX-coord[0]),2)+Math.pow((this.origY-coord[1]),2));
        this.contextReal.ellipse(this.origX, this.origY, Math.abs(this.origX-coord[0]),Math.abs(this.origY-coord[1]), 0, 0, 2 * Math.PI);
        this.contextReal.fill();
        this.contextReal.stroke();
        this.contextReal.closePath();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}
