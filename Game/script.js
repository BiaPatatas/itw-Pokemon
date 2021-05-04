const character = {
    x: 0,
    y: 0
  };
  
  const rocks = [
    {x: 1, y: 0},
    {x: 2, y: 0},
    {x: 3, y: 0},
    {x: 4, y: 0},
    {x: 3, y: 1},
    {x: 4, y: 1},
    {x: 4, y: 2},
    {x: 0, y: 3},
    {x: 1, y: 3},
    {x: 0, y: 4},
    {x: 1, y: 4}
  ];
  
  const plants = [
    {x: 2, y: 3},
    {x: 5, y: 2}
  ];

  
  // Check if there is a rock at the provided coordinates.
  // Returns a Boolean
  const isThereARockAt = (x, y) => {
    // Loop through rocks, and check if any rock is at the given point.
    for (let i = 0; i < rocks.length; i++) {
      const rock = rocks[i];
      if (rock.x === x && rock.y === y) {
        return true;
      }
    }
    return false;
  };


  
  // Check if the provided coordinate is within the grid's bounds.
  // Returns a Boolean
  const isCoordinateInGrid = (x, y) => {
    if (x < 0 || y < 0 || x > 5 || y > 4) {
      return false;
    }
    return true;
  }
  
  // Check if a player can move to the provided coordinates.
  // Returns a Boolean
  const canMoveTo = (x, y) => {
    // If the coordinate to move is outside of the grid,
    // the player can't move to it.
    if (!isCoordinateInGrid(x, y)) {
      return false;
    }
    // If there is a rock at the coordinate, 
    // the player can't move to it.
    if (isThereARockAt(x, y)) {
      return false;
    }
    return true;
  };
  
  // Check if there is a plant at the provided coordinates.
  // Returns a Boolean
  const isThereAPlantAt = (x, y) => {
    // Loop through plants, and check if any plant is at the given point.
    for (let i = 0; i < plants.length; i++) {
      const plant = plants[i];
      if (plant.x === x && plant.y === y) {
        return true;
      }
    }
    return false;
  };
  
  // Remove the plant from the global plant array.
  // Returns nothing
  const removePlantAt = (x, y) => {
    for (let i = 0; i < plants.length; i++) {
      const plant = plants[i];
      if (plant.x === x && plant.y === y) {
        plants.splice(i, 1);
      }
    }
  };
  
  // Display a win message to the player.
  // Returns nothing
  const displayWinMessage = () => {
    // Only display one win message.
    if (document.querySelector('.win-message') !== null) {
      return;
    }
    const winMessageElement = document.createElement('div');
    winMessageElement.className = 'win-message';
    winMessageElement.innerHTML = 'FINISH!!';
    document.querySelector('.board').appendChild(winMessageElement);
  };
  
  // Move the character to an x,y grid coordinate.
  // Returns nothing
  const moveCharacterTo = (x, y) => {
    const character = document.querySelector('.character');
    // Multiply the coordinates by 100 because each grid square
    // is 100x100 pixels in size.
    character.style.top = (y * 100).toString() + 'px';
    character.style.left = (x * 100).toString() + 'px';
    if (isThereAPlantAt(x, y)) {
      removePlantAt(x, y);
      renderPlants();
    }
    if (plants.length === 0) {
      displayWinMessage();
    }
  };
  
  // Move the character left one tile, if Blerf can.
  const moveLeft = () => {
    if (canMoveTo(character.x - 1, character.y)) {
      character.x -= 1;
      moveCharacterTo(character.x, character.y);
    }
  }
  
  // Move the character right one tile, if Blerf can.
  const moveRight = () => {
    if (canMoveTo(character.x + 1, character.y)) {
      character.x += 1;
      moveCharacterTo(character.x, character.y);
    }
  }
  
  // Move the character up one tile, if Blerf can.
  const moveUp = () => {
    if (canMoveTo(character.x, character.y - 1)) {
      character.y -= 1;
      moveCharacterTo(character.x, character.y);
    }
  };
  
  // Move the character down one tile, if Blerf can.
  const moveDown = () => {
    if (canMoveTo(character.x, character.y + 1)) {
      character.y += 1;
      moveCharacterTo(character.x, character.y);
    }
  };
  
  // Create rock DOM elements and add them to the board.
  const renderRocks = () => {
    for (let i = 0; i < rocks.length; i++) {
      const rock = rocks[i];
      const rockElement = document.createElement('div');
      rockElement.className = 'rock';
      // Multiply the x,y coordinates by 100 because each grid square
      // is 100x100 pixels in size.
      rockElement.style.left = (rock.x * 100).toString() + 'px';
      rockElement.style.top = (rock.y * 100).toString() + 'px';
      document.querySelector('.board').appendChild(rockElement);
    }
  };
  renderRocks();
  
  // Create plant DOM elements and add them to the board.
  const renderPlants = () => {
    // Remove plants if any are on the grid.
    const plantElements = document.querySelectorAll('.plant');
    for (let i = 0; i < plantElements.length; i++) {
      plantElements[i].remove();
    }
    
    for (let i = 0; i < plants.length; i++) {
      const plant = plants[i];
      const plantElement = document.createElement('div');
      plantElement.className = 'plant';
      plantElement.style.left = (plant.x * 100).toString() + 'px';
      plantElement.style.top = (plant.y * 100).toString() + 'px';
      document.querySelector('.board').appendChild(plantElement);
    }
  };
  renderPlants();
  
  // Add an event listener for when the user presses keys.
  document.body.addEventListener('keydown', evt => {
    const keyCode = evt.keyCode;
    // If the user pressed any directional keys, 
    // prevent the browser default of scrolling the page.
    if ([37, 38, 39, 40].includes(keyCode)) {
      evt.preventDefault();
    }
    // Attempt to move the character in the direction 
    switch (keyCode) {
      case 37:
        moveLeft();
        break;
      case 38:
        moveUp();
        break;
      case 39:
        moveRight();
        break;
      case 40:
        moveDown();
        break;
    }
  });
  
  const textAreas = document.querySelectorAll('textarea');
  
  for (let i = 0; i < textAreas.length; i++) {
    const textArea = textAreas[i];
    var myCodeMirror = CodeMirror.fromTextArea(textArea, {
      readOnly: true,
      theme: 'one-dark',
      lineNumbers: true
    });
  }

  function startTimer(duration, display) {
		var timer = duration, minutes, seconds;
		setInterval(function () {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);
	
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
	
			display.textContent = minutes + ":" + seconds;
	
			if (--timer < 0) {
				timer = duration;
			}
		}, 1000);
	}
	
	window.onload = function () {
		var fiveMinutes = 60 * 2,
			display = document.querySelector('#time');
		startTimer(fiveMinutes, display);
	};
  
  function per(){
    var path = localStorage.getItem("imagem");
    var imagem = document.getElementsByClassName("character").style.background-image;
    alert(imagem);
    imagem = url(path);
  }
