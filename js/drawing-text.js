var newTextBox = $('<input/>',{type:"text",name:"textBox",id:"textBox",value:""});
var textDone = false;
var text = "";
var textFont = "";
var fontType = " Arial";
var pastX, pastY;
class DrawingText extends PaintFunction{
        constructor(contextReal,contextDraft){
            super();
            this.contextReal = contextReal;
            this.contextDraft = contextDraft;
        }

        onMouseDown(coord,event){
            this.contextReal.fillStyle = line_color;
            this.contextDraft.fillStyle = line_color;
            this.origX = coord[0];
            this.origY = coord[1];

            if (newTextBox["0"].value== "") {
                $('div.buttons').append(newTextBox);
                newTextBox.css({
                 position: 'absolute',
                 top: this.origY,
                 left: this.origX,
                 color: line_color,
                 fontSize: font_size,
                 "z-index": '1'
                });
                pastX = newTextBox.attr("left");
                pastY = newTextBox.attr("right");
                text = newTextBox["0"].value;
                textDone=true;
            }
            if (newTextBox["0"].value!="") {
              text = newTextBox["0"].value;
              textFont = newTextBox["0"].style.fontSize;
              newTextBox["0"].value="";
              $('#textBox').remove();
              textDone = false;
            }
            this.contextDraft.font = textFont+fontType;
            this.contextDraft.fillText(text,coord[0],coord[1]);
      }
        onDragging(coord,event){
            this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.contextDraft.beginPath();
            this.contextDraft.font = textFont+fontType;
            this.contextDraft.fillText(text,coord[0],coord[1]);
            this.contextDraft.stroke();
        }

        onMouseMove(){}
        onMouseUp(coord){
          this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
          this.contextReal.beginPath();
          this.contextReal.font = textFont+fontType;
          this.contextReal.fillText(text,coord[0],coord[1]);
          this.contextReal.stroke();
          this.contextReal.closePath();
        }
        onMouseLeave(){}
        onMouseEnter(){}
    }

/*
context.font = "40pt Calibri";
context.fillText("My TEXT!", 20, 20);
*/
