/* 2. Обменять значения двух переменных, используя третью (буферную) переменную. Вывести значение переменных до и после обмена.*/

let first = "Первая переменная";
let second = "Вторая переменная";
console.log(first);
console.log(second);
let third = first;
first = second;
second = third;
console.log(first);
console.log(second);