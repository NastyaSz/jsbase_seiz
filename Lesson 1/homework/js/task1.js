let y1 = prompt("Введите y1");
let y2 = prompt("Введите y2");
let x1 = prompt("Введите x1");
let x2 = prompt("Введите x2");
let k = (y1 - y2) / (x1 - x2);
let b = y2 - k*x2;
if(b>=0){
    console.log("Уравнение прямой: y = " + k + "x + " + b);
}else{
    console.log("Уравнение прямой: y = " + k + "x" + b);
}

