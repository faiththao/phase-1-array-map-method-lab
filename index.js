const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => { 
//   return tutorials
// }

function titleCased(){
  return tutorials.map(titleCase);
  }

function titleCase(str) {
  let strLowerCase = str;
  let wordArr = strLowerCase.split(" ").map(function(currentValue) {
      return currentValue[0].toUpperCase() + currentValue.substring(1);
  });
  return wordArr.join(" ");
}