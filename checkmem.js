var guestList = ["Angela", "Jack", "James", "Lara", "Jason"];
var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
  alert("welcome");
} else {
  alert("You do not seem to have an account with us.");
}
