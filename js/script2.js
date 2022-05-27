
// function change(string) {
//   const array = string.split(", ");
//   const array2 = [];
//   for (const nameSurname of array) {
//     const arraynameSurname = nameSurname.split(" ");
//     const arraySurnameName = [];
//     arraySurnameName.push(arraynameSurname[1], arraynameSurname[0]);
//     // const element = arraynameSurname[0];
//     // arraynameSurname.splice(0, 1);
//     // arraynameSurname.push(element);

    
//     const surnameName = arraySurnameName.join(" ");
    
//     array2.push(surnameName);
//     // console.log(array2);
//   }
//   return array2.join(", ");
// }


// const names = "Іван Сидорук, Петро Гнатюк, Василь Коваленко";
// console.log(names);
// console.log(change(names));
// function flipSentence(string) {
//   const array = string.split(" ");
//   const array2 = [];
//   for (const element of array) {
//     array2.splice(0, 0, element);
//   }
//   const message = array2.join(" ");
//   return message;
// }



// console.log("Жили-були дід і баба")
// console.log(flipSentence("Жили-були дід і баба"));

// const points = [13, 2, 3, 0, -5, 6, 17, 8, 9, 10];
// function getMinMax(array) {
//   const arrayMinMax = [array[1], array[1]];
//   // console.log(arrayMinMax);
//   for (let i = 1; i < array.length; i++) {
//     // console.log("Мінімальне:", arrayMinMax[0], ", Максимальне:", arrayMinMax[1], ". Значення масиву:", array[i]);
//     arrayMinMax[0] = Math.min(arrayMinMax[0], array[i]);
//     arrayMinMax[1] = Math.max(arrayMinMax[1], array[i]);
    
//   }
//   return arrayMinMax;
// }
// console.log(getMinMax(points));

// const points = [13, 2, 3, 0, -5, 6, 17, 8, 9, 10];
// function getMinMax(array) {
//   const arrayMinMax = [array[1], array[1]];
//   console.log(arrayMinMax);
//   for (let i = 1; i < array.length; i++) {
//     // console.log("Мінімальне:", arrayMinMax[0], ", Максимальне:", arrayMinMax[1], ". Значення масиву:", array[i]);
//     if (array[i] < arrayMinMax[0]) {
//       arrayMinMax[0] = array[i];
//     }
//     if (array[i] > arrayMinMax[1]) {
//       arrayMinMax[1] = array[i]; 
//     }
    
//   }
//   return arrayMinMax;
// }
// console.log(getMinMax(points));
  // let minNumber = array[1];
  // let maxNumber = array[1];
  // let i = 1; i < array.length; i++) {
  //   console.log("Мінімальне:", minNumber, ", Максимальне:", maxNumber, ". Значення масиву:", array[i]);
  //   if (array[i] < minNumber) {
  //     minNumber = array[i];
  //   }
  //   if (array[i] > maxNumber) {
  //     maxNumber = array[i]; 
  //   }
  // }

// console.log(getMinMax(points));


// const randomWords = ["прокурор", "пахтакор", "дед Егор", "матадор",
//   "светофор", "симофор", "мародёр", "ухожор", "мухомор"];
// const randomIndex = Math.floor(Math.random() * randomWords.length);
// document.write(`Из-за леса, из-за гор </br> Показался ${randomWords[randomIndex]}. </br>
//   И такая дребедень</br> Появлялась каждый день.`);

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(calculateTotal(1))   ;

// https://wm-school.ru/js/array_exercises.php задачки
// Замена регистра символов
// Пользователь вводит строку кириллицей разного регистра.Напишите функцию,
//     которая принимает строку в качестве аргумента и заменяет регистр каждого
//  символа на противоположный.Например, если вводится «КаЖдЫй ОхОтНиК»,
//   то на выходе должен быть массив[кАжДыЙ оХоТнИк].
// const stringInput = prompt("Введіть текст: ");
// const stringInput = "СьОгОдНі ВеЧеРоМ"
// let stringOutput = "";
// let letter;
// const stringLength = stringInput.length;
// for (let i = 0; i < stringLength; i += 1) {
//     letter = stringInput.charAt(i);
//     if (letter === letter.toUpperCase()) {
//         letter = letter.toLowerCase();
//     } else {
//         letter = letter.toUpperCase();
//     }
//     stringOutput = stringOutput + letter;
// }
// console.log(stringInput, "--->", stringOutput);
// document.write(stringInput, "--->", stringOutput.fontcolor("red"));


