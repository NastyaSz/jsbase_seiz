/*2. Повторить с swith, при условии 
num = 5 - "Tiny"
num = 10 - "Small"
num = 15 - "Medium"
num = 20 - "Large"
num = 25 - "Huge"*/

let num = prompt("Введите число");
switch(num){
    case "5":
        console.log("Tiny");
        break;
    case "10": 
        console.log("Small");
        break;
    case "15": 
        console.log("Medium");
        break;
    case "20": 
        console.log("Large");
        break;
    case "25": 
        console.log("Huge");
        break;
    default:
        console.log("Число не равно 5, 10, 15, 20 или 25");
}