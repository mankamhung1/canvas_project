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
    let bgcolor ;
    let color='#bf4444';
    let line_width = 5;
    let borderwidth = 5;
    let rubwidth;
    let opacity = 1;
    let font_size = "14px";
    let rub_color = "white";
    let cPushArray = new Array();
    let cStep = -1;
    
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
            canvasPic.onload = function () { 
                contextReal.globalAlpha =1;
                contextReal.drawImage(canvasPic, 0, 0); }
        }
    }
    function cRedo() {
        if (cStep < cPushArray.length-1) {
            cStep++;
            var canvasPic = new Image();
            canvasPic.src = cPushArray[cStep];
            canvasPic.onload = function () { 
                contextReal.globalAlpha =1;
                contextReal.drawImage(canvasPic, 0, 0); }
        }
    }
    function desktopMode(){
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

}

    function mobileMode(){
        var hammertime = new Hammer(canvasDraft);
        hammertime.on('drag swipe tap press pan panup pandown', function(ev) {
        //console.log(ev.type);
        });
        /*
            hammertime.on('tap',function(ev){
                let mouseX = ev.center.x - canvasDraft.offsetLeft;
                let mouseY = ev.center.y - canvasDraft.offsetTop;
                currentFunction.onMouseDown([mouseX,mouseY],ev);
                //console.log(mouseX+":"+mouseY + ":"+ev.center.x + ","+ev.center.y);
            })*/
        hammertime.on('panstart',function(ev){
            let mouseX = ev.center.x - canvasDraft.offsetLeft;
            let mouseY = ev.center.y - canvasDraft.offsetTop;
            currentFunction.onMouseDown([mouseX,mouseY],ev);
            dragging = true;
            //console.log(mouseX+":"+mouseY + ":"+ev.center.x + ","+ev.center.y);
        })
        hammertime.on('panmove',function(ev){
            let mouseX = ev.center.x - canvasDraft.offsetLeft;
            let mouseY = ev.center.y - canvasDraft.offsetTop;
            currentFunction.onDragging([mouseX,mouseY],ev);
        // currentFunction.onMouseMove([mouseX,mouseY],ev);
        // console.log("panmove");
        });
        hammertime.on('panend',function(ev){
            let mouseX = ev.center.x - canvasDraft.offsetLeft;
            let mouseY = ev.center.y - canvasDraft.offsetTop;
            currentFunction.onMouseUp([mouseX,mouseY],ev);
        // console.log("panend");
        });
    }
    
    $(document).ready(function(){
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(window).width()<768) {
            mobileMode();
        }
        else if ($(window).width()>767){
            desktopMode();
        }
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
