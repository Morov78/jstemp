//  Дан элемент #elem. Добавьте ему класс www.

// Дан элемент #elem. Удалите у него класс www.

// Дан элемент #elem. Проверьте наличие у него класса www.

// Дан элемент #elem. Добавьте ему класс www, если его нет и удалите - если есть.

// Дан элемент #elem. Узнайте количество его классов.

// Дан элемент #elem. Выведите последовательно алертом его классы.
const elem = document.querySelector("#elem");
elem.classList.add("www");

// elem.classList.remove("www");
console.log(elem.classList.contains("www"));
elem.classList.toggle("sss");
console.log(elem.classList.length);
elem.classList.forEach((elem) => console.log(elem));
