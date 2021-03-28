/*5.  Создать игру "Камень-Ножницы-Бумага".
        Выбор компьютера определяется строкой:  
		
		var computerChoice = Math.random();
		alert(computerChoice);
		
        Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново*/

function showWinner(){
    var userChoice = prompt("Введите слово камень, ножницы или бумага").toLowerCase();
    words = ["камень", "ножницы", "бумага"]
    var word = words[Math.floor(Math.random() * words.length)];
    if(userChoice == word){
        console.log(word);
        return "Ничья";
    } else if(userChoice =="камень" && word == "ножницы" || userChoice =="ножницы" && word == "бумага" || userChoice =="бумага" && word == "камень"){
        console.log(word);
        return "Вы выиграли";
    }else if(word =="камень" && userChoice == "ножницы" || word =="ножницы" && userChoice == "бумага" || word =="бумага" && userChoice == "камень"){
        console.log(word);
        return "Вы проиграли";
    } else{
        return "Вы ввели неправильное значение";
    }
}   
alert(showWinner());
var nextGame = true;
while(nextGame == true){
    if(confirm("Хотите повторить игру?")){
        alert(showWinner());
    }else{
        alert("Игра окончена");
        nextGame = false;
    }

}
