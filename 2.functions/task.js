// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
    // Ваш код

  sum = 0;
  max = arr[0];
  min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
      sum += arr[i];
    }
  avg = Number((sum / arr.length).toFixed(2));
  console.log(sum);
  console.log(max, min, sum, avg);
 
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  
  // Ваш код
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum +=arr[i];
  }
  return sum;
}
let arr;

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    arr = arrOfArr[i];
    func(arr)
    if (max < func(arr)) {
      max = func(arr);
    }
  }
  return max;
}



// Задание 3
function worker2(arr) {
  // Ваш код
  let min = +Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
}
return Math.abs(max-min);
}