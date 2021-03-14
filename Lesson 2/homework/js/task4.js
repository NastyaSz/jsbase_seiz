/* 4. Дано два числа A и B где (A < B). 
    Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
    Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В. */

let minNumber = +prompt("Введите меньшее число");
let maxNumber = +prompt("Введите большее число");
let sum = 0;
if(minNumber > maxNumber){
    alert("Ошибка");
}
for(sum; minNumber <= maxNumber; minNumber++){
    sum += minNumber;
    if(minNumber % 2){
        document.write(minNumber + "<br>");
    }

}
document.write(sum);