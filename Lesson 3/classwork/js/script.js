/*1. Создайте переменную с именем myData и установите ее равной первому значению массива, используя скобочные обозначения и выведите значение в консоль.

		// Setup
		var myArray = [50, 60, 70];*/

var myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData);

/*2. Измените число 99 на 100 выведите массив в консоль

// Setup
var myArray = [18,64,99]; */

var myArray = [18,64,99];
myArray[2] = 100;
// myArray.splice(2, 1, 100); - или так
console.log(myArray);

/*3. Используя скобочные обозначения, выберите элемент из myArray так, чтобы myData был равен:
			8 и выведите в консоль
			11 и выведите в консоль
		
		// Setup
		var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
		var myData;*/

var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[2] [1];   
console.log(myData);   
var myData = myArray[3] [0] [1];   
console.log(myData);  

/*	4. Добавьте ["dog", 3] в конец переменной myArray и выведите в консоль.
			Выведите в консоль первый элемент в каждом вложенном массиве.

		// Setup
		var myArray = [["John", 23], ["cat", 2]];*/

var myArray = [["John", 23], ["cat", 2]]; 
myArray.push(["dog", 3]);
console.log(myArray);
for( var i = 0; i < myArray.length; i++){
    console.log(myArray[i] [0]);
}
/*5. Используйте функцию .pop () чтоб удалить последний элемент из myArray. Удаленное значение запишите в removedFromMyArray и выведите его в консоль.

		// Setup
		var myArray = [["John", 23], ["cat", 2]];
		var removedFromMyArray;*/
        
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);   

/*	6. Используйте функцию .shift(), чтобы удалить первый элемент из myArray, присваивая удаленное значение в removeFromMyArray и выведите его в консоль.

		// Setup
		var myArray = [["John", 23], ["dog", 3]];
		var removedFromMyArray;*/

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray);    

/*7. Добавьте ["Paul", 35] в начало переменной myArray, используя unshift().

		// Setup
		var myArray = [["John", 23], ["dog", 3]];*/

var myArray = [["John", 23], ["dog", 3]];
myArray.unshift(["Paul", 35]);
console.log(myArray);

/*8.Создайте список покупок в переменной myList. Список должен быть многомерным массивом, содержащим несколько подмассивов.
		Первый элемент в каждом подмассиве должен содержать строку с именем элемента. Второй элемент должен быть числом, представляющим цену, т.е.
		[«Шоколадная плитка», 15]
		В списке должно быть не менее 5 подмассивов.
		Выведите в консоль список всех покупок без цен
		Используйте методы добавления удаления элементов из массива*/

var myList = [["Шоколадная плитка", 15], ["Сок", 25], ["Хлеб", 5]];
myList.unshift(["Молоко", 20]);
myList.push(["Рыба", 60]);
for( var i = 0; i < myList.length; i++){
    console.log(myList[i] [0]);
} 

/*9. Давайте произведём 5 операций с массивом.

			9.1 Создайте массив styles с элементами «Джаз» и «Блюз».
			9.2 Добавьте «Рок-н-ролл» в конец.
			9.3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
			9.4 Удалите первый элемент массива и покажите его.
			9.5 Вставьте «Рэп» и «Регги» в начало массива.
*/

var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);



