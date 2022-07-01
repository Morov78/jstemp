// codewars
// function squareDigits(num) {
//   const stringNumbers = String(num);
//   let newStringNumbers = "";
//   for (let i = 0; i < stringNumbers.length; i += 1) {
//     newStringNumbers += Math.pow(Number(stringNumbers[i]), 2);
//   }
//   return Number(newStringNumbers);
// }

// console.log(squareDigits(9119));
// ****************************************************************************************
// codewars
// У цьому ката ми розраховуємо темп бігу. Для цього ми повинні знати відстань і час.

// Створіть таку функцію:

// runningPace(distance, time)

// Де: distance- Поплавок із кількістю кілометрів

// time - рядок, який містить час, необхідний для проходження відстані.
//  Це завжди буде хвилини: секунди.Наприклад, «25: 00» означає 25 хвилин.Вам не доведеться мати справу з годинами.

// Функція повинна повертати темп, наприклад "4:20" означає,
//     що на прохід одного кілометра знадобилося 4 хвилини 20 секунд.

//     Примітка.Темп завжди повинен повертати лише кількість хвилин і
// секунд.Вам не потрібно перетворювати їх у години.Поверхня кількість секунд.
// function runningPace(distance, time) {
//   const stringArray = time.split(":");
//   const correctSecondTime = stringArray[0] * 60 + Number(stringArray[1]);
//   timeForDistance = correctSecondTime / distance;
//   const newStringTimeForDistanceArray = [];
//   newStringTimeForDistanceArray.push(
//     String(Math.floor(timeForDistance / 60)),
//     String(Math.floor(timeForDistance % 60)).padStart(2, 0)
//   );
//   return newStringTimeForDistanceArray.join(":");
// }

// console.log(runningPace(1, "3:15")); // "3:15");
// console.log(runningPace(5, "25:00")); // "5:00");
// console.log(runningPace(2.51, "10:43"));
// console.log(runningPace(4.99, "22:32")); //4:30
// *********************************************************************************
// codewars
// Підрахуйте кількість дублікатів
// Напишіть функцію, яка повертатиме кількість окремих нечутливих
// до регістру символів алфавіту та числових цифр, які зустрічаються
// у вхідному рядку більше одного разу.Можна припустити,
// що вхідний рядок містить лише алфавіти(як у верхньому,
// так і в нижньому регістрі) та числові цифри.
// function duplicateCount(text) {
//   const lowerText = text.toLowerCase();
//   const letterArray = lowerText.split("");
//   console.log(text, " ---- ", letterArray);
//   const newletterArray = [];
//   letterArray.forEach((letter, index, array) => {
//     if (array.indexOf(letter) !== index && !newletterArray.includes(letter)) {
//       newletterArray.push(letter);
//     }
//   });
//   return newletterArray.length;
// }

// console.log(duplicateCount("aabbcde")); // 2;
// console.log(duplicateCount("aabBcde")); //2
// console.log(duplicateCount("Indivisibilities"));
// ************************************************************************
// codeawrs
// Вступ
// Мова розбійників(Rövarspråket) — це шведська нерозбірлива мова, яку діти використовують,
// щоб ввести в оману людей, не знайомих з цією мовою.Його використовують діти в кількох
// сценаріях, створених Астрід Ліндгрен.

// Ідея полягає в тому, що кожен приголосний у реченні дублюється, а між ними o
// вставляється(bстає bob).Голосні залишаються недоторканими(aзалишається an a).
// Ненавченому вуху досить важко зрозуміти розмову, закодовану таким чином,
// особливо якщо вона промовляється швидко.
// Приклад
// У цьому прикладі приголосні f, bі rзмінені.Голосні і залишаються недоторканими.oa

// 'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)
// Примітка: тире - в прикладі додано для читабельності і не повинно включатися
//  у вихідні дані.

// Завдання
// Ваше завдання — реалізувати функцію, function robberEncode(sentence)яка
//  приймає рядок sentenceі повертає результат, перетворений на мову грабіжників,
// у вигляді рядка.

// Примітки
// Лише приголосні слід змінювати; залишити всі інші символи без змін.
// Перевірятимуться символи верхнього та малого регістру.
// Регістр символу та oсусідніх приголосних мають збігатися ( F => FOFі f => fof).
// Для цілей цієї ката символ вважається приголосним, якщо він дорівнює одній
//  із букв BCDFGHJKLMNPQRSTVWXYZ.

