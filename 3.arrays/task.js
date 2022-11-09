function compareArrays(arr1, arr2) {
  let result;
  
  result = JSON.stringify(arr1) === JSON.stringify(arr2);
  

  // !!!!!!!!!!!!!!!  РЕШЕНИЕ No2!!!!!!!!!!!!!!

  // function checkEqual(element, index, array){
  //   element[i] == arr2.element[i]
  // }

  // // Ваш код

  // let checkLenght;
  // if (arr1.length - arr2.length >= 0) {
  //   checkLenght = arr1.length
  // } else {
  //   checkLenght = arr2.length
  // }
  // for (let i = 0; i < checkLenght; i++) {
  //   if (arr1[i] !== arr2[i]) {
  //     result = false;
  //   } else {
  //     result = true;
  //   }
  // }




  return result; // boolean
}
function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter(number => number > 0).filter(number => number % 3 == 0).map(number=> number * 10)

  return resultArr; // array
}