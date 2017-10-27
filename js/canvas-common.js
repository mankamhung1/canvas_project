    let canvasReal = document.getElementById('canvas-real');
    let contextReal = canvasReal.getContext('2d');
    let canvasDraft = document.getElementById('canvas-draft');
    let contextDraft = canvasDraft.getContext('2d');
    let image_target = '.buttons';
    let image = '.resize-image';
    let currentFunction;
    let dragging = false;
    let line_color = '#ffae23';
    let fill_color ='#e8ffea';
    let boarder_color = "#F6E5E5";
    let color='#ff11ff';
    let font_size = "14px";

    $('#canvas-draft').mousedown(function(e){
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
        currentFunction.onMouseDown([mouseX,mouseY],e);
        dragging = true;
    });
    $('#canvas-draft').mousemove(function(e){
        if(dragging){
            let mouseX = e.pageX - this.offsetLeft;
            let mouseY = e.pageY - this.offsetTop;
            currentFunction.onDragging([mouseX,mouseY],e);
        }
        currentFunction.onMouseMove(e,this);
    });
    $('#canvas-draft').mouseup(function(e){
        dragging = false;
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
        currentFunction.onMouseUp([mouseX,mouseY],e);
    });
    $('#canvas-draft').mouseleave(function(e){
        dragging = false;
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
        currentFunction.onMouseLeave([mouseX,mouseY],e);
    });

    $('#canvas-draft').mouseenter(function(e){
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
        currentFunction.onMouseEnter([mouseX,mouseY],e);
    });

    class PaintFunction{
        constructor(){
            this.color = color;
        }
        onMouseDown(){}
        onDragging(){}
        onMouseMove(){}
        onMouseUp(){}
        onMouseLeave(){}
        onMouseEnter(){}
    }
