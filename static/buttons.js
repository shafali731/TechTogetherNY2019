var button_pressed=false;
var counter= 0;
var dvd_but = document.getElementById("start");
var first_game = [
  [1,2,3,4,5,6,7,8,9,10],
  [0,1,2,3,4,5,6,7,8,9],
  [0,2,3,3,3,3,4,4,5,6],
  [8,1,2,3,4,5,6,7,8,9]
]
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
   function clr_canvas(evt) {
        context.clearRect(0, 0, c.width, c.height);

  }

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
function rects(){
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
   // return false;
}

dvd_but.addEventListener('click', function(evt){
  while(counter <5){
    context.clearRect(0,0,960,600);
    console.log("work")
    // while (!button_pressed){
      console.log("i");
    rects();
    console.log("uihiu");
   // }
  button_pressed = false;
    console.log("hfei");
    //context.clearRect(0,0,960,600);
    counter ++;
  }
  //if(counter >=5){
  //  context.clearRect(0,0,960,600);}
} , false)


//The rectangle should have x,y,width,height properties

//Binding the click event on the canvas
canvas.addEventListener('click', function(evt) {
    // Playbutton(200,200,200,200,red,red);
  //  makeRects();
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
    button_pressed = true;

}, false);
