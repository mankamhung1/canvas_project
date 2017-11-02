class DrawingRectangle extends PaintFunction{
        constructor(contextReal,contextDraft){
            super();
            this.contextReal = contextReal;
            this.contextDraft = contextDraft;
        }
        onMouseDown(coord,event){
            this.contextReal.beginPath();
            this.contextDraft.beginPath();
            this.contextReal.fillStyle = fill_color;
            this.contextDraft.fillStyle = fill_color;
            this.contextDraft.strokeStyle = border_color;
            this.contextReal.strokeStyle = border_color;
            this.contextDraft.lineWidth = borderwidth;
            this.contextReal.lineWidth = borderwidth;
            this.contextReal.lineCap = 'square';
            this.contextReal.lineJoin = "square";
            this.contextDraft.lineCap = 'square';
            this.contextDraft.lineJoin = "square";
            this.origX = coord[0];
            this.origY = coord[1];
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
            this.contextReal.strokeStyle = border_color;
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            this.contextReal.stroke();
            this.contextReal.closePath();
            this.contextDraft.closePath();
            drawImage();
        }
        onMouseLeave(){}
        onMouseEnter(){}
    }
