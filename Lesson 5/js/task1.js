/*1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.*/

let firstNumber = +prompt("Введите x");
let secondNumber = +prompt("Введите y");
let Point = {
    x: firstNumber,
    y: secondNumber,
    GetQuadrant(){
        let quadrant;
        if(this.x > 0 && this.y > 0){
            quadrant = "Число находится в I квадранте";
        } else if(this.x < 0 && this.y > 0){
            quadrant = "Число находится во II квадранте";
        } else if(this.x < 0 && this.y < 0){
            quadrant = "Число находится в III квадранте";
        } else if(this.x > 0 && this.y < 0){
            quadrant = "Число находится в IV квадранте";
        } else if(this.x == 0 || this.y == 0){
            quadrant = "Вы ввели 0";
        } else{
            quadrant = "Вы ввели неправильные значения";
        }
        return quadrant;
    }
};
alert(Point.GetQuadrant());
