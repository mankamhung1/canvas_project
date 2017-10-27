class DrawingRectangle extends PaintFunction{
        constructor(contextReal,contextDraft){
            super();
            this.contextReal = contextReal;
            this.contextDraft = contextDraft;
        }

        onMouseDown(coord,event){
<<<<<<< HEAD
            this.contextReal.beginPath();
            this.contextDraft.beginPath();
            this.contextReal.fillStyle = fill_color;
=======
            
>>>>>>> a2a4e9d8f8b8ded038bd661f7a6e810d2f414310
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
<<<<<<< HEAD
=======
            this.contextReal.fillStyle = fill_color;
            this.contextReal.strokeStyle = boarder_color;
>>>>>>> a2a4e9d8f8b8ded038bd661f7a6e810d2f414310
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextReal.strokeRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
            this.contextReal.stroke();
            this.contextReal.closePath();
<<<<<<< HEAD
            this.contextDraft.closePath();
=======
>>>>>>> a2a4e9d8f8b8ded038bd661f7a6e810d2f414310
        }
        onMouseLeave(){}
        onMouseEnter(){}
    }
