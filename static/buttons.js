//
// var c = document.getElementById('playground');
// var context = c.getContext("2d");
// var cleS = document.getElementById("clear");
// var drawn = 0;
// var warningTimeout;
// var warningBox = document.createElement("div");
// warningBox.className = "warning";
// var lastX=false
// var lastY=false

// context.beginPath();
//
// function displayWarning(msg) { //display the warning and make sure it only stays for a while
//   warningBox.innerHTML = msg;
//
//   if (document.body.contains(warningBox)) {
//     window.clearTimeout(warningTimeout);
//   } else {
//     // insert warningBox after the clear button
//     cleS.parentNode.insertBefore(warningBox, cleS.nextSibling);
//   }
//
//   warningTimeout = window.setTimeout(function() {
//       warningBox.parentNode.removeChild(warningBox);
//       warningTimeout = -1;
//     }, 2000);
// }
//
//
// var clear = function clr_canvas(evt) {
//     if (drawn !=0){ //only if there was something drawn
//       context.clearRect(0, 0, c.width, c.height);
//       drawn = 0;
//     }
//     else{
//       evt.preventDefault(); //prevents clear from happening unless something was drawn
//       displayWarning( //displays this warning if the canvas was empty originally
//               "You have to draw something to clear the canvas!"
//             );    }
// }

// function Playbutton(top, left, width, height, lWidth, fillColor, lineColor) {

  // }


  var rect1 = {
      x:20*3.2,
      y:100*4,
      width:20*3.2,
      height:10*4
  };
  var rect2 = {
      x:60*3.2,
      y:100*4,
      width:20*3.2,
      height:10*4
  };
  var rect3 = {
      x:100*3.2,
      y:100*4,
      width:20*3.2,
      height:10*4
  };
  var rect4 = {
      x:140*3.2,
      y:100*4,
      width:20*3.2,
      height:10*4
  };
  // console.log(rect.x);
//Function to get the mouse position
function getMousePos(canvas, event) {
    var rect1 = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect1.left,
        y: event.clientY - rect1.top
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
  console.log("pos.x :",pos.x);
  console.log("rect.x :", rect.x);

  console.log(rect.x+rect.width);
  console.log(pos.y);
  console.log(rect.y+rect.height);



    return pos.x> rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

var canvas = document.getElementById('playground');
var context = canvas.getContext('2d');
//The rectangle should have x,y,width,height properties

context.beginPath();
context.rect(20, 100, 20, 10);
context.fillStyle = '#FF0000';
// context.fillStyle = 'rgba(225,225,225,10)';
context.fillRect(20,100,20,10);
//context.fill();
context.lineWidth = 1;
context.strokeStyle = '#FF0000';
context.stroke();
context.closePath();
context.font = '8pt Kremlin Pro Web';
context.fillStyle = '#000000';
 // context.fillText('Start', 5, 5);
 context.textAlign="center";
context.textBaseline = "middle";
 context.fillText("1",30,105);
//rect2
 context.beginPath();
 context.rect(60, 100, 20, 10);
 context.fillStyle = '#FF0000';
 // context.fillStyle = 'rgba(225,225,225,10)';
 context.fillRect(60,100,20,10);
 //context.fill();
 context.lineWidth = 1;
 context.strokeStyle = '#FF0000';
 context.stroke();
 context.closePath();
 context.font = '8pt Kremlin Pro Web';
 context.fillStyle = '#000000';
  // context.fillText('Start', 5, 5);
  context.textAlign="center";
 context.textBaseline = "middle";
  context.fillText("2",70,105);
//rect3
 context.beginPath();
 context.rect(100, 100, 20, 10);
 context.fillStyle = '#FF0000';
 // context.fillStyle = 'rgba(225,225,225,10)';
 context.fillRect(100,100,20,10);
 //context.fill();
 context.lineWidth = 1;
 context.strokeStyle = '#FF0000';
 context.stroke();
 context.closePath();
 context.font = '8pt Kremlin Pro Web';
 context.fillStyle = '#000000';
  // context.fillText('Start', 5, 5);
  context.textAlign="center";
 context.textBaseline = "middle";
  context.fillText("3",110,105);
//rect4
 context.beginPath();
 context.rect(140, 100, 20, 10);
 context.fillStyle = '#FF0000';
 // context.fillStyle = 'rgba(225,225,225,10)';
 context.fillRect(140,100,20,10);
 //context.fill();
 context.lineWidth = 1;
 context.strokeStyle = '#FF0000';
 context.stroke();
 context.closePath();
 context.font = '8pt Kremlin Pro Web';
 context.fillStyle = '#000000';
  // context.fillText('Start', 5, 5);
  context.textAlign="center";
 context.textBaseline = "middle";
  context.fillText("4",150,105);

//Binding the click event on the canvas
canvas.addEventListener('click', function(evt) {
    // Playbutton(200,200,200,200,red,red);
    var mousePos = getMousePos(canvas, evt);

    if (isInside(mousePos,rect1)) {
        alert('clicked inside rect1');
    }
    else if (isInside(mousePos,rect2)){
      alert('clicked inside rect2');
    }
    else if (isInside(mousePos,rect3)){
      alert('clicked inside rect3');
    }
    else if (isInside(mousePos,rect4)){
      alert('clicked inside rect4');
    }
    else{
        alert('clicked outside rect');
    }

}, false);
