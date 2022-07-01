const result = _.add(2, 3);
console.log(result);
document.addEventListener(
  "click",
  _.throttle(() => {
    console.log("Scroll handler call every 300ms");
  }, 3000)
);
