/*3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
       содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
       Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.
4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
       Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
           • "director" — 3000;
           • "manager" — 1500;
           • "programmer" — 2000;
           • для остальных значений — 1000.
       После выполнения функции — вывести информацию о сотрудниках.
*/
let companyEmployees = [];
function createEmp() {
    companyEmployees.push({
        name: prompt("Введите имя сотрудника"),
        sName: prompt("Введите фамилию сотрудника"),
        age: +prompt("Введите возраст сотрудника"),
        occupation: prompt("Введите должность сотрудника"),
        show() {
            document.write("Имя: " + this.name 
            + "<br> Фамилия: " + this.sName 
            + "<br> Возраст: " + this.age 
            + "<br> Должность:  " + this.occupation 
            + "<hr>");
        }
    });
    // return user.show();
}

let nextEmp = true;
do {
    createEmp();
    nextEmp = confirm("Хотите добавить ещё одного сотрудника?")
} while (nextEmp == true);


function addSalary() {
    for (let i = 0; i < companyEmployees.length; i++) {
        switch (companyEmployees[i].occupation) {
            case "director":
                companyEmployees[i].salary = 3000;
                break;
            case "manager":
                companyEmployees[i].salary = 1500;
                break;
            case "programmer":
               companyEmployees[i].salary = 2000;
                break;
            default: companyEmployees[i].salary = 1000;
        }
        companyEmployees[i].show = function() {
        	document.write("Имя: " + this.name 
            	+ "<br> Фамилия: " + this.sName 
              + "<br> Возраст: " + this.age 
              + "<br> Должность:  " + this.occupation 
              + "<br> Зарплата:  " + this.salary 
              + "<hr>");
        };
    }
}
addSalary();
companyEmployees.forEach(x => x.show());


