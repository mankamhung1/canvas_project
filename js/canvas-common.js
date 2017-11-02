    let canvasReal = document.getElementById('canvas-real');
    let contextReal = canvasReal.getContext('2d');
    let canvasDraft = document.getElementById('canvas-draft');
    let contextDraft = canvasDraft.getContext('2d');
    let image_target = '.buttons';
    let image = '.resize-image';
    let currentFunction;
    let dragging = false;
    let line_color = '#bf4444';
    let fill_color ='#e8ffea';
    let border_color = "#F6E5E5";
    let bgcolor ='ff0000';
    let color='#bf4444';
    let line_width = 5;
    let borderwidth = 5;
    let rubwidth;
    let font_size = "14px";
    let rub_color = "white";
    var cPushArray = new Array();
    var cStep = -1;

    // ctx = document.getElementById('myCanvas').getContext("2d");
    function drawImage() {
        var image = new Image();
        contextReal.drawImage(image, 0, 0, canvasReal.width, canvasReal.height);
        cPush();
    }
    function cPush() {
        cStep++;
        if (cStep < cPushArray.length) { cPushArray.length = cStep; }
        cPushArray.push(canvasReal.toDataURL());
    }
    function cUndo() {
        if (cStep > 0) {
            cStep--;
            var canvasPic = new Image();
            canvasPic.src = cPushArray[cStep];
            canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
        }
    }
    function cRedo() {
        if (cStep < cPushArray.length-1) {
            cStep++;
            var canvasPic = new Image();
            canvasPic.src = cPushArray[cStep];
            canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
        }
    }

    $('#canvas-draft').mousedown(function(e){
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
        currentFunction.onMouseDown([mouseX,mouseY],e);
        dragging = true;
    });
    $('#canvas-draft').mousemove(function(e){
        let mouseX = e.pageX - this.offsetLeft;
        let mouseY = e.pageY - this.offsetTop;
        if(dragging){
            currentFunction.onDragging([mouseX,mouseY],e);
        }
        currentFunction.onMouseMove([mouseX,mouseY],e);
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