// Задача: написать код на JavaScript, который посчитает, сколько будет 2^10 с помощью цикла.
// const num = 2;
// const powder = 10;
// let result = 1;

// for (let i = 1; i <= powder; i++) {
//     result *= num;
// }
// console.log("Result =", result);


// Наибольший простой делитель
// Простые делители числа 13195 - это 5, 7, 13 и 29.
// Каков самый большой делитель числа 600851475143, являющийся простым числом?
// let number = 0;
// for (let i = 2; i < 130000; i += 1) {
//     // console.log(i);
//     let isResult = true;
//     for (let j = 2; j < i; j += 1) {
//         // console.log(i, " - ", j);
//         if (i % j === 0) {
//             // console.log("------");
//             isResult = false;
//             break;
//         }
//     }
//     if (isResult === true) {
//         number += 1;
//         console.log("prosto", i, "його порядок:", number);
//     }
//     if (number === 10001) {
//         break;
//     }
// }
// не доопрацював


// Четные числа Фибоначчи
// Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих.
//  Начиная с 1 и 2, первые 10 элементов будут:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.

// let i = 1;
// let b = 1;
// let ii, result = 0;

// while (i < 4000000) {
//     console.log(i);
//     if (i % 2 === 0) {
//         result += i;
//     }
//     ii = b;
//     i = i + ii;
//     b = i - ii;
      
// }
// console.log("result: ", result);

// Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9.
//  Сумма этих чисел равна 23. Найдите сумму всех чисел меньше 1000, кратных 3 или 5.

// let result = 0;
// for (i = 1; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         // console.log(i);
//         result += i;
//     }
// }
// console.log(result);

// Рекурсия.Ноль чётный.Единица нечётная.У любого числа N чётность такая же,
// как у N - 2.Напишите рекурсивную функцию isEven согласно этим правилам.
// Она должна принимать число и возвращать булевское значение.Потестируйте
//  её на 50 и 75. Попробуйте задать ей - 1. Почему она ведёт себя таким образом ?
//     Можно ли её как - то исправить ?


// Минимум.Напишите функцию min, принимающую два аргумента,
//     и возвращающую минимальный из них.
// function min(number1, number2) {
//     const minNumber = number1 < number2 ? number1 : number2;
//     return minNumber;
// }
// document.write(min(0, -10));

// FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100,
//  с двумя исключениями.Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел,
//  делящихся на 5(но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так,
//  чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
// for (let i = 1; i <= 100; i += 1) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //     console.log("FizzBuzz");
    // } else if (i % 3 === 0) {
    //     console.log("Fizz");
    // } else if (i % 5 === 0) {
    //     console.log("Buzz");
    // } else {
    //     console.log(i);
    // }
    
// }


// Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8,
//  в которой линии разделяются символами новой строки.На каждой позиции либо пробел,
//     либо #.В результате должна получиться шахматная доска.
// let grand = "#";
// for (let i = 1; i <= 8; i++) {
//     for (let j = 1; j <= 8; j++){
//         if ((i + j) % 2 === 0) {
//             document.write("#");
//         } else {
//             document.write('&nbsp&nbsp');
//         }
//     }
//     document.write("</br>");
 // }

// let grand2 = "#", i = 1;
// do {
//     document.write(i, " ", grand2, "</br>");
//     grand2 = grand2 + "#";
//     i += 1;
// } while (i <= 7);

// let grand3 = "#";
// i = 1;
// while (i<=7) {
//     document.write(i, " ", grand3, "</br>");
//     grand3 = grand3 + "#";
//     i += 1;
// }
