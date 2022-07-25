//  Дан элемент #elem. Добавьте ему класс www.

// Дан элемент #elem. Удалите у него класс www.

// Дан элемент #elem. Проверьте наличие у него класса www.

// Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.

// Дан элемент #elem. Узнайте количество его классов.

// Дан элемент #elem. Выведите последовательно алертом его классы.
// const elem = document.querySelector("#elem");
// elem.classList.add("www");

// // elem.classList.remove("www");
// console.log(elem.classList.contains("www"));
// elem.classList.toggle("sss");
// console.log(elem.classList.length);
// elem.classList.forEach((elem) => console.log(elem));
// const teamMeetingDate = new Date("March 16, 2030");
// console.log(teamMeetingDate);
// // "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
// console.log(preciseTeamMeetingDate);
// // "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"
// const date = new Date("March 16, 2030 14:25:00");

// date.setMinutes(50);
// // "Sat Mar 16 2030 14:50:00 GMT+0200"
// console.log(date);

// date.setFullYear(2040, 4, 8);
// // "Tue May 08 2040 14:50:00 GMT+0300"
// console.log(date);
// function amIWilson(p) {
//   // check if prime is Wilson
//   let factorial = 1;
//   for (let i = 2; i < p; i += 1) {
//     factorial *= i;
//   }
//   console.log(factorial);
//   const result = (factorial + 1) % (p * p);
//   console.log(result);
//   if (result === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(amIWilson(563));
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // Response handling
    console.log(response);
    return response.json();
  })
  .then((data) => {
    // Data handling
    console.log("DATA = ", data);
    data.forEach(({ id, name, username, email }) =>
      console.log(id, name, username, email)
    );
  })
  .catch((error) => {
    // Error handling
    console.log(error);
  });
