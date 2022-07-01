"use strict";
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// Задача 3.41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     // let result = [];
//     // for (const potion of this.potions) {
//     //   //   result.push(potion);
//     //   console.log(potion);
//     // }
//     // const result = [...this.potions];
//     const result = this.potions;
//     // console.log(result);

//     return result;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return console.log(
//           `Error! Potion ${newPotion.name} is already in your inventory!`
//         );
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const indexPotion = this.potions.indexOf(potion);
//         this.potions.splice(indexPotion, 1);
//         return;
//       }
//     }
//     return console.log(`Potion ${potionName} is not in inventory!`);
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         // const indexPotion = this.potions.indexOf(potion);
//         console.log(potion.name);
//         potion.name = newName;
//         return;
//       }
//     }
//     return console.log(`Potion ${oldName} is not in inventory!`);
//   },
// Change code above this line
// };
// document.write(atTheOldToad.getPotions(), "</br>");
// console.log(atTheOldToad.getPotions());
// console.log(
//   'Добавляємо обєкт { name: "Invisibility", price: 620 } в наш масив:'
// );
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.getPotions());
// console.log(
//   'Добавляємо обєкт { name: "Dragon breath", price: 780 }} в наш масив:'
// );
// atTheOldToad.addPotion({ name: "Dragon breath", price: 780 });
// console.log(atTheOldToad.getPotions());
// // console.log('Видаляємо обєкт з значенням "Dragon breath" з нашого масиву:');
// // atTheOldToad.removePotion("Dragon breath");
// // console.log(atTheOldToad.getPotions());
// console.log('Видаляємо обєкт з значенням "абракадабра" з нашого масиву:');
// atTheOldToad.removePotion("абракадабра");
// console.log(atTheOldToad.getPotions());
// console.log('Робимо заміну обєкту зі значенням "Dragon breath" на "Polymorth"');
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.getPotions());
// document.write(atTheOldToad.getPotions());

// Задача 3.30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   const newData = { completed, category, priority, ...data };
//   return newData;
// }
// console.log(makeTask({}));
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ text: "Buy bread" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// завдання 3.19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const result = [];
//   const names = Object.keys(products[0]);
//   if (names.includes(propName)) {
//     for (const product of products) {
//       result.push(product[propName]);
//     }
//   }

//   return result;
//   // Change code above this line
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// Завдання 3.20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   console.log(productName);
//   // Change code below this line
//   let result = 0;
//   for (const product of products) {
//     console.log("product = ", product, "product.name = ", product.name)
//     if (productName === product.name) {
//       result = product.price * product.quantity;
//       break;
//     }
//   }
//   return result;
//   // Change code above this line
// }
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Blaster"));
// function calculateMeanTemperature({
//   today: { low: todayLow, high: todayHigh },
//   tomorrow: { low: tomorrowLow, high: tomorrowHigh },
// }) {
//   console.log(todayLow);

//   console.log(todayHigh);

//   console.log(tomorrowLow);
//   console.log(tomorrowHigh);
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );

// ## Example 4 - Комплексные задачи

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект `account`
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

// ```js
// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };
// ```
