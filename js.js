/*
  Создать компонент счетчика времени.
  
  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.
  
  На входе есть строка символов для упражнения.
  
  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавиш в секунду которое было нажато за
  время выполнения упражнения.
  
  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.
  
  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время
const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");
const exercise = document.querySelector(".exercise");
const keyboard = document.querySelector(".keyboard");
const btn = document.querySelector("button");

var start, time, result;

// результат по умолчанию, букв в секунду

// обнуление!!!

// localStorage.setItem('bestResult', 0);
console.log('до упражнения ', localStorage);



var resultArray = charsArr;
exercise.innerHTML = string;

btn.addEventListener("click", callback1);

function callback1() {
    start = new Date; // засекли время


    window.addEventListener("keydown", callback);


    function callback() {


        var letter = event.key;
        keyboard.innerHTML += letter;
        resultArray = resultArray.filter(n => n != letter);
        if (resultArray.length == 0) {
            var end = new Date; // конец измерения
            timerOutput.innerHTML = "Упражнение заняло " + (end - start) / 1000 + " секунд";
            time = (end - start) / 1000;
            result = charsArr.length / time
            // console.log(result + 'букв в секунду');


            var countKPS = function() {

                if (result > localStorage.bestResult) {
                    return result
                } else return localStorage.bestResult

            }

            localStorage.setItem('bestResult', countKPS());
            console.log('после упражнения ', localStorage);
        }
    }

}