function whosPaying(names) {
  var numOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numOfPeople);
  var randomPerson = names[randomPersonPosition];

  return randomPerson + " is going to buy lunch today!";
}
