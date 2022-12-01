const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//* Create a new variable called `totalBatteries`, which holds the sum of all of
// the battery amounts in the `batteryBatches` array. (Note that the
//     `batteryBatches` variable has been provided for you in `index.js`.) Naturally,
//     you should use `reduce()` for this!
// the reduce syntax= array.reduce(function(total,currentValue,CurrentIndex, arr),initialValue)
//arr.reduce(reduceFn,initialValue)
// Let numSums = nums.reduce(sumFunc, 0)
// function sumFunc(total, currentValue, currentIndex, arr){
// 	return total+=currentValue
// }

const initialValue = 0;
const totalBatteries = batteryBatches.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(totalBatteries);// got a result of 31