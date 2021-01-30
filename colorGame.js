var numSqu = 6;
var color = [];
var mode = document.getElementsByClassName("mode");
var que = document.getElementById("color-display");
var reset = document.getElementById("reset");
var square = document.getElementsByClassName("square");
var queHex;
var modeButtons = document.querySelectorAll(".mode");



function startGame(){
   init();
  // modeSelected();
  document.getElementById('reset').innerHTML= 'Reset';
} 

function init(){
  document.getElementById('h1Color').style.backgroundColor =  '#2c8e99';
  color.length = numSqu;
  color = squareColored(numSqu);
  for(let i=0; i<numSqu; i++){  
    document.getElementById(i+1).style.backgroundColor = color[i];
  }
  
   queHex =  color[Math.floor(Math.random() * color.length)];
  
  que.innerHTML = hexToRGB(queHex);
  document.getElementById("message").innerHTML = '';

}


function squareColored(num) {
  var arr= [];
  let clr = '';
  for(let i=0; i<num; i++){
    clr = getRandomColor();
    arr.push(clr);
    document.getElementById(i+1).style.backgroundColor = clr;
  }
  return arr;
}



function hexToRGB(h) {
  let r = 0, g = 0, b = 0;

  // 3 digits
  if (h.length == 4) {
    r = "0x" + h[1] + h[1];
    g = "0x" + h[2] + h[2];
    b = "0x" + h[3] + h[3];

  // 6 digits
  } else if (h.length == 7) {
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
   }
  
  return "rgb("+ +r + ", " + +g + ", " + +b + ")";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var colors = '#';
    for (var i = 0; i < 6; i++ ) {
        colors += letters[Math.floor(Math.random() * 16)];
    }
  return colors;
}

function colorSelected(id){
  
  let picked =  document.getElementById(id).style.backgroundColor;
 
  if(picked.trim() === que.innerHTML.trim()){
    // document.getElementById("message").innerHTML = 'CORRECT!!!';
    que.innerHTML ='CORRECT!!!';

    for(let i=0; i<numSqu; i++){
      document.getElementById(i+1).style.backgroundColor = picked;
    }
    document.getElementById('h1Color').style.backgroundColor = picked;
    
    setTimeout(() => {
      init();
    }, 2000);

  }else{
    document.getElementById("message").innerHTML = 'TRY AGAIN!!!';
    document.getElementById(id).style.backgroundColor = '#232323';

  }
}

function modeSelected(){
  for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if (this.textContent === "Easy") {
        numSqu = 3;
        for(let i=4; i <=6; i++){
          document.getElementById(i).style.backgroundColor = '#232323';
        }
			}
			else {
        numSqu = 6;
			}
			
      init();
		});
	}
  
}
