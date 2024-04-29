count = 0;
//create a dictionary to store all valid entries into the grid
var dict = {
  1: "0",
  2: "0",
  3: "0",
  4: "0",
  5: "0",
  6: "0",
  7: "0",
  8: "0",
  9: "0",
};

//List of possible winnable outcomes
array1 = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [4, 5, 6],
  [3, 5, 7],
  [7, 8, 9],
];

//create an empty array that will hold all combinations of three number sets each time input is done
array2 = [];

//Write the function to handle click on square boxes
function myfunc(click) {
  let el = document.getElementById(click);
  let turn = document.getElementById("turn");

  //to keep changing turns and inserting the values in the grid
  if (
    el.innerText == "" &&
    count == 0 &&
    document.getElementById("turn").innerText != "Game Over!"
  ) {
    el.innerText = "X";
    count += 1;
    turn.innerText = "Player O turn";
  }
  if (
    el.innerText == "" &&
    count == 1 &&
    document.getElementById("turn").innerText != "Game Over!"
  ) {
    el.innerText = "O";
    count -= 1;
    turn.innerText = "Player X turn";
  }
  //add the values added by click to the dict
  for (let i = 1; i < 10; i++) {
    let num1 = i.toString();
    let test = document.getElementById(num1);
    dict[i] = test.innerHTML;
  }
  //fetch from dict to array2
  for (let j = 0; j < 8; j++) {
    f = dict[array1[j][0]];
    f = f.concat(dict[array1[j][1]]);
    f = f.concat(dict[array1[j][2]]);
    array2.push(f);
  }

  //Loop to iterate through the grid(array2) to check for wins on each click and highlight the winner
  for (let i = 0; i < 8; i++) {
    if (array2[i] == "XXX") {
      document.getElementById("Winner").innerText = "X Wins";
      a = array1[i][0];
      b = array1[i][1];
      c = array1[i][2];
      document.getElementById(a).style.backgroundColor = "lightgreen";
      document.getElementById(b).style.backgroundColor = "lightgreen";
      document.getElementById(c).style.backgroundColor = "lightgreen";
      document.getElementById("turn").innerText = "Game Over!";
    }
    if (array2[i] == "OOO") {
      document.getElementById("Winner").innerText = "O Wins";
      a = array1[i][0];
      b = array1[i][1];
      c = array1[i][2];
      document.getElementById(a).style.backgroundColor = "lightgreen";
      document.getElementById(b).style.backgroundColor = "lightgreen";
      document.getElementById(c).style.backgroundColor = "lightgreen";
      document.getElementById("turn").innerText = "Game Over!";
    }
  }
  array2 = []; //reset the array to empty each time on click until winner is found
}

//to handle page refresh for new game
function handleRefresh() {
  window.location.reload();
}
