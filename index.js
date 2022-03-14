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

const titleCased = function() {
  return tutorials.map((line) => {
    const letters = line.split(' ')
      const titleArray = letters.map((char) => char.charAt(0).toUpperCase() + char.slice(1));
  
const titleCaseArray = titleArray.join(' ')
return titleCaseArray;
}
)}
