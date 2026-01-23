let total = 0;

function addRandom() {
  let number = Math.floor(Math.random() * 6) + 1;
// this statement adds a random number out of 6 to 1, advancing towards a total of 100.
  total = total + number;
//this statement adds that number to the total.
  document.getElementById("last").innerHTML =
    "Last number: " + number;
//This statement displays the last number rolled plus one.
  document.getElementById("total").innerHTML =
    "Total: " + total;
//this statement takes that number and adds it to the total of the previous roll
  if (total === 100) {
    document.getElementById("message").innerHTML =
      "You WIN!";
  } 
  //This if statement says that if the total is equal to 100, then you win!
  else if (total < 100) {
    document.getElementById("message").innerHTML =
      "Add again!";
  } 
  //This else if statement says that if the total is less than 100 to add again if you choose to do so by clicking the button.
  else {
    document.getElementById("message").innerHTML =
      "You LOSE!";
  }
  //This final else statement says that if the total of your rolls is more than 100, you lose!
}
