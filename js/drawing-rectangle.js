class DrawingRectangle extends PaintFunction{
        constructor(contextReal,contextDraft){
            super();
            this.contextReal = contextReal;
            this.contextDraft = contextDraft;
        }

        onMouseDown(coord,event){
            
            this.contextDraft.fillStyle = fill_color;
            this.contextDraft.strokeStyle = boarder_color;
            
            this.origX = coord[0];
            this.origY = coord[1];
            this.contextReal.beginPath();
        }
        onDragging(coord,event){
            
            
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            this.contextDraft.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            this.contextDraft.stroke();
        }

        onMouseMove(){}
        onMouseUp(coord){
            this.contextReal.fillStyle = fill_color;
            this.contextReal.strokeStyle = boarder_color;
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            this.contextReal.stroke();
            this.contextReal.closePath();
        }
        onMouseLeave(){}
        onMouseEnter(){}
    }
