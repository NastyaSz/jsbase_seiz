/*1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
		Функция должна проверять корректность введенных чисел и знака операции.
		Все аргументы для функции принять от пользователя.*/
		
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let sign = prompt("Введите знак операции: +, -, *, /");
function calculate(a, b, sign){
	if (a == NaN || b == NaN){
		alert("Вы ввели некорректные числа");
	}
	switch (sign) {
		case "+":
			return a + b;
			break;
		case "-":
			return a - b;
			break;
		case "*":
			return a * b;
			break;
		case "/":
			if(b == 0){
				return "это деление на 0";
			}else{
				return a / b;
			}
			break;
		default:
			return sign + " не является знаком арифметической операции";
	}

}
alert("Результат операции: " + calculate(a, b, sign));