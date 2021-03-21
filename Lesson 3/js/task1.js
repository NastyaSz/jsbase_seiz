// 1. Сделать собственные примеры методов применяемых для массивов.

// join
var colors = ["green", "yellow", "red", "blue"];
console.log(colors.join("-"));

// reverse
var size = ["xs", "s", "m", "l", "xl", "xxl"];
console.log("size after reverse: " + size.reverse());

//sort
var names = ["Bogdan", "Nickolay", "Anton", "Alisa", "Sergey", "Olya", "Vera", "Yana", "Paul"];
console.log(names.sort());

//concat
var domesticAnimals = ["cat", "dog", "hamster"];
var wildAnimals = ["tiger", "lion", "wolf", "lama"];
var animals = domesticAnimals.concat(wildAnimals);
console.log(animals);

//slice
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40];
console.log(numbers.slice(4, 10));
console.log(numbers.slice(-4));

//splice
var del = numbers.splice(0, 9);
console.log("Удаленные числа: " + del);
console.log("Оставшиеся числа: " + numbers);
numbers.splice(4, 0, 123, 123, 123, 123);
console.log("Числа после вставки: " + numbers);

//push
var lenght = wildAnimals.push("giraffe");
console.log("Новый массив: " + wildAnimals);
console.log("Длинна нового массива: " + lenght);

//pop
console.log("Удаленный элемент: " + domesticAnimals.pop());

//unshift
var addColor = colors.unshift("white");
console.log("Новый массив цветов: " + colors);
console.log("Длинна нового массива: " + addColor);

//shift
var fruits = ["apple", "orange", "plum"];
console.log("Удаленный фрукт: " + fruits.shift());