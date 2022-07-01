let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber, ...numberStore];
console.log(numberStore);

// program to display text 5 times
const n = 5;

// looping from i = 1 to 5
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}
// program to display numbers from 1 to 5
n = 5;

// looping from i = 1 to 5
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    console.log(i);     // printing the value of i
}