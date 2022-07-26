class User {
  constructor(name, titleUp, titleLow, dateborn) {
    this.name = name;
    this.titleUp = titleUp;
    this.titleLow = titleLow;
    this.dateborn = dateborn;
  }
  start() {
    const timeId = setInterval(() => {
      timeToBorn(this.name, this.dateborn);
    }, 1000);
    this.timeId = timeId;
  }
  stop() {
    clearInterval(this.timeId);
  }
}

const dataUsers = [
  ["Аріна", "День народження Аріни", "До дня народження", "October 8, 2012"],
  ["Роман", "День народження Романа", "До дня народження", "June 1, 1978"],
  ["Ніка", "День народження Ніки", "До дня народження", "March 17, 2016"],
  ["Аня", "День народження Ані", "До дня народження", "November 27, 2017"],
  ["осінь", "Початок осені", "До початку осені", "September 1,2022"],
];

const users = dataUsers.map((user) => new User(...user)); // console.log(users);

// users.map((user) => console.log(user.title, user.dateborn));
const outputUsersEl = document.querySelector(".list-users");
renderUsers(users);
// const outputU
function renderUsers(users) {
  const markupUsers = users.reduce((markup, user) => {
    markup += `<li>
        <p>${user.titleUp}:  <b>${user.dateborn}</b></p>
        <p>${user.titleLow} лишилося:
        <b><span class="output-timer" data-name="${user.name}"></span></b></p>
        </li>`;
    user.start();
    return markup;
  }, "");
  outputUsersEl.innerHTML = markupUsers;
}
function timeToBorn(name, dateborn) {
  const currentDate = new Date();
  const born = new Date(dateborn);
  born.setFullYear(currentDate.getFullYear());
  let bornMinusCurrent = born.getTime() - currentDate.getTime();
  if (bornMinusCurrent < 0) {
    born.setFullYear(currentDate.getFullYear() + 1);
    bornMinusCurrent = born.getTime() - currentDate.getTime();
  }
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

// users.forEach((user) => user.start());