// const consosantLetters = "BCDFGHJKLMNPQRSTVWXYZ";
// function robberEncode(sentence) {
//   let newString = "";
//   //   const letterArray = sentence.split("");
//   for (let i = 0; i < sentence.length; i += 1) {
//     if (consosantLetters.includes(sentence[i].toUpperCase())) {
//       if (sentence[i] === sentence[i].toUpperCase()) {
//         newString += sentence[i] + "O" + sentence[i];
//       } else {
//         newString += sentence[i] + "o" + sentence[i];
//       }
//     } else {
//       newString += sentence[i];
//     }
//   }
//   return newString;
// }

// const consosantLetters = "BCDFGHJKLMNPQRSTVWXYZ";
// console.log(robberEncode("hello world")); // "hohelollolo wowororloldod");
// console.log("hohelollolo wowororloldod");
// console.log(robberEncode("coding is fun")); // "cocododinongog isos fofun";
// console.log("cocododinongog isos fofunon");
// console.log(robberEncode("S.O.S"));
// ***************************************************************************
// Арифметична прогресія визначається як така, в якій існує постійна різниця між
//  послідовними доданками даного ряду чисел.Вам надаються послідовні елементи
//   арифметичної прогресії.Однак є одна зачіпа: у наборі чисел, який вам був
// наданий, відсутній рівно один термін із оригінальної серії.Решта даної серії
//  така ж, як і оригінальна AP.Знайдіть пропущений термін.

// Ви повинні написати функцію, яка отримує список, розмір списку завжди буде
//  щонайменше 3 числа.Пропущений термін ніколи не буде першим або останнім.
// const findMissing = function (list) {
//   let step = list[1] - list[0];
//   if ((list[2] - list[0]) / step !== 2) {
//     step = list[2] - list[1];
//   }
//   for (let i = 0; i < list.length - 1; i += 1) {
//     if (list[i] + step !== list[i + 1]) {
//       return (result = list[i] + step);
//     }
//   }
// };

// console.log(findMissing([1, 3, 4])); // 2
// console.log(findMissing([1, 3, 5, 9, 11])); //7
// console.log(findMissing([2, 7, 12, 22]));
// 8888888888888888888888888888888888888888888888888888888888888888888888888888
// Напишіть функцію, яка приймає масив чисел(цілих чисел для тестів) і цільове число.
//  Він повинен знайти два різних елементи в масиві, які, додавши разом, дають цільове значення.
//  Потім індекси цих елементів повинні бути повернуті в кортежі / списку(залежно від вашої мови)
// так: (index1, index2).

// Для цілей цієї ката деякі тести можуть мати кілька відповідей; будь-які дійсні рішення будуть прийняті.

// Введені дані завжди будуть дійсними(числа будуть масивом довжиною 2 або більше,
// а всі елементи будуть числами; ціль завжди буде сумою двох різних елементів із цього масиву).

// На основі: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// function twoSum(numbers, target) {
//   for (let j = 0; j < numbers.length - 1; j += 1) {
//     for (let i = j + 1; i < numbers.length; i += 1) {
//       if (numbers[i] + numbers[j] === target) return [j, i];
//     }
//   }
// }
// console.log(twoSum([1234, 5678, 9012], 14690)); //[1, 2];
// console.log(twoSum([2, 2, 3], 4)); //[0,1]
//888****************************************************
// Вчора священик віддав відьмі свій монастир, виноградник і весь свій статок.
//  Щоб заробити трохи золота на життя, він вирішив взяти участь у королівському
//   турнірі зі стрільби з лука(він хороший лучник, бо раніше був відомим розбійником).

// Завдання
// Вам надається масив(targetстрільба з лука) із рядків зірочок(для кращої видимості)
//  та літер(стрілки, що влучають у ціль).Ви повинні підрахувати кількість точок
//   кожного виду стрілок(малі літери), відсортувати їх і повернути масив відсортованих
// літер.Крім того, може статися так, що дві стріли одного виду опиняються в одному
// положенні.Якщо це станеться, ви побачите велику літеру.

// Великі літери
// Велика літера означає дві відповідні малі літери в одному місці(враховуйте це як дві стрілки).
//  Однак не може бути двох різних типів літер в одному місці(оскільки король наказав скасувати
//      попередні стріли різного типу в одному місці).

