let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]



// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'

const handleClick = (element) => {

  console.log(`The element you clicked on has an id:  ${element.id}`)

  if(!document.getElementById(element.id).innerHTML) {
    
    addMarker(element.id)
  }
}

// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {

  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  document.getElementById(id).innerHTML = currentMarker

  const row = parseInt(id.charAt(0));
  const column = parseInt(id.charAt(2));
  board[row][column] = currentMarker

  console.log('The board now looks like this: ', board)

  checkForWin()
}

// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}

// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
      // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  
    const squares = document.getElementsByTagName("TD")
  
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null

    // reset all values in board variable
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
  }  
}

const checkForWin = () => {
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    setTimeout(() => {
      window.alert(`Player ${currentMarker} won!`)
    }, 100);
  } else {
    changeMarker()
  }
}

const horizontalWin = () => {
  // Your code here to check for horizontal wins
  if((board[0][0] == currentMarker && board[0][1] == currentMarker && board[0][2] == currentMarker) 
    || (board[1][0] == currentMarker && board[1][1] == currentMarker && board[1][2] == currentMarker)
    || (board[2][0] == currentMarker && board[2][1] == currentMarker && board[2][2] == currentMarker)) {
    return true;
  }
  else {
    return false;
  }
}

const verticalWin = () => {
  // Your code here to check for vertical wins
  if((board[0][0] == currentMarker && board[1][0] == currentMarker && board[2][0] == currentMarker) 
    || (board[0][1] == currentMarker && board[1][1] == currentMarker && board[2][1] == currentMarker)
    || (board[0][2] == currentMarker && board[1][2] == currentMarker && board[2][2] == currentMarker)) {
    return true;
  }
  else {
    return false;
  }
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins
  if((board[0][0] == currentMarker && board[1][1] == currentMarker && board[2][2] == currentMarker) 
    || (board[0][2] == currentMarker && board[1][1] == currentMarker && board[2][0] == currentMarker)) {
    return true;
  }
  else {
    return false;
  }
}

