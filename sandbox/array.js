const numArray = Array.from(Array(100).keys());

const newNumArray = numArray.map(
  (item) => {
    return item + 1;
  }
);

const randomNumber = Math.round(Math.random(100)*100);

const modifiedNumArray = newNumArray.filter(item => item !== randomNumber);

let flag = false;

const arraySearch = modifiedNumArray
  .find((item, index) => {
    if (flag === false && item !== index + 1) {
      console.log(item - 1);
      flag = true;
    }
});

console.log('the random number', randomNumber );
console.log(modifiedNumArray);
console.log(arraySearch);