// Як набрати очки:
// Ціль — це квадрат(у реальному житті — круглий) із «кілець». Найбільш віддалене від центру
//  кільце коштує один бал, а наступні кільця будуть коштувати на один бал більше, ніж попередні.

// Як сортувати:
// Відсортуйте літери за їх оцінкою(сумою балів) у порядку зростання.Якщо їх бали рівні,
//     відсортуйте літери за кількістю стрілок у порядку спадання.Якщо кількість стрілок
// однакова, відсортуйте за літерами(UTF - 16) у порядку зростання.

// Примітки:
// Квадратна ціль може бути різної довжини (завжди непарна);

// Ціль завжди буде.

// Приклад 1:
//     target:
//     ["z**",
//      "*a*",
//      "***"]

//     return  ["z", "a"]
// тому що z= 1 бал і a= 2 бали

// Приклад 2:
//     target:
//     ["z*B",
//      "*a*",
//      "**z"]

//     return [b, z, a]
// тому що: b= 2 бали (2 стрілки), z= 2 бали (2 стрілки) і a= 2 (1 стрілка).

// Якщо вам подобається ця ката, перегляньте іншу: Kingdoms Ep.4: The Dancing Witch
function countAndSort(target) {
  class Item {
    constructor(name, sum, numberHits) {
      this.name = name;
      this.sum = sum;
      //   this.double = double;
      this.numberHits = numberHits;
    }
  }
  const number = target.length;
  const middle = Math.ceil(target.length / 2);
  const result = [];
  //   console.log("number=", number, "; middleIndex=", middle);
  target.forEach((line, index) => {
    // console.log(index, "-", line);
    for (let j = 0; j < target.length; j += 1) {
      if (line[j] !== "*") {
        let indexJ,
          indexI,
          nameCell = line[j],
          doubleCell = 1;
        j + 1 > middle ? (indexJ = 2 * middle - j - 1) : (indexJ = j + 1);
        index + 1 > middle
          ? (indexI = 2 * middle - index - 1)
          : (indexI = index + 1);
        pointCell = Math.ceil((indexJ * indexI) / middle);
        if (nameCell === nameCell.toUpperCase()) {
          nameCell = nameCell.toLowerCase();
          doubleCell = 2;
        }

        if (result.find((item) => item.name === nameCell)) {
          indexItem = result.findIndex((item) => item.name === nameCell);
          result[indexItem].sum += pointCell * doubleCell;
          result[indexItem].numberHits.push(pointCell);
          if (doubleCell === 2) {
            result[indexItem].numberHits.push(pointCell);
          }
        } else {
          const newItem = new Item(nameCell, pointCell * doubleCell, [
            pointCell * doubleCell,
          ]);
          if (doubleCell === 2) {
            newItem.numberHits.push(pointCell);
          }
          result.push(newItem);
        }
      }
    }
  });
  const newResult = [...result].sort((item1, item2) => {
    if (item1.numberHits.length > item2.numberHits.length) return 1;
    if (item1.numberHits.length < item2.numberHits.length) return -1;
    return 0;
  });

  // .sort((item1, item2) => item2.name.localeCompare(item1.name))
  // // .sort((item1, item2) => item1.sum - item2.sum)
  // .sort((item1, item2) => item2.numberHits.length - item1.numberHits.length);
  console.log(newResult);
  return newResult.map(({ name }) => name);
}
// console.log(countAndSort(["z**", "a**", "**z"])); // ["a", "z"]);
// console.log(countAndSort(["z**", "*a*", "***"])); //[z,a]
console.log(countAndSort(["z*B", "*a*", "**z"])); // ["b", "z", "a"];
// console.log(countAndSort(["a****", "*****", "**z**", "a*k**", "****z"])); // ["a", "k", "z"]);
console.log(
  countAndSort([
    "a*****S",
    "*******",
    "**z****",
    "a*kOA**",
    "***L**z",
    "*****gG",
    "******z",
  ])
); // ['s', 'k', 'g', 'z', 'l', 'a', 'o']);
// const square = [];
// const number = 7;
// const middle = Math.ceil(number / 2);

// for (let i = 1; i <= number; i += 1) {
//   const mas = [];
//   for (let j = 1; j <= number; j += 1) {
//     j > middle ? (indexJ = 2 * middle - j) : (indexJ = j);
//     i > middle ? (indexI = 2 * middle - i) : (indexI = i);
//     mas.push(Math.ceil((indexJ * indexI) / middle));
//   }
//   console.log(mas);
// }
