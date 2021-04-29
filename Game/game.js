	const container = document.querySelector(".grid");
	const gridNodes = document.querySelectorAll(".grid-item");
	const gridArray = Array.from(gridNodes);
	let circle = document.createElement("div");
	let position = {x: 0, y:0};

	
	function makeGrid(rows, cols) {
	  container.style.setProperty("--grid-rows", rows);
	  container.style.setProperty("--grid-cols", cols);
	  
	  let x = 0;
	  let y = 0;
	  for (let c = 0; c < rows * cols; c++) {
		let cell = document.createElement("div");
		
		y = c%cols;
		
		if (y === (rows - 1)) {
		  x++;
		}    
			
		container.appendChild(cell).className = "grid-item grid-item-" + x + '' + y;
	  }
	}
	const keys = {
	  left: 37,
	  up: 38,
	  right: 39,
	  down: 40
	};
	makeGrid(5, 5);
	circle.style.width = "50px";
	circle.style.height = "50px";
	circle.style.backgroundColor = "white";
	let firstGridItem = document.querySelector(".grid-item");
	firstGridItem.appendChild(circle);
	
	function handleKey(e) {
	  switch (e.keyCode) {
		case keys.left:
		  position.y--;
		  break;
		case keys.up:
		  position.x--;
		  break;
	
		case keys.right:
		  position.y++;
		  break;
	
		case keys.down:
		  position.x++;
		  break;
	  }
	  
	  let gridItem = document.querySelector(".grid-item-" + position.x + '' + position.y);
	  gridItem.appendChild(circle);
	}
	window.addEventListener("keydown", handleKey);

var stmin = 0;
  var stsec = 0;
  var stmilisec = 0;
  
  

  var milisec = 0;
  var sec = 0;
  var min = 0;
  
  var startchron = 0;
  
  function chronometer() {
    if(startchron == 1) {
      milisec += 1;       
      
      if(milisec > 9) {
        milisec = 0;
        sec += 1;
      }
  
      
      if(sec > 59) {
        sec = 0;
        min += 1;
      }
  
      
      document.getElementById('time').innerHTML = min+ ' : '+ sec+ '<sub>'+ milisec+ '</sub>';
	  if(milisec == stmilisec && sec == stsec && min == stmin) toAutoStop();
      else setTimeout("chronometer()", 100);
    }
      
	
  }
  
  function startChr() { startchron = 1; chronometer(); }      
  
  

