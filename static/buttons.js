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


  var rect = {
      x:0,
      y:0,
      width:20*3.2,
      height:10*4
  };
  // console.log(rect.x);
//Function to get the mouse position
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
  console.log(pos.x);

  console.log(rect.x+rect.width);
  console.log(pos.y);
  console.log(rect.y+rect.height);



    return pos.x> rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

var canvas = document.getElementById('playground');
var context = canvas.getContext('2d');
//The rectangle should have x,y,width,height properties

context.beginPath();
context.rect(0, 0, 20, 10);
context.fillStyle = '#FF0000';
// context.fillStyle = 'rgba(225,225,225,10)';
context.fillRect(0,0,20,10);
//context.fill();
context.lineWidth = 1;
context.strokeStyle = '#FF0000';
context.stroke();
context.closePath();
context.font = '40pt Kremlin Pro Web';
context.fillStyle = '#FF0000';
// context.fillText('Start', 345, 415);
// context.textAlign="center";
// context.textBaseline = "middle";
// context.fillText("Attack!",250+(200/2),350+(100/2));

//Binding the click event on the canvas
canvas.addEventListener('click', function(evt) {
    // Playbutton(200,200,200,200,red,red);
    var mousePos = getMousePos(canvas, evt);

    if (isInside(mousePos,rect)) {
        alert('clicked inside rect');
    }else{
        alert('clicked outside rect');
    }
}, false);
