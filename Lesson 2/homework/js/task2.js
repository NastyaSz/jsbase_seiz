// 2. Построить прямоугольный треугольник состоящий из символа "*".

let star = +prompt("Введите максимальное колличество звезд в строке");
let s = "*";
for(let i = 0; i < star; i++){
    document.write(s +"<br>");
    s = s + "*";
}
