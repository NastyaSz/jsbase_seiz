/*    3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.*/

let A = +prompt("Введите число A");
let B = +prompt("Введите число B");
let C = +prompt("Введите число C");
if(A > B && A > C){
    alert("Самое большое число: " +A);
} else if (B > A && B > C){
    alert("Самое большое число: " +B);   
} else if (C > A && C > B){
    alert("Самое большое число: " +C);
} else{
    alert("Есть равные между собой числа");
}
