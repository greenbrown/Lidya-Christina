const whatTimeIsIt = time => {
  // do code here
  if (time === "12:00 pm") return "It's noon";
  if (time === "12:00 am") return "It's midnight";

  let hours = time.split(" ")[0].split(":")[0];
  let minutes = time.split(" ")[0].split(":")[1];
  let tens = minutes.split("")[0];
  let unit = minutes.split("")[1];
  let index = time.split(" ")[1];

  let smallNum = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let bigNum = ["", "", "twenty", "thirty", "forty", "fifty"];

  if(index === "pm") {
    if(minutes > 19) {
      return `It's ${smallNum[hours]} past ${bigNum[tens]} ${smallNum[unit]} in the afternoon`
    } else {
      return `It's ${smallNum[hours]} past ${smallNum[minutes]} in the afternoon`
    }
  } else {
    if(minutes > 19) {
      return `It's ${smallNum[hours]} past ${bigNum[tens]} ${smallNum[unit]} in the morning`
    } else {
      return `It's ${smallNum[hours]} past ${smallNum[minutes]} in the morning`
    }   
  }
};


// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(whatTimeIsIt("12:00 pm"), "It's noon")
test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon")
test(whatTimeIsIt('12:00 am'), "It's midnight")
test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning")
test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning")