
"use strict";


function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь


  let discriminant = (b ** 2) - (4 * a * c);

  if (discriminant < 0) {
    arr = [];
  }

  else if (discriminant == 0) {
    arr = [(-b) / (2 * a)]
  }

  else{
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a),  (-b - Math.sqrt(discriminant)) / (2 * a)];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  const S = amount - contribution;
  const StartDate = new Date();
  let n;
  let P = (percent / 12)/ 100;
  function monthDiff(StartDate, date) {
    n = date.getMonth() - StartDate.getMonth() +
    (12 * (date.getFullYear() - StartDate.getFullYear()))
    return n;
  }

  monthDiff(StartDate, date);
 let a;
  let MonthlyPay = S * ( P + ( P / (((1 + P)** n) - 1)))
  totalAmount = MonthlyPay * n;
  if (Number.isFinite(P) == false){
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`)
  } else if (Number.isFinite(contribution) == false){
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`)
  }  else if (Number.isFinite(amount) == false){
      return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`)
  } else{
  return Number(totalAmount.toFixed(2));
  }
}