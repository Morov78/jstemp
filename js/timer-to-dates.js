class User {
  constructor(name, title, dateborn) {
    this.name = name;
    this.title = title;
    this.dateborn = dateborn;
  }
  start() {
    const timeId = setInterval(() => {
      //   console.log(`${this.name}`);
      timeToBorn(this.name, this.dateborn);
    }, 1000);
    this.timeId = timeId;
  }
  stop() {
    clearInterval(this.timeId);
  }
}

const dataUsers = [
  ["Аріна", "Аріни", "October 8, 2012"],
  ["Роман", "Романа", "June 1, 1978"],
  ["Ніка", "Ніки", "March 17, 2016"],
  ["Аня", "Ані", "November 27, 2017"],
  ["осінь", "осені", "September 1,2022"],
];

const users = dataUsers.map((user) => new User(...user));
// console.log(users);

// users.map((user) => console.log(user.title, user.dateborn));
const outputUsersEl = document.querySelector(".list-users");
renderUsers(users);
// const outputU
function renderUsers(users) {
  const markupUsers = users.reduce((markup, user) => {
    markup += `<li>
        <p><b>${user.name}</b>  
        день народження ${user.title}: ${user.dateborn}</p>
        <p>До дня народження лишилося:
        <span class="output-timer" data-name="${user.name}"></span></p>
        </li>`;
    return markup;
  }, "");
  outputUsersEl.innerHTML = markupUsers;
}
function timeToBorn(name, dateborn) {
  const currentDate = new Date();
  const born = new Date(dateborn);
  //   console.log(currentDate.getFullYear());
  born.setFullYear(currentDate.getFullYear());
  let bornMinusCurrent = born.getTime() - Date.now();
  if (bornMinusCurrent < 0) {
    born.setFullYear(currentDate.getFullYear() + 1);
    bornMinusCurrent = born.getTime() - Date.now();
  }
  //   console.log(bornMinusCurrent);
  outputDate(name, convertMs(bornMinusCurrent));
}

function outputDate(name, dateObj) {
  const dateArray = Object.entries(dateObj);
  //   console.log(name);
  //   console.log(dateArray);
  const sel = outputUsersEl.querySelector(`[data-name=${name}]`);
  sel.textContent = `${dateObj.days} дні ${addLeadingZero(
    dateObj.hours
  )}:${addLeadingZero(dateObj.minutes)}:${addLeadingZero(dateObj.seconds)}`;
  //   dateArray.forEach(([dataSelector, value], index) => {
  //     outputDateEl.querySelector(`[data-${dataSelector}]`).textContent =
  //       addLeadingZero(value);
  //     if (dataSelector === "days") {
  //       return;
  //     }

  //   });
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

users.forEach((user) => user.start());
// users[1].start();
// users[2].start();
