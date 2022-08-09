const list = [];
let min, max, numaverage;
list = readInput();

function readInput() {
  while (true) {
   let number = Number(prompt("Enter an integer (a negative integer to quit):"));

    if (Number.isInteger(number) && number > 0) {
      list.push(number);
    } else if (number < 0) {
      displayStats(list)
      break;
    }
  }
}

function displayStats(list) {
  let checknum = list.length == 0 ? true : false;

  if (checknum == true) {
    alert(
      "For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0");
  } else if (checknum == false) {
    min = Math.min(...list);
    max = Math.max(...list);
    numaverage = list.reduce((x, y) => x + y, 0) / list.length;
    alert(
      "For the list " +
        list.toString() +
        ", the average is " +
        numaverage.toString() +
        ", the minimum is " +
        min.toString() +
        ", and the maxnimum is " +
        max.toString()
    );
  }
}

