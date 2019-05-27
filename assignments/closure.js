// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function closeToTheEnd() {
  let daysTillTheEnd = 5;
  console.log(`${daysTillTheEnd} till the end of the world...!`);

  function saveTheCheerleader() {
    const didSaveCheerleader = false;

    if (didSaveCheerleader) {
      console.log("The world has been saved!");
    } else {
      daysTillTheEnd /= 2;
      console.log(`You have failed! The world will now end in ${daysTillTheEnd} days!`);
    }
  }

  saveTheCheerleader();
}

closeToTheEnd();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let value = 0;

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  function increment() {
    value++;
    console.log(value);
  }

  return increment;
};
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 1;

  let counterObject = {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    }
  }

  return counterObject;
};

console.log(counterFactory().increment());
console.log(counterFactory().decrement());