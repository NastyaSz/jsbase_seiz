/*5. Запросите у пользователя его возраст, после чего выведите на экран модальное окно с вопросом: "Ваш возраст ...(введеное пользователем число) лет?". Далее в зависимости от выбора пользователя выводится модальное окно с информацией true или false.*/

let userAge = prompt("Введите ваш возраст");
let a = confirm("Ваш возраст " + userAge + " лет?");
alert(a);